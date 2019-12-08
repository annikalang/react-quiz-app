// whenever building a React-Component, the React library has to be imported first
import React, { Component } from "react";

// importing stylesheet
import "./assets/style.css";

// creating component called Quizbee, which extends the component class
class QuizBee extends Component {
  render () { // render method will return a JSX template, which renders on the page
    return (
      <div className="container">
        <div className="title">QuizBee</div>
      </div>
    );
  }
}
