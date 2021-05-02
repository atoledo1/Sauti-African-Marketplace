import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import * as yup from "yup";
import loginSchema from "../LoginShema";
import axios from "axios";
import {UserContext} from "../App";
import {BASE_URL, LOGIN_PATH} from "../utils/URLs";
import "../App.css";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    loginSchema
      .validate(form, {abortEarly: false})
      .then((res) => {
        axios
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
          .catch((err) => {
            console.dir(err);
            setErrors([...errors, {message: "Invalid Login"}]);
          });
      })
      .catch((err) => {
        console.log(err);
        setErrors([...err.inner]);
      });
  };

  return (
    <div className="log-container">
      <form onSubmit={handleSubmit}>
        {errors.map((error) => {
          return <p>{error.message}</p>;
        })}
        <label>
          {" "}
          Username:
          <input
            id="logname"
            name="username"
            type="textbox"
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          Password:
          <input
            id="logpass"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </label>
        <button className="btn" id="logbtn">
          Log in
        </button>
      </form>
    </div>
  );
}
export default Login;
