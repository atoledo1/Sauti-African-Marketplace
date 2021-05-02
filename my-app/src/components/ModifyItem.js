import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWIthAUTH";
import {PRODUCTS_PATH} from "../utils/URLs";
import {useHistory, useParams} from "react-router-dom";

const ModifyItem = () => {
  const initialFormValues = {
    product_name: "",
    product_category: "",
    product_description: "",
    product_quantity: "",
    product_price: "",
    country: "",
    market_name: "",
  };

  const {push} = useHistory();
  let {itemId} = useParams();

  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    axiosWithAuth()
      .get(`${PRODUCTS_PATH}/${itemId}`)
      .then((res) => {
        setFormValues(res.data.data);
      });
  }, [itemId]);

  const onChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const editListing = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .put(`${PRODUCTS_PATH}/${itemId}`, formValues)
      .then((res) => {
        push("/home");
      })
      .catch((err) => console.log(err));
  };

  const deleteListing = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .delete(`${PRODUCTS_PATH}/${itemId}`)
      .then((res) => {
        push("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2>Create a New Listing</h2>
      <div>
        <form>
          <label>
            Product:
            <input
              type="text"
              name="product_name"
              value={formValues.product_name}
              onChange={onChange}
            />
          </label>
          <label>
            Price:$
            <input
              type="text"
              name="product_price"
              value={formValues.product_price}
              onChange={onChange}
            />
          </label>
          <label>
            Quantity:
            <input
              type="text"
              name="product_quantity"
              value={formValues.product_quantity}
              onChange={onChange}
            />
          </label>
          <label>
            Category:
            <input
              type="text"
              name="product_category"
              value={formValues.product_category}
              onChange={onChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="product_description"
              value={formValues.product_description}
              onChange={onChange}
            />
          </label>
          <label className="item">
            Location:
            <input
              type="text"
              name="country"
              value={formValues.country}
              onChange={onChange}
            />
          </label>
          <label className="item">
            Market:
            <input
              type="text"
              name="market_name"
              value={formValues.market_name}
              onChange={onChange}
            />
          </label>
          <button onClick={editListing}> Save Changes</button>
          <button onClick={deleteListing}>Delete Product</button>
        </form>
      </div>
    </>
  );
};

export default ModifyItem;
