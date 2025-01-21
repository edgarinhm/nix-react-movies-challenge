
import { axiosInstance } from "../api/api-client";
import { MovieApiUrl, SearchMovieApiUrl } from "./api-routes";

export const GetMovies = async () => {
 const url = MovieApiUrl.get();
 return (await axiosInstance.get(url)).data;
};

export const GetMoviesByQuery = async (query) => {
    const url = SearchMovieApiUrl.get(query);
    return (await axiosInstance.get(url)).data;
  };