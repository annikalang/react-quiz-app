// importing React library, as it must always be in the scope when creating components
// importing the useState method which will allow me to incorporate state in a function component (Hooks API)
import React, { useState } from "react";

// we don't create a class, instead we creatd a regular JS function
const QuestionBox = ({ question, options }) => {
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
    </div>
  );
};

// export function components
export default QuestionBox;
