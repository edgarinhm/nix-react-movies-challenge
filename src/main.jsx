import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ApiProvider from "./common/api/api-provider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiProvider>
      <BrowserRouter basename="/nix-react-movies-challenge">
        <App />
      </BrowserRouter>
    </ApiProvider>
  </StrictMode>
);
