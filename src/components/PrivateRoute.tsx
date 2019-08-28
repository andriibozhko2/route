import React from "react";
import { Redirect, Route } from "react-router-dom";
const pathTFA = "";
import TFA from './2fa';

const PrivateRoute = ({ render, uri, ...params }: any) => {
  const isTfaDisabled = false;

  const requiredRoutesTFA = [
    "/second",
  ];

  if (requiredRoutesTFA.includes(params.path)) {
    return <TFA to={`${params.path}/check`} />;
  }

  return !isTfaDisabled ? (
    <Route {...params} render={render} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
