import { act, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "./";

describe("HomePage", () => {
  it("Category should be Action", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(screen.getByText("Action")).toBeInTheDocument();
    });
  });
});
