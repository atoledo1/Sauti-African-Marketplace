import React, {useContext} from "react";
import {useHistory} from "react-router-dom";

import {UserContext} from "../App";
import {Button, Space, Card, Col, Row} from "antd";


const MyProducts = (props) => {
  const {push} = useHistory();
  const {user} = useContext(UserContext);

  const modifyItem = () => {
    push(`/modify-item/${props.item.id}`);
  };


  return (
    // <div className="space-align-container1   backgroundgeneral" style={{height:"150vh"}}>
    //   <div className="space-align-block1"  >
    //     <Space wrap>
          <Card  id="tarjeta"className=" bodytext"
            style={{width: "300px", textAlign:"center"}}
            hoverable="true"
            bordered="false"
            title={props.item.product_name}
           
          >
            <p>Price: {props.item.product_price}</p>
            <p>Quantity: {props.item.product_quantity}</p>
            <p>Category: {props.item.product_category}</p>
            <p>Description: {props.item.product_description}</p>
            <p>Market: {props.item.market_name}</p>
            <p>Location: {props.item.country}</p>
            <br></br>
            <p>    {user.id === props.item.user_id && (
              <Button  type="primary"  onClick={modifyItem}>Edit</Button>
            )}                       </p>
          </Card>
    //     </Space>
    //   </div>
    // </div>
  );
};
export default MyProducts;
