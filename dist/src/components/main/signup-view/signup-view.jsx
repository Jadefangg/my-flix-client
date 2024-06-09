import React, { useState } from "react";
import { Button } from "react-bootstrap/lib/InputGroup";
import { Form } from "react-bootstrap/lib/Navbar";

export const LoginView = ({ onLoggedIn }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail]= useState("");
  const [birthday, setBirthday]= useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { //the const data will be used to send a request to the server for authentication.
      Username: username,
      Password: password
    };

    fetch("YOUR_API_URL/login", { //login endpoint 
      method: "POST", //sets endpoint method to POST.
      headers: {
        "Content-Type": "application/json"// postman -> body -> raw -> JSON!
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          onLoggedIn(data.user, data.token);
          // Store user data and token in localStorage
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="Username">
        <Form.Label>Username:</Form.Label>
       <Form.Control
        type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </Form.Group>
      
      <Form.Group controlId="Password">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </Form.Group>
      
      <Form.Group controlId="Email">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </Form.Group>

        <Form.Group controlId="Birthday">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
        </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};