import { Link } from "react-router-dom";
import "./movie-card.css";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/detail/${movie.slug}`}>
      <img
        loading="lazy"
        src={`${movie.backdrop}`}
        alt={`movie ${movie.title}`}
      />
    </Link>
  );
};

export default MovieCard;
