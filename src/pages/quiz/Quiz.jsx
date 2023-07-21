import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { useParams } from "react-router-dom";
import QuestionCard from "../../components/questionCard/QuestionCard";
import Modal from "../../components/modal/Modal";

const Quiz = () => {
  const { amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [selectedAnswersArr, setSelectedAnswersArr] = useState([]);

  const API = "https://jsonplaceholder.typicode.com/posts";
  const fetchPost = async () => {
    await fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setQuestionsData(res);
      });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="quiz">
      {modal ? (
        <Modal selectedAnswersArr={selectedAnswersArr} />
      ) : (
        <QuestionCard
          questionsData={questionsData}
          amount={amount}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
          selectedAnswersArr={selectedAnswersArr}
          setSelectedAnswersArr={setSelectedAnswersArr}
        />
      )}
    </div>
  );
};

export default Quiz;
