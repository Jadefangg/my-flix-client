import React from "react";
import { Button } from "react-bootstrap/lib/InputGroup"; //Bootstrap components.
import { Form } from "react-bootstrap/lib/Navbar"; //Bootstrap components.

export const LoginView = ({ onLoggedIn }) => {
  
const [username, setUsername] = useState("");
const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
      Username: username,
      Password: password
    };

    fetch("YOUR_API_URL/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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
  return ( //Tells the login api to validate username and password - callback!
  <Form onSubmit={handleSubmit}>
  <Form.Group controlId="formUsername">
    <Form.Label>Username:</Form.Label>
    <Form.Control
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
      minLength="3" 
    />
  </Form.Group>

  <Form.Group controlId="formPassword">
    <Form.Label>Password:</Form.Label>
    <Form.Control
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
);
}};