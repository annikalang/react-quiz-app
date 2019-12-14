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

// creating component called Quizbee, which extends the component class
class QuizBee extends Component {

  state = { // instantiating local state for this component with an array named questionBank (state should always be located at the nearest parent)
    questionBank: [] // this ist where our five questions would be stored once we pull them in from the API
  };

  getQuestions = () => { // function that invokes the quizService API and proceeds to pupulate the questionBank state variable with the results
    quizService().then(question => {
      this.setState({ // used to update the state variable (the only way it should be done, never write to a state variable directly)
        questionBank: question
      });
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
    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {this.state.questionBank.length > 0 &&
         this.state.questionBank.map(
         ({question, answers, correct, questionId}) => (
          <QuestionBox
           question={question}
           options={answers}
           key={questionId}
          />
          )
        )}
      </div>
    );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"))
