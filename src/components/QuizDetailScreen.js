import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/girl.png';
import Navbar from './Navbar';
import Modal from './Modal';

const QuizDetailScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='screen'>
      <Navbar />
      <div className="top-section">
        <div>
          <h1 className='heading'>The <a className='green'>Daily</a> MS <a className='green'>Excel</a> Quiz</h1>
        </div>
        <div>
          <img src={img} alt="my image" />
        </div>
      </div>

      <h1 className='heading2'>The Daily MS Excel Quiz</h1>


        <div className="cmts">
          <p>Leave a Comment</p>
          <p>Save Quiz</p>
          <p>Challenege a Friend</p>
        </div>
        <br />
      <p>
        This Microsoft Excel Proficiency Test is designed to evaluate an
        individual's knowledge and skills in using Microsoft Excel. It covers a
        wide range of topics, including da....<br></br>
        <a className="green">Read more</a>
      </p>
      <br></br>

      <h2>This Quiz Includes</h2>
      <div className="cmts">
          <p>50% Passing Percentage</p>
          <p>5 Questions</p>
          <p>10 minutes</p>
          <p>1 Attempt Daily</p>
        </div>
        <br></br>
        <Link to="/attempt">
        <button className='QuizBtn'>Take Quiz</button>
        </Link>
        {/* <button onClick={openModal} className='QuizBtn'>Take Quiz</button>

      {isModalOpen && (
        <Modal/>
      )} */}
    </div>
  );
};

export default QuizDetailScreen;
