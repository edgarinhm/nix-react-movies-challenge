import { useMemo } from "react";
import { useParams } from "react-router-dom";
import useMovieStorage from "../../common/state-management/movie-storage";
import './movie-detail.css';

const MovieDetailPage = () => {
  const params = useParams();
  const { movies } = useMovieStorage();
  const movie = useMemo(() => movies.find(movie=>movie.id===params?.id), [params?.id]);

  return (
    <div className="movie-datail-card">
      <div className="movie-poster"><img src={movie?.poster} alt={`poster ${movie.title}`} /></div>
      <div className="movie-details">
        <div className="movie.title">{movie?.title} {movie?.imdb_rating}</div>
        <div className="movie-star-rating">{movie?.imdb_rating}</div>
        <div><span>year</span>|<span>length</span>|<span>director</span></div>
        <div><span>cast: </span>{movie.cast.join(', ')}</div>
        <div className="movie-description">{'Movie Description '}{movie.overview}</div>
      </div>
    </div>
  )
}

export default MovieDetailPage;