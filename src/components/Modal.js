import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle, faClock } from "@fortawesome/free-regular-svg-icons";


const Modal = () => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h1>Tquiz Rules</h1>
          <br></br>
          <div className="cmts">
            <div>
              <div className="flex4">
                <div>
                  <FontAwesomeIcon icon={faClock} size="2xl" />
                </div>
                <div>
                  <div className="">10 Mins</div>
                  <div>Keep in mind that it's a time-bound quiz</div>
                </div>
              </div>


              <div className="flex4">
                <div>
                  <FontAwesomeIcon icon={faQuestionCircle} size="2xl" />
                </div>
                <div>
                  <div className="bold">5 Questions</div>
                  <div>We believe that you will ace it!</div>
                </div>
              </div>

              <div className="flex4">
                <div>
                  <FontAwesomeIcon icon={faAward} size="2xl" />
                </div>
                <div>
                  <div className="">50% Passing Criteria</div>
                  <div>All the best see you on another side</div>
                </div>
              </div>
            </div>

            <p className="daily">This quiz can only be attempted once daily</p>
          </div>
          <br></br>
          <Link to="/attempt">
            <button className="QuizBtn">Start</button>
          </Link>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Modal;
