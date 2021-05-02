import React, {useEffect, useState, useContext} from "react";

import {useHistory} from "react-router-dom";
import {PRODUCTS_PATH, NEW_ITEM_PATH, USERS_PATH} from "../util/api";
import {axiosAuth} from "../util/axios";
import {UserContext} from "../App";

import ProductList from "./listing";

const Home = () => {
  const {push} = useHistory();
  const [itemsForSale, setItemsForSale] = useState([]);
  const {user, setUser} = useContext(UserContext);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    // get list of all users - single API call providing data to all children
    axiosAuth()
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
    axiosAuth()
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
        // set list of items for sale
        // triggers children to mount
        // children require user context to mount correctly
        axiosAuth()
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
    push("/additem");
  };

  return (
    <div>
      <h2 className="home-title">Items for Sale</h2>
      {itemsForSale.map((item) => {
        return <ProductList key={item.id} item={item} userList={userList} />;
      })}
      <div>
        <button className="btn" onClick={addItem}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Home;
