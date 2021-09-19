import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import News from "./components/News";
import ErrorPage from "./components/Error";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/news" exact component={News} />
      <Route path="/contactus" exact component={ContactUs} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
