import { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";

const HomePage = lazy(() => import("./components/home"));
const MovieDetailPage = lazy(() => import("./components/movie-detail"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path={"/"}
          element={
            <Suspense fallback={"...Loading"}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={"/detail/:id"}
          element={
            <Suspense fallback={"...Loading"}>
              <MovieDetailPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
