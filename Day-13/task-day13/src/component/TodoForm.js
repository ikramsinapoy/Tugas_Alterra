import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      //Untuk memberikan data id random
      id: Math.floor(Math.random() * 10000),
      text: this.state.input,
    });
    this.setState({
      input: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="todo-form">
          <input
            placeholder="Add a todo"
            value={this.state.input}
            onChange={this.andleChange}
            name="text"
            className="todo-input"
          />
        </form>
        <button onClick={this.handleSubmit} className="todo-button">
          Add todo
        </button>
      </div>
    );
  }
}

export default TodoForm;
