import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap"; //Bootstrap components.
export const MovieCard = ({ book, onBookClick }) => {
    return (//Card component from Bootstrap.
      <Card>
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.author}</Card.Text>
        <Button onClick={() => onBookClick(book)} variant="link">
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};
  MovieCard.propTypes = {
    book: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      author: PropTypes.string
    }).isRequired,
    onBookClick: PropTypes.func.isRequired
  };