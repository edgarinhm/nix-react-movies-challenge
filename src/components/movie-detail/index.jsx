import { useMemo } from "react";
import { useParams } from "react-router-dom";
import useMovieStorage from "../../common/state-management/movie-storage";
import "./movie-detail.css";
import StarsRanking from "../../common/components/stars-rating";
import { useLocalStorage } from "../../common/state-management/local-storage";
import { LocalStorageKeys } from "../../common/constants/local-storage-keys";

const MovieDetailPage = () => {
  const params = useParams();
  const { movies } = useMovieStorage();
  const updateStorage = useLocalStorage((state) => state.updateStorage);
  const movieDetail = useLocalStorage((state) => state.movieDetail);

  const movie = useMemo(() => {
    const movie = movies.find((movie) => movie.slug === params?.id);
    if (movie) {
      updateStorage(LocalStorageKeys.movieDetail, movie);
    }
    return movieDetail?.slug === params?.id ? movieDetail : movie;
  }, [params?.id]);

  const releasedOn = new Date(movie?.released_on);

  if (!movie) {
    return null; //TODO:create error page and redirect to error boundary
  }

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
