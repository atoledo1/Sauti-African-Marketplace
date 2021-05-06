import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWIthAUTH";
import {PRODUCTS_PATH} from "../utils/URLs";
import {useHistory, useParams} from "react-router-dom";
import {Button, Form, Input} from "antd";

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
      <h2>Modify Listing</h2>
      <div>
        <Form style={{width: "20%", margin: "25px"}} layout="vertical">
          <Form.Item label="Product">
            <Input
              type="text"
              name="product_name"
              value={formValues.product_name}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item label="Price">
            <Input
              type="text"
              name="product_price"
              value={formValues.product_price}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item label="Quantity">
            <Input
              type="text"
              name="product_quantity"
              value={formValues.product_quantity}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item label="Category">
            <Input
              type="text"
              name="product_category"
              value={formValues.product_category}
              onChange={onChange}
            />
          </Form.Item>

         

          <Form.Item label="Location">
            <Input
              type="text"
              name="country"
              value={formValues.country}
              onChange={onChange}
            />
          </Form.Item>

          <Form.Item label="Market">
            <Input
              type="text"
              name="market_name"
              value={formValues.market_name}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item label="Description">
            <Input
              type="text"
              name="product_description"
              value={formValues.product_description}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item>
            <Button onClick={editListing} htmlType="submit">
              {" "}
              Save Changes
            </Button>
          </Form.Item>
          <Form.Item>
            <Button onClick={deleteListing} htmlType="submit">
              Delete Product
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ModifyItem;

// <Form  style={{ width:"26%", margin:"25px"}}  layout="vertical" name="login" className="login-form" initialValues={{ remember: true }} onFinish={handleSubmit}>

// <Form.Item rules={[{ required: true, message: 'Please input your Username!' }]}label="Username">
//   <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"

//     id="logname"
//     name="username"
//     type="textbox"
//     onChange={handleChange}/>
//   </Form.Item>

// <Form.Item rules={[{ required: true, message: 'Please input your Password!' }]}label="Password">
//   <Input.Password   prefix={<LockOutlined className="site-form-item-icon" />}
//     id="logpass"
//     name="password"
//     type="password"
//     onChange={handleChange}
//     placeholder="Password"
//     />
//      </Form.Item>
//      <Space direction="vertical" size="large">
// <Form.Item name="remember" valuePropName="checked" noStyle>

//   <Checkbox>Remember me</Checkbox>
// </Form.Item>
//   <Form.Item>
// <Button type="primary"className="login-form-button" htmlType="submit">Log in</Button>

// </Form.Item>
// </Space>
// </Form>

// );
// }
