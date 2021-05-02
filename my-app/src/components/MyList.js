import React, {useContext} from "react";
import {useHistory} from "react-router-dom";

import {UserContext} from "../App";

const MyProducts = (props) => {
 
  const {push} = useHistory();
  const {user} = useContext(UserContext);
  

  const modifyItem = () => {
    push(`/modify-item/${props.item.id}`);
  };

  return (
    <div>
      <div>Product: {props.item.product_name}</div>
      <div>Price: {props.item.product_price}</div>
      <div>Quantity: {props.item.product_quantity}</div>
      <div>Category: {props.item.product_category}</div>
      <div>Description: {props.item.product_description}</div>
      <div>Market: {props.item.market_name}</div>
      <div>Location: {props.item.country}</div>
      
      {user.id === props.item.user_id && (
        <button onClick={modifyItem}>Edit</button>
      )}
    </div>
  );
};

export default MyProducts;
