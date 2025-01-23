
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { act, render, screen, waitFor } from "@testing-library/react";

const mockBasePath = ["/"]

describe("App", () => {
  it("Title should be WOOKIES MOVIES", async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={mockBasePath}>
          <App />
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(screen.queryByText("WOOKIES MOVIES")).toBeInTheDocument();
    });
  });
});
