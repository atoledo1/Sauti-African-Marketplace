import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import * as yup from "yup";
import registerSchema from "../RegisterShema";
import axios from "axios";
import {BASE_URL, REGISTER_PATH} from "../utils/URLs";
import "../App.css";

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
    e.preventDefault();
    registerSchema
      .validate(form, {abortEarly: false})
      .then((res) => {
        axios
          .post(`${BASE_URL}${REGISTER_PATH}`, form)
          .then((res) => {
            console.log(res.data.data.password);
            history.push("/login");
          })
          .catch((err) => {
            console.log(err);
            setErrors([...errors, {message: "Username is already taken"}]);
          });
      })
      .catch((err) => {
        console.dir(err);
        setErrors([...err.inner]);
      });
  };

  return (
    <div className="reg-container">
      <form onSubmit={handleSubmit}>
        {errors.map((error) => {
          return <p>{error.message}</p>;
        })}
        <label>
          {" "}
          Username:
          <input
            id="name"
            name="username"
            type="textbox"
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          Email:
          <input
            id="mail"
            name="email"
            type="textbox"
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          Password:
          <input
            id="pass"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
}
export default Register;
