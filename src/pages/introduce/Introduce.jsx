import React from "react";
import "./Introduce.css";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const navigate = useNavigate();

  const TOTAL_QUESTIONS = 10;

  const startQuiz = () => {
    navigate(`/quiz/${TOTAL_QUESTIONS}`);
  };


  return (
    <div className="introduce">
      <div className="introduce-container">
        <img
          alt="quiz"
          src="https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-quiz-logo-with-speech-bubble-symbols-png-image_6568572.png"
        />
        <div onClick={startQuiz} className="introduce-btn">
          Quiz'e başla
        </div>
      </div>
    </div>
  );
};

export default Introduce;
