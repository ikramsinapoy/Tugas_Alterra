import React from "react";
import { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  addTodo = (todo) => {
    // Untuk melakukan pengecekan terhadap string kosong atau hanya berisi spasi
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...this.state.todos];

    this.setState({ todos: newTodos });
    console.log(...this.state.todos);
  };

  updateTodo = (todoId, newValue) => {
    // Untuk melakukan pengecekan terhadap string kosong atau hanya berisi spasi
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    this.setState((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  removeTodo = (id) => {
    const removedArr = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({ todos: removedArr });
  };

  completeTodo = (id) => {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div>
        <h1>todos</h1>
        <TodoForm onSubmit={this.addTodo} />
        <Todo
          todos={this.state.todos}
          completeTodo={this.completeTodo}
          removeTodo={this.removeTodo}
          updateTodo={this.updateTodo}
        />
      </div>
    );
  }
}

export default TodoList;
