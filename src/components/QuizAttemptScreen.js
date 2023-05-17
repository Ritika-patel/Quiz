import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizAttemptScreen = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'What is the function used to lookup a value in a table and return a corresponding value from the same row?',
      options: ['MATCH', 'INDEX', 'HLOOKUP', 'VLOOKUP'],
      answer: 'VLOOKUP',
    },
    {
      id: 2,
      question: 'What is the function used to lookup a value in a table and return a corresponding value from the same row?',
      options: ['MATCH', 'INDEX', 'HLOOKUP', 'VLOOKUP'],
      answer: 'VLOOKUP',
    },
    {
      id: 3,
      question: 'What is the function used to lookup a value in a table and return a corresponding value from the same row?',
      options: ['MATCH', 'INDEX', 'HLOOKUP', 'VLOOKUP'],
      answer: 'VLOOKUP',
    },
    {
      id: 4,
      question: 'What is the function used to lookup a value in a table and return a corresponding value from the same row?',
      options: ['MATCH', 'INDEX', 'HLOOKUP', 'VLOOKUP'],
      answer: 'VLOOKUP',
    },
    {
      id: 5,
      question: 'What is the function used to lookup a value in a table and return a corresponding value from the same row?',
      options: ['MATCH', 'INDEX', 'HLOOKUP', 'VLOOKUP'],
      answer: 'VLOOKUP',
    },
    // add more questions
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  let navigate = useNavigate();


  useEffect(() => {
    if (timeLeft === 0) {
      submitQuiz();
    } else {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);


  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const isCorrect = selectedOption === questions[currentQuestionIndex].answer;
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOption('');
    } else {
      submitQuiz();
    }
  };

  const submitQuiz = () => {
    navigate('/result');
  };

  return (
    <div className='screen'>
      <h1>Quiz Attempt Screen</h1>
      <p>{score}</p>
      <p>{currentQuestionIndex+1}</p>
      <p>{questions[currentQuestionIndex].question}</p>
      <div>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </div>
        ))}
      </div>
      <p>{timeLeft}</p>
      <button onClick={handleNextQuestion}>Next</button>
    </div>
  );
};

export default QuizAttemptScreen;
