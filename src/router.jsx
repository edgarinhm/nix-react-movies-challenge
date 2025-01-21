import { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";

const HomePage = lazy(() => import("./components/home"));

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
      </Route>
    </Routes>
  );
};

export default Router;
