import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ApiProvider from "./common/api/api-provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ApiProvider>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </StrictMode>
);
