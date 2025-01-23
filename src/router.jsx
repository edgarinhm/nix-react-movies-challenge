import { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { homeRoute, movieDetailRoute } from "./routes";

const HomePage = lazy(() => import("./components/home"));
const MovieDetailPage = lazy(() => import("./components/movie-detail"));

const Router = () => {
  return (
    <Routes>
      <Route path={homeRoute} element={<Layout />}>
        <Route
          path={homeRoute}
          element={
            <Suspense fallback={"...Loading"}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={`${movieDetailRoute.name}/${movieDetailRoute.param}`}
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
