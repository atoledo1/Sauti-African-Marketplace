import React from "react";
import {Link} from "react-router-dom";
import "../App.css";
import {Menu} from "antd";


function Navigation(props) {
  const logout = function () {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    props.setLoggedIn(false);
  };
  return (
    <Menu mode="horizontal">
      <>
        {props.loggedIn ? (
          <>
            <Menu.Item>
              <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/mylistings"> My Listings</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/login" onClick={logout}>
                Log Out
              </Link>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item>
              <Link to="/register">Register</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/login">Log In</Link>
            </Menu.Item>
          </>
        )}
      </>
    </Menu>
  );
}
export default Navigation;
