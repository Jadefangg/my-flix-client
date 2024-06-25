import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
//used as a navigation for the user to see the movies available - instead of the navbar in the course material!
export const MovieCarousel = ({ movies }) => {
  return (
    <Carousel>
      {movies.map((movie) => (
        <Carousel.Item key={movie._id}>
          <img
            className="d-block w-100" //d-block is a utility class that makes the image a block element!
            src={movie.ImagePath}
            alt={movie.Title}
          /> 
          <Carousel.Caption>
            <h3 id="movie-title-carousel">{movie.Title}</h3> //scss added for styling
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

MovieCarousel.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    })
  ).isRequired,
};