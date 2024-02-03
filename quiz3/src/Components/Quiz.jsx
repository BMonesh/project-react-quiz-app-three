import React, { useState } from "react";
import newQuestionsData from "./question.json"; 
import "../CSS/Quiz.css"; 
import { useNavigate } from "react-router-dom";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const navigate = useNavigate();

  const backToHome = () => {
    navigate(-1);
  };

  const handleAnswerClick = (selectedAnswer) => {
    setAttempts(attempts + 1);

    if (selectedAnswer === newQuestionsData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex === newQuestionsData.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAttempts(0);
    setShowResult(false);
  };

  return (
    <div className="new-container">
      {showResult ? (
        <div className="new-result-div">
          <h1 className="new-result-heading">Result</h1>
          <div className="new-dialogbox">
            <h2>{`Your score is ${(score / newQuestionsData.length) * 100}%`}</h2>
            <div className="new-two-buttons">
              <button id="new-play-again" onClick={resetQuiz}>
                Play Again
              </button>
              <button onClick={backToHome} id="new-back-2-home">
                Back to Home
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="heading-text">Question</h1>
          <div className="number">
            <h4>
              <span>Question {currentQuestionIndex + 1} of {newQuestionsData.length}</span>
            </h4>
          </div>
          <h2 className="question">
            {newQuestionsData[currentQuestionIndex].question}
          </h2>
          <div className="answers">
            {newQuestionsData[currentQuestionIndex].options.map((option, index) => (
              <div
                key={index}
                className="options"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
