import React, {useState} from "react";
import axiosAuth from "../util/axios";
import {useHistory} from "react-router-dom";
import { NEW_ITEM_PATH } from '../util/api'
import {UserContext} from '../App'

const AddItem = () => {
    const initialFormValues = {
    product_name: "",
    product_price: "",
    product_quantity: "",
    product_category: "",
    country: "",
    market_name: "",
    product_description: "",
  }
  const {push} = useHistory()
  const {user} = useContext(UserContext)
  const [formValues, setFormValues] = useState(initialFormValues)
  
  useEffect(() => {
    // console.log(user)
    if (user.id === '') {
        push('/myprofile')
    }
}, [])

const handleChange = event => {
    console.log(event.target)
    setFormValues({
        ...formValues,
        [event.target.name]: event.target.value
    })
}

  

  const handleSubmit = (event) => {
    event.preventDefault()
    axiosAuth()
        .post(`${NEW_ITEM_PATH}${user.id}`, formValues)
        .then(res => {
            push('/home')
        })
        .catch(err => console.log(err))
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Add a new product:</div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="product_name"
            value={formValues.product_name}
            onChange={handleChange}
            placeholder="Name"
          />

          <div>
            <label>Price</label>
            <input
              type="text"
              name="product_price"
              value={formValues.product_price}
              onChange={handleChange}
              placeholder="Price"
            />
          </div>
          <div>
            <label>Quantity</label>
            <input
              type="text"
              name="product_quantity"
              value={formValues.product_quantity}
              onChange={handleChange}
              placeholder="Quantity"
            />
          </div>
          <div>
            <label>Category</label>
            <input
              type="text"
              name="product_category"
              value={formValues.product_category}
              onChange={handleChange}
              placeholder="Category"
            />
          </div>

          <div>
            <label>Location</label>
            <input
              type="text"
              name="country"
              value={formValues.country}
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
              value={formValues.product_description}
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
