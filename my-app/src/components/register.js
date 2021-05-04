import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import * as yup from "yup";
import registerSchema from "../RegisterShema";
import axios from "axios";
import {BASE_URL, REGISTER_PATH} from "../utils/URLs";
import "../App.css";

import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import {Form, Input, Button} from "antd";
const initialForm = {
  username: "",
  email: "",
  password: "",
};

function Register() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    axios.post(`${BASE_URL}${REGISTER_PATH}`, form).then((res) => {
      console.log(res.data.data.password);
      history.push("/login");
    });
  };

  return (
    <Form style={{width: "26%", margin: "25px"}} onFinish={handleSubmit}>
      <Form.Item rules={[
          {
            required: true,
            message: 'Please input your username!',
           
          },
        ]} label="Username">
        <Input
          id="name"
          name="username"
          type="textbox"
          onChange={handleChange}
          prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"
        />
      </Form.Item>
      <Form.Item rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}label="Email">
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeHolder="email" id="mail" name="email" type="email" onChange={handleChange} />
      </Form.Item>
      <Form.Item  rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}label="Password">
        <Input.Password
          id="pass"
          name="password"
          type="password"
          onChange={handleChange}
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button  type="primary" htmlType="submit">Register</Button>
      </Form.Item>
    </Form>
  );
}
export default Register;
