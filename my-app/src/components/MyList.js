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

  
  
  const { Meta } = Card;

  return (


    
   

<>
<Layout>
    
<Card  hoverable="true"title={props.item.product_name}

        
   
      
cover={[
user.id === props.item.user_id && (<Button onClick={modifyItem}>Edit</Button>)]}>
    
    
        <p>Price: {props.item.product_price}</p>
        <p>Quantity: {props.item.product_quantity}</p>
        <p>Category: {props.item.product_category}</p>
        <p>Description: {props.item.product_description}</p>
        <p>Market: {props.item.market_name}</p>
        <p>Location: {props.item.country}</p> 
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

   