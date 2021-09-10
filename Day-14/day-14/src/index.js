import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeTodo from "./App";
import ErrorPage from "./components/Error";
import AboutApp from "./components/AboutApp";
import AboutAuthor from "./components/AboutAuthor";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomeTodo} />
      <Route path="/about/about-app" exact component={AboutApp} />
      <Route path="/about/about-author" exact component={AboutAuthor} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
