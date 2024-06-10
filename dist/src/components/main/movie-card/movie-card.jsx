import React from "react"; //React library. 
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap"; //Bootstrap components.
import { Link } from "react-router-dom"; //React Router component.
import "./movie-card.scss"; //Styling for the movie card.

export const MovieCard = ({ movie }) => {
    return (//Card component from Bootstrap.
      <Card>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.author}</Card.Text>
        <Link to = {`/movies/${encodeURIComponent(movie._id)}`}>
        <Button variant="link">Open</Button>
        </Link>
        
      </Card.Body>
    </Card>
  );
};
  MovieCard.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      author: PropTypes.string
    }).isRequired,
  };