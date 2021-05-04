import React from "react";
import {NavLink} from "react-router-dom";
import "../App.css";
import { Menu } from 'antd';
import MenuItem from "antd/lib/menu/MenuItem";


function Navigation(props) {
  const logout = function () {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    props.setLoggedIn(false);
  };
  return (
    <>
    <Menu  mode="horizontal">
        
      {props.loggedIn ? (
        <div>
            <Menu.Item >
          <NavLink to="/home">Home</NavLink>
          </Menu.Item>
          <Menu.Item >
          <NavLink to="/mylistings"> My Listings</NavLink>
          </Menu.Item>
          <Menu.Item>
          <NavLink to="/login" onClick={logout}>
            Log Out
          </NavLink>
          </Menu.Item>
        </div>
      ) : (
        <div>
            <Menu.Item>
          <NavLink to="/register">Register</NavLink>
          </Menu.Item>
          <MenuItem>
          <NavLink to="/login">Log In</NavLink>
          </MenuItem>
        </div>
      )}
      </Menu>
    </>
  );
}
export default Navigation;
