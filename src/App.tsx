import React from "react";
import Routes from "./components/routes";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <li>
        <NavLink exact activeClassName="active" to="/">
          First
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/second">
          Second
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/third">
          Third
        </NavLink>
      </li>
      <div
        style={{
          border: "1px solid black",
          margin: "10px"
        }}
      >
        <Routes />
      </div>
    </div>
  );
};

export default App;
