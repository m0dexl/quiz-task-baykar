import React, { useEffect, useState } from "react";
import "./QuestionCard.css";

const QuestionCard = ({
  questionsData,
  amount,
  count,
  setCount,
  setModal,
  selectedAnswersArr,
  setSelectedAnswersArr,
}) => {
  const [timer, setTimer] = useState(30);

  const [btnDisable, setBtnDisable] = useState(true);

  const slicedArray = questionsData.slice(0, amount);
  console.log("slicedarr", slicedArray);

  //   const answersArray = slicedArray[count]?.body.split(" ").slice(-4);
  //   console.log("answersarray", answersArray);

  const approvedChoice = (e) => {
    console.log(e.currentTarget.value);

    let newResult = {
      questionNo: `${count + 1}`,
      selectedAnswer: `${e.currentTarget.value}`,
    };

    setSelectedAnswersArr([...selectedAnswersArr, newResult]);

    setCount(count + 1);
    if (count === 9) {
      setModal(true);
    }
    setTimer(30);
    setBtnDisable(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer <= 20) {
        setBtnDisable(false);
      }
      if (timer === 0 && count < 10) {
        setCount(count + 1);
        setTimer(30);
        setBtnDisable(true);

        let newResult = {
          questionNo: `${count + 1}`,
          selectedAnswer: "Boş bıraktınız",
        };

        setSelectedAnswersArr([...selectedAnswersArr, newResult]);
      } else if (count >= 10) {
        setModal(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="questionCard">
      <div className="questionCard-timer">{timer}</div>
      <div className="questionCard-title">
        {count + 1}/10 - {slicedArray[count]?.body}
      </div>
      {slicedArray[count]?.body
        .split(" ")
        .slice(-4)
        .map((answer, i) => (
          <button
            onClick={approvedChoice}
            key={i}
            value={answer}
            disabled={btnDisable}
          >
            {answer}
          </button>
        ))}
    </div>
  );
};

export default QuestionCard;
