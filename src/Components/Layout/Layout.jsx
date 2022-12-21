import React, { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
export default function Layout({ userData, setUserData }) {
  let navigate = useNavigate();
  function LOgOut() {
    localStorage.removeItem("userData");
    setUserData(null);
    navigate("/")
  }
  return (
    <Fragment>
      <Navbar userData={userData} LOgOut={LOgOut} />
      <div className="container">
        <Outlet></Outlet>
      </div>
    </Fragment>
  );
}
