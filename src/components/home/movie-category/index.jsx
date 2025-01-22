import MovieCard from "../movie-card.jsx";

const MovieCatergory = ({ categoryTitle, movies }) => {
  return (
    <div>
      <h6>{categoryTitle}</h6>
      {movies.map((movie) => {
        return <MovieCard key={`${categoryTitle}-${movie.id}`} movie={movie} />;
      })}
    </div>
  );
};

export default MovieCatergory;
