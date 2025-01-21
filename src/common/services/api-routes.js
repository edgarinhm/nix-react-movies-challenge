
export const MovieApiUrl = {
    get: () => "/movies",
  };
export const SearchMovieApiUrl = {
    get: (query)=>`/movies?q=${query}`
}