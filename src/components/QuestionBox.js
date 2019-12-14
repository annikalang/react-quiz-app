// importing React library, as it must always be in the scope when creating components
import React from "react";

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
