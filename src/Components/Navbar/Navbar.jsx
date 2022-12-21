import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ userData, LOgOut }) {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark shadow">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3" to="home">
            Noxe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              {userData ? (
                <Fragment>
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="Movies">
                      Movies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Tv">
                      Tv Show
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="People">
                      People
                    </Link>
                  </li>
                </Fragment>
              ) : (
                ""
              )}
            </ul>
            <div className="social mx-lg-4 d-flex my-lg-0 my-3 mx-auto">
              <i className="fa-brands fa-facebook me-3"></i>
              <i className="fa-brands fa-spotify me-3"></i>
              <i className="fa-brands fa-instagram me-3"></i>
              <i className="fa-brands fa-youtube me-3"></i>
            </div>
            <ul className="list-unstyled d-lg-flex my-0 mx-lg-3 align-items-center my-lg-0 my-3 control">
              {userData ? (
                <Fragment>
                  <li className="nav-item me-3 my-lg-0 my-2">
                    <Link className="nav-link" to="profile">
                      Profile
                    </Link>
                  </li>
                  <li className="me-3 my-lg-0 my-2">
                    <span className="nav-link logout" onClick={LOgOut}>
                      Logout
                    </span>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li className="nav-item me-3 my-lg-0 my-2">
                    <Link className="nav-link" to="register">
                      Register
                    </Link>
                  </li>
                  <li className="me-3 my-lg-0 my-2">
                    <Link className="nav-link" to="">
                      Login
                    </Link>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
