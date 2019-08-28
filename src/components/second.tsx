import React from "react";
import { NavLink } from "react-router-dom";

const Second = () => {
  return (
    <>
      <div>Second </div>
      <NavLink to="/second/test">Test</NavLink>{" "}
      <NavLink to="/second/test1">Test1</NavLink>
    </>
  );
};

export default Second;
