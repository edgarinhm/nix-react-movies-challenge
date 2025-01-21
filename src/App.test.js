
import App from "./App";
import { act, render, screen, waitFor } from "@testing-library/react";

describe("App", () => {
  it("Title should be WOOKIES MOVIES", async () => {
    await act(async () => {
      render(
        <App />
      );
    });
    
    await waitFor(() => {
      expect(screen.queryByText("WOOKIES MOVIES")).toBeInTheDocument();
    });
  });
});
