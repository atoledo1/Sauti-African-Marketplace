import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import axios from "axios";
import {BASE_URL, REGISTER_PATH} from "../utils/URLs";


import {UserOutlined, LockOutlined, MailOutlined} from "@ant-design/icons";
import {Form, Input, Button, Space} from "antd";
import sauti from "../images/sauti.png"
const initialForm = {
  email: "",
  username: "",

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
    <div style={{ height:"100vh",zIndex:"80", width:"100%",backgroundImage:`url(${sauti})`,
   backgroundSize: 'cover',
   backgroundPosition:"center",
  backgroundRepeat: 'no-repeat'}}>
<div style={{backgroundColor:"#FCFAEA", zindex:"100",  width: '750px',
        height: '100vh',}}>
<div className="container">
    <Form style={{ width:"300px", padding:"50px", marginLeft:"200px", paddingTop:"200px"}} layout="horizontal">
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
        label="Email"
      >
        <Input
          id="mail"
          name="email"
          type="email"
          onChange={handleChange}
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
        label="Username"
      >
        <Input
          id="name"
          name="username"
          type="textbox"
          onChange={handleChange}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>

      <Form.Item
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        label="Password"
      >
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
        <Button type="primary"  htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
    </div>
  );
}
export default Register;
