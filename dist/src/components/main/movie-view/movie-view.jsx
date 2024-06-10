import { useParams } from "react-router";
import {Link} from "react-router-dom";  
import "./movie-view.scss";
export const MovieView = ({ movie }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);

    return (
      <div>
        <div>
          <img className="w100" src={movie.image} />
        </div>
        <div>
          <span>Title: </span>
          <span>{movie.title}</span>
        </div>
        <div>
          <span>Director: </span>
          <span>{movie.author}</span>
        </div>
        <Link to = {`/`}>
        <button className="back-button">Back</button>
        </Link>
      </div>
    );
  };