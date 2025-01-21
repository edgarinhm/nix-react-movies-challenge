import { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./components/home"));

const Router = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <Suspense fallback={"...Loading"}>
            <HomePage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
