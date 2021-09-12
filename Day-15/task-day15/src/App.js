import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="home-nav">
        <div>
          <h3>todos</h3>
        </div>

        <div className="link-about">
          <Link to="/about/about-app" className="icon-home">
            About App
          </Link>
          <Link to="/about/about-author" className="icon-home">
            About Author
          </Link>

          <Link to="/form" className="icon-home">
            Form
          </Link>
        </div>
      </div>

      <div className="todo-app">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
