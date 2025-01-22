import { useEffect, useState } from "react";
import "./home.css";
import { SERVER_SIDE_ERROR } from "../../common/constants/messages/error-messages";
import { GetMovies } from "../../common/services/movie-service";
import MovieCard from "./movie-card.jsx";
import { MoviesMockData } from "../../common/mocks/movies-mock-data.js";
import MovieCatergory from "./movie-category/index.jsx";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const loadMoviesData = async () => {
      setIsLoading(true);
      try {
        //const moviesData = await GetMovies();
        //setMovies(moviesData.movies);

        const moviesByGenre = new Set();
        MoviesMockData.forEach((movie) => {
          movie.genres.forEach((genre) => {
            moviesByGenre.add(genre);
          });
        });
        setGenres([...moviesByGenre]);
        setMovies(MoviesMockData);
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

  return (
    <>
      {errorMessage && <div>{errorMessage}</div>}
      {!isLoading && (
        <>
          {genres.map((genre) => {
            const moviesFiltered = movies.filter((movie) =>
              movie.genres.includes(genre)
            );
            return (
              <MovieCatergory
                key={`${genre}`}
                categoryTitle={genre}
                movies={moviesFiltered}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default HomePage;
