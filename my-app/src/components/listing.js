import React, {useContext} from "react";
import {UserContext} from "../App";
import {useHistory} from "react-router-dom";
import {Button,Card, Divider} from 'antd';

const Listings = (props) => {
  const {push} = useHistory();
  const {user} = useContext(UserContext);

  const seller = props.userList.filter((person) => {
    return person.id === props.item.user_id;
  });

  const modifyItem = () => {
    push(`/modify-item/${props.item.id}`);
  };
  const gridStyle = {
    width: '100',
    textAlign: 'center',
   
    
  };
  const { Meta } = Card;

  return (


    
   

<>

    
<Card title={props.item.product_name}style={{}}
cover={`Seller:  ${seller[0].username}`}

        
   
      
actions={[
user.id === props.item.user_id && (<Button onClick={modifyItem}>Edit</Button>)]}>
    
        <Card.Grid style={gridStyle}>Price: {props.item.product_price}</Card.Grid>
        <Card.Grid style={gridStyle}>Quantity: {props.item.product_quantity}</Card.Grid>
        <Card.Grid style={gridStyle}>Category: {props.item.product_category}</Card.Grid>
        <Card.Grid style={gridStyle}>Description: {props.item.product_description}</Card.Grid>
        <Card.Grid style={gridStyle}>Market: {props.item.market_name}</Card.Grid>
        <Card.Grid style={gridStyle}>Location: {props.item.country}</Card.Grid>
        <Divider/>
        
       
      </Card>
      </>

 


      /* <div>Product: {props.item.product_name}</div>
      <div>Price: {props.item.product_price}</div>
      <div>Quantity: {props.item.product_quantity}</div>
      <div>Category: {props.item.product_category}</div>
      <div>Description: {props.item.product_description}</div>
      <div>Market: {props.item.market_name}</div>
      <div>Location: {props.item.country}</div>
      <div>Seller: {seller[0].username}</div>
      {user.id === props.item.user_id && (
        <Button onClick={modifyItem}>Edit</Button>
      )} */
      
  );
};

export default Listings;
