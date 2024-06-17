import { MovieCard } from './movie-card';
import React, { useState, useEffect } from "react";
import { UserInfo } from "./user-info";
import { Link } from "react-router-dom";
//import { UserUpdate } from "./user-update";
//import { UserDelete } from "./user-delete";
//import { FavoriteMovies } from "./favorite-movie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile-view.scss";

export const ProfileView = ({ movie, user }) => {//Displaying user info via /users endpoint.
    const [userInfo, setUserInfo] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        fetch(`https://your-api-url/users/${user.id}`)
          .then(response => response.json())
          .then(data => setUserInfo(data))
          .catch(error => console.error('Error:', error));
      }, [user.id]);
    
      const handleUpdate = () => {
        fetch(`https://your-api-url/users/${user.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
            email: email,
          }),
        })
        .then(response => response.json())
        .then(data => setUserInfo(data))
        .catch((error) => {
          console.error('Error:', error);
        });
      };
    if (!userInfo) {
      return <div>User not found</div>;
    }
    else
    return (
      <div>
        <UserInfo user={userInfo} />
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="New username" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="New password" />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="New email" />
      <button onClick={handleUpdate}>Update</button>
        {/* ...other components... */}
      <MovieCard movie={movie} /> 
      </div>
      
    );
  };

  