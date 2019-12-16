// whenever building a React-Component, the React library has to be imported first
import React, { Component } from "react";

// importing ReactDOM-Library to render our application on a web page
import ReactDOM from "react-dom";

// importing stylesheet
import "./assets/style.css";

// importing the quizService module
import quizService from "./quizService";

// importing function component
import QuestionBox from "./components/QuestionBox";

// importing the Result component
import Result from "./components/Result";

// creating component called Quizbee, which extends the component class
class QuizBee extends Component {

  state = { // instantiating local state for this component with an array named questionBank (state should always be located at the nearest parent)
    questionBank: [], // this is where our five questions would be stored once we pull them in from the API
    score: 0, // to keep the score
    responses: 0// to keep a track of the number of questions answered
  };

  getQuestions = () => { // function that invokes the quizService API and proceeds to pupulate the questionBank state variable with the results
    quizService().then(question => {
      this.setState({ // used to update the state variable (the only way it should be done, never write to a state variable directly)
        questionBank: question
      });
    });
  };

  // the computeAnswer function will check to see if the user's response matches with the actual correct answer and if so, we would want to increment a score count.
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      // if the user answers correctly, the core will be incremented by 1
      this.setState({
        score: this.state.score + 1
      });
    }
    // in all cases, we will increment the responses by 1, so we can track the number of responses. Using a ternary operator here to ensure we don't over-set the value of responses beyond 5 (because we only have 5 questions).
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    });
  };

  componentDidMount() { // running getQuestions function when this component loads up
    this.getQuestions();
  }

  render () { // render method will return a JSX template, which renders on the page
    // instead of the h4-tags(<h4>{question}</h4>), we will render instance of the QuestionBox component where we'll pass down properties:
    // 1. question, which will be dynamically boudn to the question text
    // 2. options, which will carry an array of answers for us to render buttons
    // 3. key to the unique questionId that we get in our data, essentiel when rendering lists as it helps React indentify and correlate an instance of a component with the data that it consumes
    // the answer selected by the user will run a function called computeAnswer, which will get the user's response and access to the acutal correct answer which we're getting from the API
    // another condition for rendering the QuestionBox component: if the value of the responses touches 5, we want to display the results
    // Once, we've chosen answers to all of the 5 questions, the QuestionBox component doesn't display anymore.
    // this gives us the opportunity to conditionally render the result -> renderin an h2-tag with the score.
    // Instead of the h2-element, we'll render an instance of the Result component, passing in the score and a reference to the playAgain function.
    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
         this.state.questionBank.map(
         ({question, answers, correct, questionId}) => (
          <QuestionBox
           question={question}
           options={answers}
           key={questionId}
           selected={answer => this.computeAnswer(answer, correct)}
          />
          )
        )}
        {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null}
      </div>
    );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"))
