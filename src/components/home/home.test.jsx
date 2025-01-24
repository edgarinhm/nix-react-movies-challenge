import { act, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "./";

const renderWithRouter = (children) => {
  return render(<MemoryRouter>{children}</MemoryRouter>);
};

describe("HomePage", () => {
  it("Category should be Action", async () => {
    await act(async () => {
      renderWithRouter(<HomePage />);
    });

    await waitFor(() => {
      expect(screen.getByText("Action")).toBeInTheDocument();
    });
  });
});
