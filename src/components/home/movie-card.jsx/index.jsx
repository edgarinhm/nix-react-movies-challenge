const MovieCard = ({ movie }) => {
    const genres = [];
  return (
    <div key={movie.id}>
        {
        movie.genres.map((genre)=>{
            return (
                <div key={`${movie.id}-${genre}}`}>genre</div>
            )
        })
        }
      <div>{movie.genres}</div>
    </div>
  );
};

export default MovieCard;
