import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import * as yup from "yup";
// import loginSchema from "../LoginShema";
import axios from "axios";
import {UserContext} from "../App";
import {BASE_URL, LOGIN_PATH} from "../utils/URLs";

import "../App.css";
import { Form, Input, Button, Checkbox, Space} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import sauti from "../images/sauti.png"

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
    //{ e.preventDefault();
    // loginSchema
    //   .validate(form, {abortEarly: false})
    //   { e.then((res) => {
        { axios
          .post(`${BASE_URL}${LOGIN_PATH}`, form)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", form.username);
            props.setLoggedIn(true);
            setUser({
              ...user,
              username: form.username,
            });
            setForm(LogForm);
            history.push("/home");
          })
        //   .catch((err) => {
        //     console.dir(err);
        //     setErrors([...errors, {message: "Invalid Login"}]);
        //   });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setErrors([...err.inner]);
    //   });
  };

  return (
<div style={{ height:"680px",zIndex:"80", width:"100%",backgroundImage:`url(${sauti})`,
   backgroundSize: 'cover',
   backgroundPosition:"center",
  backgroundRepeat: 'no-repeat'}}>
<div style={{backgroundColor:"#FCFAEA", zindex:"100",  width: '750px',
        height: '680px',}}>


      <Form  style={{ width:"300px", padding:"50px", marginLeft:"200px", paddingTop:"200px"}}  layout="horizontal" name="login" className="login-form" initialValues={{ remember: true }} onFinish={handleSubmit}>
       
        <Form.Item rules={[{ required: true, message: 'Please input your Username!' }]}label="Username">
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"
           
            id="logname"
            name="username"
            type="textbox"
            onChange={handleChange}/>
          </Form.Item>
     
        <Form.Item rules={[{ required: true, message: 'Please input your Password!' }]}label="Password">
          <Input.Password   prefix={<LockOutlined className="site-form-item-icon" />}
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
        <Button type="primary"className="login-form-button" htmlType="submit">Log in</Button>
       
        </Form.Item>
        </Space>
      </Form>
      </div>
    </div>
  );
}
export default Login;
