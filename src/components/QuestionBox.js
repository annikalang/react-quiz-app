// importing React library, as it must always be in the scope when creating components
// importing the useState method which will allow me to incorporate state in a function component (Hooks API)
import React, { useState } from "react";

// we don't create a class, instead we created a regular JS function
// to compute the user's response and score, we need to pass the user's response from the QuestionBox component to the QuizBee component. So we need to add a new prop: selected (a function), ran when the user presses a button and we'll pass in the chosen answer
const QuestionBox = ({ question, options, selected }) => {
  // creating a state variable names answer using the useState function and setting the initial value of the answer variable from the options array that we're getting here as a prop(erty)
  const [answer, setAnswer] = useState(options); // the setAnswer function refers to a function that can be used to update the value of the answer variable
  return (
    // using the map function on the answer variable to render a series of buttons, using the value of the index from the answer array as the key attribute (not ideal but works for this simple example, ideally unique values which will never mutate should be used).
    // to intercept clicks on these buttons, we use the onClick event listener property which will run a function. Inside this function we'll run the setAnswer method that we declared using the useState hook and we'll rewrite the answer state array with a new array containing only one element, which is the answer chosen by a click.
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

// export function components
export default QuestionBox;
