import React from "react";
import { Route, Redirect } from "react-router-dom";



const routeProtected = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={() => {
        if (token) {
         
          return <Component />;
        } else {
          
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default routeProtected;