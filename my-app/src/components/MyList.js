import React, {useContext} from "react";
import {useHistory} from "react-router-dom";

import {UserContext} from "../App";
import {Button, Table, Typography } from 'antd';


const MyProducts = (props) => {
  const {push} = useHistory();
  const {user} = useContext(UserContext);

  const modifyItem = () => {
    push(`/modify-item/${props.item.id}`);
  };

  const { Text } = Typography;
  
  const columns = [
    {
      title:"Product",
      dataIndex:`${props.item.product_name}`,
    },
    {
      title: 'Price',
      dataIndex: 'borrow',
    },
    {
      title: 'Quantity',
      dataIndex: 'repayment',
    },
    {
        title: 'Category',
        dataIndex: `${props.item.product_category}`,
      },
      {
        title: 'Description',
        dataIndex: `${props.item.product_description}`,
      },
      {
        title: 'Market',
        dataIndex: `${props.item.market_name}`,
      },
      {
        title: 'Location',
        dataIndex: `${props.item.country}`,
      },
  ];

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
        <Button onClick={modifyItem}>Edit</Button>
      )}
   
    </div>
  );
};

export default MyProducts;
