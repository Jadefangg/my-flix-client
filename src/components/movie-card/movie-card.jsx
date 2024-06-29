import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //this is the fontawesome icon library which enables us to import the following.
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; // import solidHeart icon
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'; // import regularHeart icon

export const MovieCard = ({ movieData, user, onFavouritesUpdate }) => {
  // State to track whether the movie is in favorites
  const [isFavorite, setIsFavorite] = useState(false);
  const token = localStorage.getItem('token');

  // Function to toggle favorite status
  const toggleFavorite = async (event) => {
    event.preventDefault();

    const methodType = isFavorite ? "DELETE" : "POST";

    fetch(`https://frozen-bastion-60513-44d63176384c.herokuapp.com/users/${user._id}/${movieData._id}`, { //change to my heroku app <<<<<<
      method: methodType,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }).then((response) => response.json())
      .then((updatedUser) => {
        if (updatedUser) {
          localStorage.setItem("user", JSON.stringify(updatedUser));
          onFavouritesUpdate(updatedUser);
          setIsFavorite(!isFavorite);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      })
  };

  useEffect(() => {
    // Check local storage for favorite status on component mount
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedFavorites = storedUser.FavouriteMovies;
    if (storedFavorites.includes(movieData._id)) {
      setIsFavorite(true);
    }
  }, [movieData._id]);

  return (
    <Card className="h-100 bg-secondary bg-gradient text-light shadow" border="dark">
      <Button variant="link" onClick={toggleFavorite} className="ms-2" style={{ position: "absolute", top: "10px", right: "10px", zIndex: 1 }}>
        <FontAwesomeIcon icon={isFavorite ? solidHeart : regularHeart} size="lg" color={isFavorite ? "salmon" : "cyan"} /> 
      </Button>
      <Card.Img variant="top" src={movieData.ImagePath} />
      <Card.Body>
        <div>
          <Card.Title>{movieData.Title}</Card.Title>
          <Card.Text>{movieData.Description}</Card.Text>
        </div>
        <div className="mt-4 text-center">
          <Link to={`/movies/${encodeURIComponent(movieData._id)}`}>
            <Button variant="primary">Open</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movieData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Featured: PropTypes.bool.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string
    })
  }).isRequired,
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    FavouriteMovies: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  onFavouritesUpdate: PropTypes.func.isRequired
}