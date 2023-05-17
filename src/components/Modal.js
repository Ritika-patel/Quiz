import React, { useState } from 'react';

const Modal = () => {
  return (
    <>
        <div className="modal">
          <div className="modal-content">
            <h2>This Quiz Includes</h2>
            <div className="cmts">
              <p>50% Passing Percentage</p>
              <p>5 Questions</p>
              <p>10 minutes</p>
              <p>1 Attempt Daily</p>
            </div>
            <br></br>
            <button className='QuizBtn'>Start</button>
            <br></br>
          </div>
        </div>
    
    </>
  );
};

export default Modal;
