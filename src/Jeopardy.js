/*const Category = this.state.data.category.title;*/

import React, { Component } from 'react';
//import our service
import JeopardyService from "./jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.answerInput = React.createRef();
    this.state = {
      data: {},
      score: 0,
      answer: ""
    }
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  submitAnswer = _event => {
    this.setState({ answer: this.answerInput.value })
    if (this.state.answer === this.data.answer) {
      this.setState({score: + this.data.value})
    } else {
      this.setState({score: - this.data.value})
    }
    return this.getNewQuestion()
  }
    

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    let category = "loading"
    if (this.state.data.category && this.state.data.category.title) {
      category = this.state.data.category.title
    }
    return (
      <div>
        <div>
          <strong>Question:</strong> {this.state.data.question}
        </div>
        <div>
          <strong>Points:</strong> {this.state.data.value}
        </div>  
        <div>
          <strong>Category:</strong> {category}
        </div>
        <div>
        <h3>Score: {this.state.score} </h3>
        </div>
        <div>
        <form onSubmit={this.submitAnswer}>
          <input type="text" ref={this.answerInput} />
          <button>Submit</button>
        </form>
        </div>
      </div>
    );
  }
}
export default Jeopardy;