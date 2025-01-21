import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { act, render, screen, waitFor } from "@testing-library/react";

describe("App", () => {
  it("Title should be WOOKIES MOVIES", async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={["/", "/detail"]}>
          <App />
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(screen.queryByText("Thikkiiana City Theater")).toBeInTheDocument();
    });
  });
});
