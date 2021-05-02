import React, {useContext} from "react";
import {PRODUCTS_PATH} from "../utils/URLs";
import {UserContext} from "../App";
import {useHistory} from "react-router-dom";
import {Button, Table, Space} from "antd";

const ProductList = (props) => {
  const {push} = useHistory();
  const {user} = useContext(UserContext);

  const seller = props.userList.filter((person) => {
    return person.id === props.item.user_id;
  });

  const modifyItem = () => {
    push(`/modify-item/${props.item.id}`);
  };
  const {Column} = Table;
  const DataUrl = `${PRODUCTS_PATH}`;
  return (
    <div>
      <Table dataSource={DataUrl}>
      <Column title="Product" dataIndex={props.item.product_name} />
      <Column title="Price" dataIndex={props.item.product_price} />
      <Column title="Quantity" dataIndex={props.item.product_quantity} />
      <Column title="Category" dataIndex={props.item.product_category} />
      <Column title="Description" dataIndex={props.item.product_description} />
      <Column title="Market" dataIndex={props.item.market_name} />
      <Column title="Location" dataIndex={props.item.country} />
      <Column title="Seller" dataIndex={seller[0].username} />

      {/* <div>Product: {props.item.product_name}</div>
      <div>Price: {props.item.product_price}</div>
      <div>Quantity: {props.item.product_quantity}</div>
      <div>Category: {props.item.product_category}</div>
      <div>Description: {props.item.product_description}</div>
      <div>Market: {props.item.market_name}</div>
      <div>Location: {props.item.country}</div>
      <div>Seller: {seller[0].username}</div> */}
      {user.id === props.item.user_id && (
        <Button onClick={modifyItem}>Edit</Button>
      )}
      </Table>
    </div>
  );
};

export default ProductList;
