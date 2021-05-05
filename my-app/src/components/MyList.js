import React, {useContext} from "react";
import {useHistory} from "react-router-dom";

import {UserContext} from "../App";
import {Button, Divider,Card, Layout } from 'antd'; 
import Title from "antd/lib/skeleton/Title";




const MyProducts = (props) => {
  const {push} = useHistory();
  const {user} = useContext(UserContext);

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
<Layout>
    
<Card title={props.item.product_name}

        
   
      
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
      </Layout>
      </>

 


      
      
  );
};
export default MyProducts
 {/* /* <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p> 
     </Panel>  */}

   