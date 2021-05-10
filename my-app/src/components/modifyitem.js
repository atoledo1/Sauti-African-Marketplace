import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWIthAUTH";
import {PRODUCTS_PATH} from "../utils/URLs";
import {useHistory, useParams} from "react-router-dom";
import {Button, Form, Input, Space, Divider, Layout} from "antd";

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
    <Layout>
    <div  className="backgroundgeneral" style={{width:"100%", height:"100vh"}}>
     
      <div class="container" className="backgroundgeneral" >
        <Form style={{width: "30%",  marginTop:"100px", marginLeft: "40%"}} layout="vertical">
        <Space  style={{ marginTop:"30px"}}size="small" direction="horizontal" wrap>
          <Form.Item label="Product:">
            <Input
              type="text"
              name="product_name"
              value={formValues.product_name}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item label="Price:">
            <Input
              type="text"
              name="product_price"
              value={formValues.product_price}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item label="Quantity:">
            <Input
              type="text"
              name="product_quantity"
              value={formValues.product_quantity}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item label="Category:">
            <Input
              type="text"
              name="product_category"
              value={formValues.product_category}
              onChange={onChange}
            />
          </Form.Item>

          <Form.Item label="Location:">
            <Input
              type="text"
              name="country"
              value={formValues.country}
              onChange={onChange}
            />
          </Form.Item>

          <Form.Item label="Market:">
            <Input
              type="text"
              name="market_name"
              value={formValues.market_name}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item label="Description:">
            <Input
              type="text"
              name="product_description"
              value={formValues.product_description}
              onChange={onChange}
            />
          </Form.Item>
         
            
          <Form.Item>
            <Button  type="primary" style={{marginTop:"29px", marginLeft:"10px"}}onClick={editListing} htmlType="submit">
              Save
            </Button>
          </Form.Item>
          <Form.Item>
            <Button style={{marginTop:"29px"}} type="primary" onClick={deleteListing} htmlType="submit">
              Delete
            </Button>
          </Form.Item>
   
     
          </Space>
        </Form>
      </div>
    </div>
    </Layout>
  );
};

export default ModifyItem;

