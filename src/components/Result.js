// building another compnent to display the results and offer the user an option to play again

// always import React at first
import React from "react";

// creating function component called result, as props, we'lls bring in the score and the function playAgain.
const Result = ({score, playAgain}) => (
  // create a div with the className score-board, inside of which, we'll create another div.
  // the other div to output the score
  // building a button to invoke the contents of the playAgain prop as a function
  <div className="score-board">
    <div className="score">You scored {score} / 5 correct answers!</div>
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
  </div>
)

