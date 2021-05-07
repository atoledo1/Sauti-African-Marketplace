import React, {useEffect, useState, useContext} from "react";
import {axiosWithAuth} from "../utils/axiosWIthAUTH";
import {useHistory} from "react-router-dom";
import {PRODUCTS_PATH, USERS_PATH} from "../utils/URLs";
import {UserContext} from "../App";

import { Space, Button} from 'antd';


import Listings from "./listing";


const Home = () => {
  const {push} = useHistory();
  const [itemsForSale, setItemsForSale] = useState([]);
  const {user, setUser} = useContext(UserContext);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    // get list of all users - single API call providing data to all children
    axiosWithAuth()
      .get(`${USERS_PATH}`)
      .then((res) => {
        setUserList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //set user context - uses username from localStorage if the page was reloaded
    let usernameSnapshot = user.username;
    if (usernameSnapshot === "") {
      usernameSnapshot = localStorage.getItem("username");
    }
    axiosWithAuth()
      .get(`${USERS_PATH}`)
      .then((res) => {
        const currentUser = res.data.data.filter(
          (u) => usernameSnapshot === u.username
        );
        const userId = currentUser[0].id;
        setUser({
          username: usernameSnapshot,
          id: userId,
        });
        
        axiosWithAuth()
          .get(`${PRODUCTS_PATH}`)
          .then((res) => {
            console.log(res);
            setItemsForSale(res.data.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addItem = () => {
    push("/add-item");
  };

  return (
    <div  style={{width:"100%", height:"100%"}}>
        <Space direction="horizontal" size="large">
      
      <h2 style={{marginLeft:"570px"}}>All Products <Button  onClick={addItem}>
          Add  new product
        </Button></h2>
        </Space>
        <div style={{width:"200vh", }}>
      {itemsForSale.map((item) => {
        return <Listings key={item.id} item={item} userList={userList} />;
      })}
    
        
      </div>
      
    </div>
  );
};

export default Home;

