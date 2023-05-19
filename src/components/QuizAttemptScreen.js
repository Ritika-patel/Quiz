import React, { useContext } from "react";
import QuizContext from "../context/quiz/quizContext";
import QuizResultScreen from "./QuizResultScreen";

const QuizAttemptScreen = () => {
  const {
    showResult,
    selectedOption,
    currentQuestionIndex,
    questions,
    handleNextQuestion,
    handleOptionChange,
    submitQuiz,
    minutesLeft,
    secondsLeft
  } = useContext(QuizContext);


  if (showResult === false) {
    return (
      <div className="screen2">
        <div className="timmer">
          <div className="q_no">
            <p>
              {currentQuestionIndex + 1} / {questions.length}
            </p>
          </div>
          <div className="time_left">
            <p>{minutesLeft}:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}</p>
          </div>
        </div>


        <p className="question">{questions[currentQuestionIndex].question}</p>
        <div>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div className="opt" key={index}>
              <div className="flex">
                <div className="flex">
                  <p className="options">{option}</p>
                </div>
                <div>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {currentQuestionIndex + 1 < questions.length ? (
          <button className="nextBtn" onClick={handleNextQuestion}>
            Next
          </button>
        ) : (
          <button className="submitBtn" onClick={submitQuiz}>
            Submit Quiz
          </button>
        )}
      </div>
    );
  } else {
    return <QuizResultScreen />;
  }
};

export default QuizAttemptScreen;
