import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import QuizContext from "../context/quiz/quizContext";
import { faArrowLeft, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';


const QuizResultScreen = () => {
  const { score, minutesLeft, secondsLeft } = useContext(QuizContext);
  const marks = (score * 100) / 5;
  const isPassing = marks >= 50;


  return (
    <div className="screen3">
      <Link to="/">
        <FontAwesomeIcon className="leftArrow" icon={faArrowLeft} />
      </Link>

      <div className="con">
        <h2>The Daily MS Excel Quiz</h2>
        <div className="box">
          <p className="green2">You Scored</p>
          <h1>{marks}%</h1>
          {isPassing ? (
            <>
              <div>Yeh, Success!</div>
              <p className="sucess">
                Success is yours, hardworksand determination always works, great future ahead, your courage continues that count.
              </p>
            </>
          ) : (
            <>
              <div className="comment">Oh Snap, You can do better!</div>
              <p className="sucess">
                Success is not final, failure is not fatal; it is the courage to
                continue that counts.
              </p>
            </>
          )}
        </div>

        <div className="detail flex">
          <div className="your_score">
            <div>Your Score</div>
            <h1 className="purple">{score}/5</h1>
            <p>Avg: 2 marks</p>
          </div>

          <div className="time_taken">
            <div>Time Taken</div>
            <h1 className="purple">{minutesLeft}:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}</h1>
            <p>Avg: 1:59 mins</p>
          </div>
        </div>

        <h1 className="logo purple">seekho</h1>
        <br></br>
        <div className="share">
          <p>
            <FontAwesomeIcon
              icon={faShareNodes}
              style={{ color: "#1e3050" }}
            />
            &nbsp;&nbsp; Share it with your friends!
          </p>
        </div>

      </div>

      <div className="leaderboard">
        <p>Leaderboard</p>
      </div>

      <div className="flex2 box2">
        <div className="profile_pic">

        </div>
        <div>
          <p className="name">Ronit Sarkar</p>
          <p className="green">+Follow</p>
        </div>
      </div>

      <button className="ans">Answers</button>

    </div>
  );
};

export default QuizResultScreen;
