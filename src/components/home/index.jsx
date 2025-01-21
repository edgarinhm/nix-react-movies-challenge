import { useEffect, useState } from "react";
import "./home.css";
import { SERVER_SIDE_ERROR } from "../../common/constants/messages/error-messages";
import { GetMovies } from "../../common/services/movie-service";
import MovieCard from "./movie-card.jsx";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const loadMoviesData = async () => {
      setIsLoading(true);
      try {
        const moviesData = await GetMovies();
        setMovies(moviesData.movies);
      } catch (error) {
        setErrorMessage(SERVER_SIDE_ERROR);
      } finally {
        setIsLoading(false);
      }
    };
    loadMoviesData();
  }, []);

  useEffect(() => {
    document.title = "Thikkiiana City Theater";
  }, []);

  console.log("movies", movies);

  return (
    <div className={"home-contaniner"}>
      {errorMessage && <div>{errorMessage}</div>}
      {!isLoading && (
        <div>
          {movies.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
