import React, { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
export default function Register() {
  let navigate = useNavigate();
  let [errorList, setErrorList] = useState([]);
  let [error, seterror] = useState("");
  let [isloading, setIsLoading] = useState(false);
  let [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
  });

  function getUserData(e) {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  }

  async function sendRegisterData() {
    let { data } = await axios.post(
      "https://sticky-note-fe.vercel.app/signup",
      user
    );
    if (data.message === "success") {
      setIsLoading(false);
      navigate("/");
    } else {
      setIsLoading(false);
      seterror(data.message);
    }
  }
  function validation() {
    let scheme = Joi.object({
      first_name: Joi.string().min(3).max(10).required(),
      last_name: Joi.string().min(3).max(10).required(),
      email: Joi.string()
        .email({ tlds: { allows: ["com", "net"] } })
        .required(),
      age: Joi.number().min(15).max(80).required(),
      password: Joi.string()
        .pattern(/^[A-Z][a-z]{3,6}/)
        .required(),
    });
    return scheme.validate(user, { abortEarly: false });
  }
  function submitSendData(e) {
    e.preventDefault();
    setIsLoading(true);

    let validator = validation();
    if (validator.error) {
      setIsLoading(false);
      setErrorList(validator.error.details);
    } else {
      sendRegisterData();
    }
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
          <label htmlFor="first_name" className="form-label">
            First Name
          </label>
          <input
            onChange={getUserData}
            type="text"
            className="form-control my-input"
            id="first_name"
            name="first_name"
          />
        </div>
        {errorList.filter((e) => e.context.label === "first_name")[0] ? (
          <div className="text-danger py-2">
            <p className="p-0">
              {
                errorList.filter((e) => e.context.label === "first_name")[0]
                  ?.message
              }
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">
            Last Name
          </label>
          <input
            onChange={getUserData}
            type="text"
            className="form-control my-input"
            id="last_name"
            name="last_name"
          />
          {errorList.filter((e) => e.context.label === "last_name")[0] ? (
            <div className="text-danger py-2">
              <p className="p-0">
                {
                  errorList.filter((e) => e.context.label === "last_name")[0]
                    ?.message
                }
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={getUserData}
            type="number"
            className="form-control my-input"
            id="age"
            name="age"
          />
          {errorList.filter((e) => e.context.label === "age")[0] ? (
            <div className="text-danger py-2">
              <p className="p-0">
                {errorList.filter((e) => e.context.label === "age")[0]?.message}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
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
            "Register"
          )}
        </button>
      </form>
    </Fragment>
  );
}
