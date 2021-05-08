import React from "react";
import {Link} from "react-router-dom";
import "../App.css";
import {Menu, Divider} from "antd";




function Navigation(props) {
  const logout = function () {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    props.setLoggedIn(false);
  };
  
  return (
      
       
    <Menu     style={{ position: 'fixed', zIndex: 1, width: '100%', height:"65px" }} mode="horizontal"  className="primary">
      <>
      <Menu.Item disabled="true"><h1>Sauti Marketplace</h1></Menu.Item>
        {props.loggedIn ? (
          <>
          <Divider type="vertical"/>
            <Menu.Item>
              <Link to="/home">Market</Link>
            </Menu.Item>
            <Divider type="vertical"/>
            
            <Menu.Item>
              <Link to="/mylistings"> Your Store </Link>
            </Menu.Item>
            <Divider type="vertical"/>
           
           
       
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
