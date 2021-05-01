import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axiosAuth from "../util/axios";
import { Link } from "react-router-dom";


const initialFormR = {
  username: "",
  password: "",
};

const initialWarningE = {
  username: "Username is a required field",
  password: "Password is a required field",
};

const schemaFormR = yup.object().shape({
  username: yup
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .required("Username is a required field"),
  password: yup
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters")
    .required("Password is a required field"),
});

const Register = (props) => {
  const [registerU, setregisterU] = useState(initialFormR);

  const [ErrorsR, setErrorsR] = useState(initialWarningE);

  const [buttonE, setbuttonE] = useState(false);

  useEffect(() => {
    schemaFormR.isValid(registerU).then((valid) => {
      setbuttonE(valid);
    });
  }, [registerU]);

  const onChange = (e) => {
    e.persist();

    setregisterU({ ...registerU, [e.target.name]: e.target.value });

    yup
      .reach(schemaFormR, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorsR({ ...ErrorsR, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrorsR({ ...ErrorsR, [e.target.name]: err.errors[0] });
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axiosAuth()
      .post(
        "https://marketbw-api.herokuapp.com/api/auth/register",
        registerU
      )
      .then((res) => {
        console.log(res.data);
        setregisterU({
          username: "",
          password: "",
        });
      });
  };

  return (
    <div className="containerbig">
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
          <div className="form">
            <label className="label1">Username:&nbsp;</label>
            <input
              placeholder="Write username here"
              onChange={onChange}
              type="text"
              name="username"
              value={registerU.username}
            />

            <label className="label1">Password:&nbsp;</label>
            <input
              placeholder="Write password here"
              onChange={onChange}
              type="password"
              name="password"
              value={registerU.password}
            />

            <button className="Button" disabled={!buttonE} type="submit">
              {" "}
              Register
            </button>
            <div> {ErrorsR.username} </div>
            <div> {ErrorsR.password} </div>
          </div>
        </form>
        <p> Already have an account? <Link to="/">Log in</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;