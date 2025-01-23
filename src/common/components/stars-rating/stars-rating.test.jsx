import { render, screen } from "@testing-library/react";
import StarsRanking from "./";

describe("StarsRanking", () => {
  it("Stars empty should count 5 when rating is 0", () => {
    render(<StarsRanking rating={0} />);
    const stars = screen.getAllByTestId("star-empty");
    expect(stars.length).toEqual(5);
  });

  it("Stars empty should count 5 when rating is 1", () => {
    render(<StarsRanking rating={1} />);
    const stars = screen.getAllByTestId("star-empty");
    expect(stars.length).toEqual(5);
  });

  it("Stars fill should count 1 when rating is 2", () => {
    render(<StarsRanking rating={2} />);
    const stars = screen.getAllByTestId("star-fill");
    expect(stars.length).toEqual(1);
  });

  it("Stars fill should count 2 when rating is 4", () => {
    render(<StarsRanking rating={4} />);
    const stars = screen.getAllByTestId("star-fill");
    expect(stars.length).toEqual(2);
  });

  it("Stars fill should count 2 when rating is 5", () => {
    render(<StarsRanking rating={5} />);
    const stars = screen.getAllByTestId("star-fill");
    expect(stars.length).toEqual(2);
  });

  it("Stars fill should count 3 when rating is 6", () => {
    render(<StarsRanking rating={6} />);
    const stars = screen.getAllByTestId("star-fill");
    expect(stars.length).toEqual(3);
  });

  it("Stars fill should count 3 when rating is 7", () => {
    render(<StarsRanking rating={7} />);
    const stars = screen.getAllByTestId("star-fill");
    expect(stars.length).toEqual(3);
  });

  it("Stars fill should count 4 when rating is 8", () => {
    render(<StarsRanking rating={8} />);
    const stars = screen.getAllByTestId("star-fill");
    expect(stars.length).toEqual(4);
  });
  it("Stars fill should count 4 when rating is 9", () => {
    render(<StarsRanking rating={9} />);
    const stars = screen.getAllByTestId("star-fill");
    expect(stars.length).toEqual(4);
  });

  it("Stars fill should count 5 when rating is 10", () => {
    render(<StarsRanking rating={10} />);
    const stars = screen.getAllByTestId("star-fill");
    expect(stars.length).toEqual(5);
  });
});
