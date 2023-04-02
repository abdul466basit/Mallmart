import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className=" login-card col-12">
            <div className="login-card-inner">
              <h3>Login</h3>
              <form action="" className="d-flex flex-column gap-30">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="form-control"
                  />
                </div>
                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                </div>
              </form>
            </div>
            <div className="d-flex gap-15 align-items-center justify-content-center">
                <button className="button">Login</button>
                <Link to="/signup" className="button signup">SIGNUP</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
