import React from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./login-view.css";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password
    };

    fetch("https://movies-myflix-api-84dbf8740f2d.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
      .then((loginData) => {
        if (loginData.user) {
          localStorage.setItem("user", JSON.stringify(loginData.user));
          localStorage.setItem("token", loginData.token);
          onLoggedIn(loginData.user, loginData.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      })
  };

  return (
    <div className="form-container">
    <Form onSubmit={handleSubmit} className="mb-5" >
      <Form.Group className="mb-2" controlId="loginFormUsername">
        <Form.Label style={{fontFamily:"monospace",color:'orange',fontStyle:'italic'}}> 
          Username:
        </Form.Label>
        <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} minLength="8" required />
      </Form.Group>

      <Form.Group className="mb-2" controlId="loginFormPassword">
        <Form.Label style={{fontFamily:"monospace",color:'orange',fontStyle:'italic'}}>
          Password:
        </Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </Form.Group>

      <Button className="mt-4" type="submit" variant="primary">Submit</Button>

      <div className="mt-3 fst-italic"><Link to={`/signup`} >Don't have an account?</Link></div>
    </Form>
    </div>
  )
};

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired
}