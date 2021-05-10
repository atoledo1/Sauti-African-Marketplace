import React, {useEffect, useState, useContext} from "react";
import {axiosWithAuth} from "../utils/axiosWIthAUTH";
import {useHistory} from "react-router-dom";
import {PRODUCTS_PATH, USERS_PATH} from "../utils/URLs";
import {UserContext} from "../App";

import {Space, Button, Layout, PageHeader} from "antd";

import Listings from "./listing";

const Home = () => {
  const {push} = useHistory();
  const [itemsForSale, setItemsForSale] = useState([]);
  const {user, setUser} = useContext(UserContext);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
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



  return (
    <Layout style={{minHeight:"100vh", height:"200vh"}} className="backgroundgeneral">
    <div style={{width: "100%", height: "100%", marginTop:"99px"}} className="backgroundgeneral">
    
            
 
    
            <h2 style={{textAlign:"center"}}> All Products:</h2>
      

    
        {itemsForSale.map((item) => {
          return   <Space  size="large" style={{marginLeft:"100px", marginTop:"30px"}} align="center" wrap>
          <Listings key={item.id} item={item} userList={userList} /> </Space>
        })}
        
     
    </div>
    </Layout>
  );
};

export default Home;
