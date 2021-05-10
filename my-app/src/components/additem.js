import React, {useState, useContext, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWIthAUTH";
import {NEW_ITEM_PATH} from "../utils/URLs";
import {useHistory} from "react-router-dom";
import {UserContext} from "../App";
import {Button, Form, Input, Layout} from "antd";

const AddItem = () => {
  const initialFormValues = {
    product_name: "",
    product_category: "",
    product_description: "",
    product_quantity: "",
    product_price: "",
    country: "",
    market_name: ""
  };

  const {push} = useHistory();
  const {user} = useContext(UserContext);

  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    if (user.id === "") {
      push("/mylistings")
    }
  }, []);

  const onChange = event => {
    console.log(event.target)
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    })
  }

  const onSubmit = event => {
    // event.preventDefault()
    axiosWithAuth()
      .post(`${NEW_ITEM_PATH}${user.id}`, formValues)
      .then((res) => {
        push("/mylistings");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <div
        className="backgroundgeneral"
        style={{width: "100%", height: "100vh"}}
      >
        <div class="container" className="backgroundgeneral">
          <Form
            onFinish={onSubmit}
            style={{width: "50%", marginTop: "100px", marginLeft: "25%"}}
            layout="horizontal"
          >
            <Form.Item
              label="Product"
              rules={[
                {required: true, message: "Please input the product's name"},
              ]}
            >
              <Input
                type="text"
                name="product_name"
                value={formValues.product_name}
                onChange={onChange}
              />
            </Form.Item>
            <Form.Item
              label="Category"
              rules={[
                {
                  required: true,
                  message: "Please input the product's category",
                },
              ]}
            >
              <Input
                type="text"
                name="product_category"
                value={formValues.product_category}
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item
              label="Description"
              rules={[
                {
                  required: true,
                  message: "Please input the product's description",
                },
              ]}
            >
              <Input
                type="text"
                name="product_description"
                value={formValues.product_description}
                onChange={onChange}
              />
            </Form.Item>
            <Form.Item
              label="Quantity"
              rules={[
                {
                  required: true,
                  message: "Please input the product's quantity",
                },
              ]}
            >
              <Input
                type="text"
                name="product_quantity"
                value={formValues.product_quantity}
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item
              label="Price"
              rules={[
                {required: true, message: "Please input the product's price"},
              ]}
            >
              <Input
                type="text"
                name="product_price"
                value={formValues.product_price}
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item
              label="Location"
              rules={[{required: true, message: "Please input the country"}]}
            >
              <Input
                type="text"
                name="country"
                value={formValues.country}
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item
              label="Market"
              rules={[
                {required: true, message: "Please input the market's name"},
              ]}
            >
              <Input
                type="text"
                name="market_name"
                value={formValues.market_name}
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item>
              <Button  type="primary"    style={{marginleft: "30px"}} htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default AddItem;
