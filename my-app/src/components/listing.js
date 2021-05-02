import React, { useContext } from 'react'
import { UserContext } from '../App'
import { useHistory } from 'react-router-dom'

const ProductList = (props) => {
  console.log("props", props);
  const {push} = useHistory()
  const {user} = useContext(UserContext)

  return (
    <div>
      {props.items.map((item) => {
        return (
          <div>
            <div className="CardContainer">
              <h2>{item.product_name}</h2>
              <h3>{item.product_price} </h3>
              <h3> {item.product_quantity}</h3>
              <h3>{item.product_category}</h3>
              <h3> {item.country}</h3>
              <h3>{item.market_name} </h3>
              <h3> {item.product_description}</h3>
              <div> </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
