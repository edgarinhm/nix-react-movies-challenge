import { render, screen } from "@testing-library/react";
import MovieDetailPage from "./";
import useMovieStorage from "../../common/state-management/movie-storage";
import { MoviesMockData } from "../../common/mocks/movies-mock-data";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { PAGE_NOT_FOUND } from "../../common/constants/messages/error-messages";

jest.mock("../../common/state-management/movie-storage");
jest.mock("react-router-dom");

const mockRenderWithErrorBoundary = (children) => {
  return render(
    <ErrorBoundary fallback={<ErrorBoundary />}>{children}</ErrorBoundary>
  );
};

describe("MovieDetailPage", () => {
  beforeEach(() => {
    useMovieStorage.mockReturnValue({
      movies: MoviesMockData,
    });
    useParams.mockReturnValue({ id: "the-dark-knight-2008" });
  });

  it(`Movie title should be "${MoviesMockData[0].title}"`, async () => {
    mockRenderWithErrorBoundary(<MovieDetailPage />);
    expect(screen.getByText(MoviesMockData[0].title)).toBeInTheDocument();
  });

  it(`Movie not found should show "404 not found"`, async () => {
    useParams.mockReturnValue({ id: "movie-not-found" });
    mockRenderWithErrorBoundary(<MovieDetailPage />);
    expect(screen.getByText(PAGE_NOT_FOUND)).toBeInTheDocument();
  });
});
