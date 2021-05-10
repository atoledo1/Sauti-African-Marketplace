import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import Foto from "./foto"

import axios from "axios";
import {UserContext} from "../App";
import {BASE_URL, LOGIN_PATH} from "../utils/URLs";


import {Form, Input, Button, Checkbox, Space} from "antd";
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import sauti from "../images/sauti.png";

const LogForm = {
  username: "",
  password: "",
};

function Login(props) {
  const [form, setForm] = useState(LogForm);
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const {user, setUser} = useContext(UserContext);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) =>
  
    {
      axios.post(`${BASE_URL}${LOGIN_PATH}`, form).then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", form.username);
        props.setLoggedIn(true);
        setUser({
          ...user,
          username: form.username,
        });
        setForm(LogForm);
        history.push("/home");
      });
     
    };

  return (
   
  
    
      <div
        style={{
          backgroundColor: "#FCFAEA",
          position:"fixed",
          width: "750px",
          height: "100%",
          
        }}
      >
        
        <Foto style={{marginLeft:"700px", objectFill:"cover"}}></Foto>
        <Form className="bodytext"
          style={{
            width: "300px",
            padding: "50px",
            marginLeft: "200px",
            paddingTop: "200px",
          }}
          layout="vertical"
          name="login"
          className="login-form"
          initialValues={{remember: true}}
          onFinish={handleSubmit}
        >
          <Form.Item
            rules={[{required: true, message: "Please input your Username!"}]}
            label="Username:"
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              id="logname"
              name="username"
              type="textbox"
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            rules={[{required: true, message: "Please input your Password!"}]}
            label="Password:"
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              id="logpass"
              name="password"
              type="password"
              onChange={handleChange}
              placeholder="Password"
            />
          </Form.Item>
          <Space direction="vertical" size="large">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                
                type="primary"
                htmlType="submit"
              >
                Log in
              </Button>
            </Form.Item>
          </Space>
        </Form>
      
    </div>
    
  );
}
export default Login;
