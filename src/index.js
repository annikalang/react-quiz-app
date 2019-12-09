// whenever building a React-Component, the React library has to be imported first
import React, { Component } from "react";

// importing ReactDOM-Library to render our application on a web page
import ReactDOM from "react-dom";

// importing stylesheet
import "./assets/style.css";

// importing the quizService module
import quizService from "./quizService/";

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
    return (
      <div className="container">
        <div className="title">QuizBee</div>
      </div>
    );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"))
