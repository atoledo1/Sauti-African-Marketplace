import React, {useContext} from "react";
import {UserContext} from "../App";
import {useHistory} from "react-router-dom";
import {Button} from 'antd';

const ProductsList = (props) => {
  const {push} = useHistory();
  const {user} = useContext(UserContext);

  const seller = props.userList.filter((person) => {
    return person.id === props.item.user_id;
  });

  const modifyItem = () => {
    push(`/modify-item/${props.item.id}`);
  };

  return (
    <div >
      <div>Product: {props.item.product_name}</div>
      <div>Price: {props.item.product_price}</div>
      <div>Quantity: {props.item.product_quantity}</div>
      <div>Category: {props.item.product_category}</div>
      <div>Description: {props.item.product_description}</div>
      <div>Market: {props.item.market_name}</div>
      <div>Location: {props.item.country}</div>
      <div>Seller: {seller[0].username}</div>
      {user.id === props.item.user_id && (
        <Button onClick={modifyItem}>Edit</Button>
      )}
    </div>
  );
};

export default ProductsList;
