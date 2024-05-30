import React from "react";

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
          } else {
            alert("No such user");
          }
        })
        .catch((e) => {
          alert("Something went wrong");
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