import React, {useContext} from "react";
import {UserContext} from "../App";
import {useHistory} from "react-router-dom";
import {Button,Card,Collapse, Layout } from 'antd';

const Listings = (props) => {
  const {push} = useHistory();
  const {user} = useContext(UserContext);

  const seller = props.userList.filter((person) => {
    return person.id === props.item.user_id;
  });

  const modifyItem = () => {
    push(`/modify-item/${props.item.id}`);
  };


const { Panel } = Collapse;
  
   


return (
  
      
    <Layout>

  <Collapse >
  <Panel header={props.item.product_name}  >
    <Card style={{width:"300px"}} hoverable="true" title={`Seller:${seller[0].username}`} actions={[(user.id === props.item.user_id)? <Button onClick={modifyItem}>Edit</Button> : <Button>Buy</Button>]}>
        <p>{`Price: ${props.item.product_price}`}</p>
        <p>{`Quantity: ${props.item.product_quantity}`}</p>
        <p>{`Location:${props.item.country}`}</p>
        <p>  {`Market: ${props.item.market_name}`}</p>
        <p> {`Category: ${props.item.product_category}`} </p>
        <p> {`Description: ${props.item.product_description}`}</p>
    </Card>
  </Panel>
 

</Collapse>
</Layout>
 
 
);
};
 

export default Listings;


// user.id === props.item.user_id? <Button onClick={modifyItem}>Edit</Button> : <Button>Buy</Button>