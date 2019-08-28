import React from "react";
import { Switch } from "react-router-dom";

import routeConfig from "./route.config";
import tfFaRouteConfig from "./2fa.routes.config";
import PrivateRoute from "./PrivateRoute";

// '/:id/:id/3/check'

const renderRouters = () => {

  const allRoutes = [];

  const fillArr = (routes = routeConfig) => {
    routes.map(route => {
      allRoutes.push(route);

      if (route.child) {
        allRoutes.splice(allRoutes.indexOf(route), 0, ...route.child);
        fillArr(route.child);
      }
    });
  };

  fillArr();
  return allRoutes.map((route, index) => {
    return <PrivateRoute key={index} {...route} />;
  });
};

const Routes = () => {
  return (
    <>
      <Switch>{renderRouters()}</Switch>
    </>
  );
};

export default Routes;
