import * as React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import App from "./App";

import history from "./helpers/history";

import "./styles.css";

const rootElement = document.getElementById("root");

render(
  <Router history={history}>
    <App />
  </Router>,
  rootElement
);
