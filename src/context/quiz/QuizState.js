import React, {useState, useEffect} from "react";
import QuizContext from "./quizContext";
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
          }
        ]);
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
        const [selectedOption, setSelectedOption] = useState('');
        const [score, setScore] = useState(0);
        const [timeLeft, setTimeLeft] = useState(600);
        const [showResult, setShowResult]=useState(false);
        const [quizSubmitted, setQuizSubmitted] = useState(false);
        const [isModalOpen, setIsModalOpen] = useState(false);


        // Timer 
        useEffect(() => {
          if (timeLeft === 0 || quizSubmitted) {
            submitQuiz();
            return; 
          }else{
            const timer = setTimeout(() => {
              setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timer);
          }

        }, [timeLeft, quizSubmitted]);
        const t = 600-timeLeft;
        const minutesLeft = Math.floor(t / 60);
        const secondsLeft = t % 60;
      
      //Option Change
        const handleOptionChange = (option) => {
          setSelectedOption(option);
        };
      
        //next Question
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
      
        //Submit Quiz
        const submitQuiz = () => {
        setShowResult(true);
        setQuizSubmitted(true);
        };

        //open modal
        const openModal = () => {
          setIsModalOpen(true);
        };

        //close modal
        const closeModal = () => {
          setIsModalOpen(false);
        };

    return(
        <QuizContext.Provider value={{isModalOpen, minutesLeft, secondsLeft, showResult, score, questions, currentQuestionIndex, selectedOption, handleNextQuestion, openModal, closeModal, handleOptionChange, submitQuiz }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizState;
