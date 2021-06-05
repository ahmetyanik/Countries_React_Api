import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Country from "./components/Country";
import Main from "./components/Main";
import "./index.css";

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <Main />
    </Route>

    <Route path="/country/:countryName">
      <Country/>
    </Route>
  </Router>,
  document.getElementById("root")
);
