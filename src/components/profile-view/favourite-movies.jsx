import { MovieCard } from "../movie-card/movie-card";
import PropTypes from 'prop-types';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const FavouriteMovies = ({ favouriteMovieList, user, onFavouritesUpdate }) => {
  return (
    <>
      <Row>
        <Col>
          <h2>Favourite Movies</h2>
        </Col>
      </Row>
      <Row>
        {favouriteMovieList.map((movie) => {
          return (
            <Col className="mb-4" key={movie._id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movieData={movie} user={user} onFavouritesUpdate={onFavouritesUpdate} />
            </Col>
          )
        })}
      </Row>
    </>
  )
};

FavouriteMovies.propTypes = {
  favouriteMovieList: PropTypes.arrayOf(PropTypes.shape({
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
  }).isRequired).isRequired,
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    FavouriteMovies: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  onFavouritesUpdate: PropTypes.func.isRequired
}