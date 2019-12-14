// importing React library, as it must always be in the scope when creating components
// importing the useState method which will allow me to incorporate state in a function component (Hooks API)
import React, { useState } from "react";

// we don't create a class, instead we creatd a regular JS function
const QuestionBox = ({ question, options }) => {
  // creating a state variable names answer using the useState function and setting the initial value of the answer variable from the options array that we're getting here as a prop(erty)
  const [answer, setAnswer] = useState(options); // the setAnswer function refers to a function that can be used to update the value of the answer variable
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
    </div>
  );
};

// export function components
export default QuestionBox;
