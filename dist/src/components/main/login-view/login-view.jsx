import React from "react";

export const LoginView = ({ onLoggedIn }) => {
const [username, setUsername] = useState("");
const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
      access: username,
      secret: password
    };

    fetch("https://openlibrary.org/account/login.json", {
        method: "POST",
        body: JSON.stringify(data)
      }).then((response) => {
        if (response.ok) {
          onLoggedIn(username);
        } else {
          alert("Login failed");
        }
      });
  return ( //Tells the login api to validate username and password - callback!
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // this updates the state of the username variable
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // this updates the state of the username variable
        />
      </label>
      <button type="submit">
        Submit
      </button>
    </form>
  );
};