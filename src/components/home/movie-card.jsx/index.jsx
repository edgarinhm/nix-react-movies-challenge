import './movie-card.css';

const MovieCard = ({ movie }) => {
     return (
    <>
      <img loading="lazy" src={`${movie.backdrop}`} alt={`movie ${movie.title}`} />
    </>
  );
};

export default MovieCard;
