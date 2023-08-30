import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Logement = lazy(() => import("./pages/Logement"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function RoutesConfig() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/P6-OpenClassrooms" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:logementId" element={<Logement />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default RoutesConfig;
