import { render, screen } from "@testing-library/react";
import MovieDetailPage from "./";
import useMovieStorage from "../../common/state-management/movie-storage";
import { MoviesMockData } from "../../common/mocks/movies-mock-data";

jest.mock("../../common/state-management/movie-storage");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest
    .fn()
    .mockReturnValue({ id: "d6822b7b-48bb-4b78-ad5e-9ba04c517ec8" }),
}));

describe("MovieDetailPage", () => {
  beforeEach(() => {
    useMovieStorage.mockReturnValue({
      movies: MoviesMockData,
    });
  });

  it(`Movie title should be "${MoviesMockData[0].title}"`, async () => {
    render(<MovieDetailPage />);
    expect(screen.getByText(MoviesMockData[0].title)).toBeInTheDocument();
  });
});
