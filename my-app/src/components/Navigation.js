import React from "react";
import {NavLink} from "react-router-dom";
import "../App.css";

function Navigation(props) {
  const logout = function () {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    props.setLoggedIn(false);
  };
  return (
    <>
      {props.loggedIn ? (
        <div>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/mylistings"> My Listings</NavLink>
          <NavLink to="/login" onClick={logout}>
            Log Out
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </div>
      )}
    </>
  );
}
export default Navigation;
