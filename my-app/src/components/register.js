import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import * as yup from "yup";
import axiosAuth from "../util/axios";
import {Link} from "react-router-dom";
import {BASE_URL, REGISTER_PATH} from "../util/api";

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

const Register = () => {
  const [registerU, setregisterU] = useState(initialFormR);

  const [ErrorsR, setErrorsR] = useState(initialWarningE);

  const [buttonE, setbuttonE] = useState(false);
  const history = useHistory();

  useEffect(() => {
    schemaFormR.isValid(registerU).then((valid) => {
      setbuttonE(valid);
    });
  }, [registerU]);

  const onChange = (e) => {
    setregisterU({...registerU, [e.target.name]: e.target.value});

    yup
      .reach(schemaFormR, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorsR({...ErrorsR, [e.target.name]: ""});
      })
      .catch((err) => {
        setErrorsR({...ErrorsR, [e.target.name]: err.errors[0]});
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axiosAuth()
      .post(`${BASE_URL}${REGISTER_PATH}`, registerU)
      .then((res) => {
        console.log(res.data);
        history.push("/login");
      });
  };

  return (
    <div className="containerbig">
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
          <div className="form">
            <label className="label1">Username:</label>
            <input
              placeholder="Write username here"
              onChange={onChange}
              type="textbox"
              name="username"
              value={registerU.username}
            />

            <label className="label1">Password:</label>
            <input
              placeholder="Write password here"
              onChange={onChange}
              type="password"
              name="password"
              value={registerU.password}
            />

            <button className="Button" disabled={!buttonE} type="submit">
              Register
            </button>
            <div> {ErrorsR.username} </div>
            <div> {ErrorsR.password} </div>
          </div>
        </form>
        <p>
          {" "}
          Already have an account? <Link to="/">Log in</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
