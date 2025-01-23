import { render, screen } from "@testing-library/react";
import SearchBox from "./";

describe("SearchBox", () => {
  it("Search Box should has arial label", () => {
    render(<SearchBox onChange={jest.fn()} placeholder={""} />);
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
  });
});
