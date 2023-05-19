import './App.css';
import QuizDetailScreen from './components/QuizDetailScreen';
import QuizAttemptScreen from './components/QuizAttemptScreen';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizState from './context/quiz/QuizState';

function App() {
  return (
    <QuizState>
      <Router>
        <div className="container">
          <Routes>
            <Route path='/' element={<QuizDetailScreen />} />
            <Route path='/attempt' element={<QuizAttemptScreen />} />
          </Routes>
        </div>
      </Router>
    </QuizState>
  );
}

export default App;
