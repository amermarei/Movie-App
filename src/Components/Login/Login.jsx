import React, { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
export default function Login({ saveUserData }) {
  let navigate = useNavigate();
  let [errorList, setErrorList] = useState([]);
  let [error, seterror] = useState("");
  let [isloading, setIsLoading] = useState(false);
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  function getUserData(e) {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  }

  async function sendLoginData() {
    let { data } = await axios.post(
      "https://sticky-note-fe.vercel.app/signin",
      user
    );
    if (data.message === "success") {
      setIsLoading(false);
      localStorage.setItem("userData", data.token);
      saveUserData();
      navigate("home")
    } else {
      setIsLoading(false);
      seterror(data.message);
    }
  }
  function submitSendData(e) {
    e.preventDefault();
    setIsLoading(true);
    sendLoginData();
  }
  return (
    <Fragment>
      <form className="w-75 mx-auto my-5" onSubmit={submitSendData}>
        {error.length > 0 ? (
          <div className="my-3 alert alert-danger">{error}</div>
        ) : (
          ""
        )}
        <div className="mb-3">
          <label htmlFor="email" className="form-label ">
            Email
          </label>
          <input
            onChange={getUserData}
            type="email"
            className="form-control my-input"
            id="email"
            name="email"
          />
          {errorList.filter((e) => e.context.label === "email")[0] ? (
            <div className="text-danger py-2">
              <p className="p-0">
                {
                  errorList.filter((e) => e.context.label === "email")[0]
                    ?.message
                }
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={getUserData}
            type="password"
            className="form-control my-input"
            id="password"
            name="password"
          />
          {errorList.filter((e) => e.context.label === "password")[0] ? (
            <div className="text-danger py-2">
              <p>password is invalid</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          {isloading === true ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </Fragment>
  );
}
