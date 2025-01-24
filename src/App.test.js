import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockBasePath = ["/"];

const renderWithRouter = (children, initialEntries) => {
  return render(<MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>);
};

describe("App", () => {
  it("Title should be WOOKIES MOVIES", async () => {
    await act(async () => {
      renderWithRouter(<App />, mockBasePath);
    });

    await waitFor(() => {
      expect(screen.queryByText("WOOKIES MOVIES")).toBeInTheDocument();
    });
  });

  it("Filter movies by searbox value 'batman'", async () => {
    await act(async () => {
      renderWithRouter(<App />, mockBasePath);
    });
    const searchboxInput = screen.getByRole('searchbox');
    const user = userEvent.setup();
    await user.click(searchboxInput);
    await user.paste('batman');
    expect(screen.getAllByAltText(/batman/i).length).toEqual(2);
  });
});
