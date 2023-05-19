import React from "react";
import QuizContext from "./quizContext";
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const QuizState = (props) => {
    
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
        const letters = ['A', 'B', 'C', 'D'];
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
        const [selectedOption, setSelectedOption] = useState('');
        const [score, setScore] = useState(0);
        const [timeLeft, setTimeLeft] = useState(600);
        const [showResult, setShowResult]=useState(false);
        const [quizSubmitted, setQuizSubmitted] = useState(false);

      
      
        useEffect(() => {
          if (timeLeft === 0 || quizSubmitted) {
            submitQuiz();
            return; // Stop the timer if time runs out or quiz is submitted
          }else{
            const timer = setTimeout(() => {
              setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timer);
          }

        }, [timeLeft, quizSubmitted]);
      
      
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
        setShowResult(true);
        setQuizSubmitted(true);
        };
        const t = 600-timeLeft;
        const minutesLeft = Math.floor(t / 60);
        const secondsLeft = t % 60;

        const [isModalOpen, setIsModalOpen] = useState(false);

        const openModal = () => {
          setIsModalOpen(true);
        };
        const closeModal = () => {
          setIsModalOpen(false);
        };

    return(
        <QuizContext.Provider value={{isModalOpen, minutesLeft, secondsLeft, showResult, timeLeft, score, questions, currentQuestionIndex, selectedOption, handleNextQuestion, openModal, closeModal, handleOptionChange, submitQuiz }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizState;
