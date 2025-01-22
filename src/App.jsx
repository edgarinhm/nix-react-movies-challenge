import { BrowserRouter } from "react-router-dom";
import Router from "./router";

function App() {
  return (
    <BrowserRouter basename="/nix-react-movies-challenge">
      <Router />
    </BrowserRouter>
  );
}

export default App;
