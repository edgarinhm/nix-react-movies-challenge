import { useMemo } from "react";
import { useParams } from "react-router-dom";
import useMovieStorage from "../../common/state-management/movie-storage";
import "./movie-detail.css";
import StarsRanking from "../../common/components/stars-rating";

const MovieDetailPage = () => {
  const params = useParams();
  const { movies } = useMovieStorage();
  const movie = useMemo(
    () => movies.find((movie) => movie.id === params?.id),
    [params?.id]
  );
  const releasedOn = new Date(movie?.released_on);

  return (
    <div className="movie-datail-card">
      <div className="movie-poster">
        <img
          loading={"lazy"}
          src={movie?.poster}
          alt={`poster ${movie?.title}`}
        />
      </div>
      <div className="movie-details">
        <div className="movie-title-group">
          <div className="movie-title">
            <h2>{movie?.title}</h2> {movie?.classification}
          </div>
          <StarsRanking rating={movie?.imdb_rating} />
        </div>
        <div>
          <span>
            {"year "}
            {releasedOn.getFullYear()}
          </span>
          {" | "}
          <span>
            {"length "} {movie?.length}
          </span>
          {" | "}
          <span>
            {"director "}
            {movie?.director}
          </span>
        </div>
        <div>
          <span>{"cast:"} </span>
          {movie?.cast.join(", ")}
        </div>
        <div className="movie-description">
          {"Movie Description "}
          {movie?.overview}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
