import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //const [birthday, setBirthday] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
     // Birthday: birthday
    }

    fetch("https://frozen-bastion-60513-44d63176384c.herokuapp.com/users", { //my heroku app <<<<<<
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.ok) {
        alert("Signup successful. You can now log in to your account.");
        //window.location.reload();
        navigate('/login');
      } else {
        alert("Signup failed.")
      }
    })
  };

  return (
    <Form style={{margin:'60px'}} onSubmit={handleSubmit}>
      <Form.Group style={{color:'red'}} controlId="signupFormUsername">
        <Form.Label>
          Username:
        </Form.Label>
        <Form.Control  type="text" value={username} onChange={(e) => setUsername(e.target.value)} minLength="8" required />
      </Form.Group>

      <Form.Group style={{color:'red'}} className="mb-2" controlId="signupFormPassword">
        <Form.Label>
          Password:
        </Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength="10" required />
      </Form.Group>

      <Form.Group style={{color:'red'}} className="mb-2" controlId="signupFormEmail">
        <Form.Label>
          Email:
        </Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>

     

      <Button className="mt-4" type="submit" variant="primary">Submit</Button>
    </Form>
  )
};