import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import * as yup from "yup";
import registerSchema from "../RegisterShema";
import axios from "axios";
import {BASE_URL, REGISTER_PATH} from "../utils/URLs";
import "../App.css";

import { Form, Input, Button } from 'antd';
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
  
        axios
          .post(`${BASE_URL}${REGISTER_PATH}`, form)
          .then((res) => {
            console.log(res.data.data.password);
            history.push("/login");
          })
          
  };

  return (
    
      <Form onFinish={handleSubmit}>
       <Form.Item label="Username">
          <Input
            id="name"
            name="username"
            type="textbox"
            onChange={handleChange}
          />
          </Form.Item>
      <Form.Item label="Email">
         
         
          <Input
            id="mail"
            name="email"
            type="email"
            onChange={handleChange}
          />
      </Form.Item>
      <Form.Item label="Password">
          
          <Input
            id="pass"
            name="password"
            type="password"
            onChange={handleChange}
          />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Register</Button>
        </Form.Item>
      </Form>
   
  );
}
export default Register;
