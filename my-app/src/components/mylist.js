import React, {useContext} from "react";
import {useHistory} from "react-router-dom";

import {UserContext} from "../App";
import {Button, Space, Card, Col, Row} from "antd";
import Title from "antd/lib/skeleton/Title";

const MyProducts = (props) => {
  const {push} = useHistory();
  const {user} = useContext(UserContext);

  const modifyItem = () => {
    push(`/modify-item/${props.item.id}`);
  };


  return (
    <div className="space-align-container">
      <div className="space-align-block">
        <Space align="center">
          <Card
            style={{width: "300px", textAlign:"center"}}
            hoverable="true"
            title={props.item.product_name}
            actions={[
              user.id === props.item.user_id && (
                <Button onClick={modifyItem}>Edit</Button>
              ),
            ]}
          >
            <p>Price: {props.item.product_price}</p>
            <p>Quantity: {props.item.product_quantity}</p>
            <p>Category: {props.item.product_category}</p>
            <p>Description: {props.item.product_description}</p>
            <p>Market: {props.item.market_name}</p>
            <p>Location: {props.item.country}</p>
          </Card>
        </Space>
      </div>
    </div>
  );
};
export default MyProducts;
