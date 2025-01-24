import MovieCard from "../movie-card.jsx";
import "./movie-category.css";

const MovieCatergory = ({ categoryTitle, movies }) => {
  return (
    <div data-testid="movie-category" className="movie-category-container">
      <h6>{categoryTitle}</h6>
      <div className="movie-category-row">
        {movies.map((movie) => {
          return (
            <MovieCard key={`${categoryTitle}-${movie.id}`} movie={movie} />
          );
        })}
      </div>
    </div>
  );
};

export default MovieCatergory;
