import React from 'react';


const QuizResultScreen = () => {
  const score = 10;
  return (
    <div className='screen'>
      <h1>{score} Quiz Result Screen</h1>
      <p> Karma Points earned!</p>
      <p>
        Karma points are awarded for various actions like attempting quizzes and
        watching videos, allowing you to move up the leaderboards and unlock new
        features
      </p>
      <button>Check Result</button>
    </div>
  );
};

export default QuizResultScreen;
