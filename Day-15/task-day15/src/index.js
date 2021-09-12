import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeTodo from "./App";
import ErrorPage from "./components/Error";
import AboutApp from "./components/AboutApp";
import AboutAuthor from "./components/AboutAuthor";
import Form from "./components/Form";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomeTodo} />
      <Route path="/about/:id" exact component={AboutApp} />
      <Route path="/about/about-author" exact component={AboutAuthor} />
      <Route path="/form" exact component={Form} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
