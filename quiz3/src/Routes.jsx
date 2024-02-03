import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default Routers;