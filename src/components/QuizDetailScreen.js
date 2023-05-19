import React, { useContext } from "react";
import img from "../assets/girl.png";
import Navbar from "./Navbar";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle, faClock, faQuestionCircle, faFileAlt, faSave, faComment } from "@fortawesome/free-regular-svg-icons";
import QuizContext from "../context/quiz/quizContext";

const QuizDetailScreen = () => {
  const { isModalOpen, openModal, closeModal } = useContext(QuizContext);

  return (
    <div className="screen">
      <div className={`dark ${isModalOpen ? "overlay-open" : ""}`}>
        <Navbar />
        <div className="top-section">
          <div>
            <h1 className="heading">
              The <a className="green">Daily</a> MS{" "}
              <a className="green">Excel</a> Quiz
            </h1>
          </div>
          <div>
            <img src={img} alt="my image" />
          </div>
        </div>

        <h1 className="heading2">The Daily MS Excel Quiz</h1>

        <div className="cmts">
          <p>
            <FontAwesomeIcon icon={faComment} /> &nbsp; Leave a Comment
          </p>
          <p>
            <FontAwesomeIcon icon={faSave} /> &nbsp; Save Quiz
          </p>
          <p>
            <FontAwesomeIcon icon={faAward} /> &nbsp; Challenege a Friend
          </p>
        </div>
        <br />
        <p>
          This Microsoft Excel Proficiency Test is designed to evaluate an
          individual's knowledge and skills in using Microsoft Excel. It covers
          a wide range of topics, including da....<br></br>
          <a className="green">Read more</a>
        </p>
        <br></br>

        <h2>This Quiz Includes</h2>
        <div className="cmts">
          <p>
            <FontAwesomeIcon icon={faFileAlt} /> &nbsp; 50% Passing Percentage
          </p>
          <p>
            <FontAwesomeIcon icon={faQuestionCircle} /> &nbsp; 5 Questions
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} /> &nbsp; 10 minutes
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} /> &nbsp; 1 Attempt Daily
          </p>
        </div>
        <br></br>
      </div>
      <button onClick={openModal} className="QuizBtn">
        Start Quiz
      </button>
      {isModalOpen && (
        <div className="ModalOverlay">
          <Modal closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default QuizDetailScreen;
