import React from "react";
import QuizContext from "./quizContext";
import { useState } from 'react';

const QuizState = (props) => {
    return(
        <QuizContext.Provider>
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizState;
