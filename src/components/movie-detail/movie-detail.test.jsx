import { render, screen } from "@testing-library/react";
import MovieDetailPage from "./";
import useMovieStorage from "../../common/state-management/movie-storage";
import { MoviesMockData } from "../../common/mocks/movies-mock-data";
import { useParams } from "react-router-dom";

jest.mock("../../common/state-management/movie-storage");
jest.mock("react-router-dom");

describe("MovieDetailPage", () => {
  beforeEach(() => {
    useMovieStorage.mockReturnValue({
      movies: MoviesMockData,
    });
    useParams.mockReturnValue({ id: "the-dark-knight-2008" });
  });

  it(`Movie title should be "${MoviesMockData[0].title}"`, async () => {
    render(<MovieDetailPage />);
    expect(screen.getByText(MoviesMockData[0].title)).toBeInTheDocument();
  });

  it(`Movie title should null "${MoviesMockData[0].title}"`, async () => {
    useParams.mockReturnValue({ id: "the-dark-knight-20" });
    render(<MovieDetailPage />);
    expect(screen.queryByText(MoviesMockData[0].title)).not.toBeInTheDocument();
  });
});
