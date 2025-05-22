import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import React, { Suspense } from "react";
import Loder from "./utils/Loder";

const Home = React.lazy(() => import("./Component/Home"));
const About = React.lazy(() => import("./Component/About"));
const Projects = React.lazy(() => import("./Component/Projects"));
const Contect = React.lazy(() => import("./Component/Contect"));

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route
              index
              element={
                <Suspense fallback={<Loder />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<Loder />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/projects"
              element={
                <Suspense fallback={<Loder />}>
                  <Projects />
                </Suspense>
              }
            />
            <Route
              path="/contect"
              element={
                <Suspense fallback={<Loder />}>
                  <Contect />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
