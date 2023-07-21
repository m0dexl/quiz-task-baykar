import React from "react";
import "./Modal.css";

const Modal = ({ selectedAnswersArr }) => {
  return (
    <div className="modal">
      <div className="modal-title">Quiz Sonucu</div>
      <div onClick={() => (window.location = "/")} className="modal-btn">
        Yeniden başla
      </div>
      <div className="modal-resultContainer">
        <div className="modal-resultTitle">Cevaplar</div>
        {selectedAnswersArr.map((r, i) => (
          <div
            className={
              r.selectedAnswer !== "Boş bıraktınız"
                ? "modal-result-filled"
                : "modal-result-empty"
            }
            key={i}
          >
            {r.questionNo} - {r.selectedAnswer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
