import React from "react";
import "../CSS/Home.css"
import { useNavigate } from "react-router-dom";
import Quiz from "./Quiz";

function Home() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/Quiz"); 
  };

  return (
    <div className="new-home-area">
      <h1 className="new-text-center">Quiz App</h1> 
      <button onClick={startQuiz} className="new-play-btn">Play</button> 
    </div>
  );
}

export default Home;
