import MovieCard from "../movie-card.jsx";
import './movie-category.css'

const MovieCatergory = ({ categoryTitle, movies }) => {
  return (
    <div className="movie-caterogy-container">
      <h6>{categoryTitle}</h6>
      <div className="movie-caterogy-row">
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
