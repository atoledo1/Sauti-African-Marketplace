import React, {useState} from "react";
import axiosAuth from "../util/axios";
import {useHistory} from "react-router-dom";

const AddItem = () => {
  const {push} = useHistory();
  const [addItem, setAddItem] = useState({
    product_name: "",
    product_category: "",
    product_description: "",
    product_quantity: "",
    product_price: "",
    country: "",
    market_name: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setAddItem({
      ...addItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosAuth()
      .post("/market/user/:id", addItem)
      .then((res) => {
        setAddItem({
          country: "",
          market_name: "",
          product_category: "",
          product_description: "",
          product_name: "",
          product_price: "",
          product_quantity: "",
        });
        if (res) {
          push("/Home");
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Add a new product:</div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="product_name"
            value={addItem.product_name}
            onChange={handleChange}
            placeholder="Name"
          />

          <div>
            <label>Price</label>
            <input
              type="text"
              name="product_price"
              value={addItem.product_price}
              onChange={handleChange}
              placeholder="Price"
            />
          </div>
          <div>
            <label>Quantity</label>
            <input
              type="text"
              name="product_quantity"
              value={addItem.product_quantity}
              onChange={handleChange}
              placeholder="Quantity"
            />
          </div>
          <div>
            <label>Category</label>
            <input
              type="text"
              name="product_category"
              value={addItem.product_category}
              onChange={handleChange}
              placeholder="Category"
            />
          </div>

          <div>
            <label>Location</label>
            <input
              type="text"
              name="country"
              value={addItem.country}
              onChange={handleChange}
              placeholder="Location"
            />
          </div>
          <div>
            <label>Market Name</label>
            <input
              type="text"
              name="market_name"
              value={addItem.market_name}
              onChange={handleChange}
              placeholder="Market Name"
            />
          </div>

          <div>
            <label>Description</label>
            <input
              type="text"
              name="product_description"
              value={addItem.product_description}
              onChange={handleChange}
              placeholder="Description"
            />
          </div>
          <div>
            <button type="submit">Add product</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddItem;
