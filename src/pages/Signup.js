import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Signup = () => {
  return (
    <>
    <Meta title="Sign Up" />
    <BreadCrumb title="Sign Up" />
    <div className="signup-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className=" signup-card col-12">
          <div className="signup-card-inner">
            <h3>Create Account</h3>
            <form action="" className="d-flex flex-column gap-20">
              <div>
                <input
                  type="name"
                  placeholder="First Name"
                  name="firstname"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="name"
                  placeholder="Last Name"
                  name="lastname"
                  className="form-control"
                />
              </div>
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
            </form>
          </div>
          <div className="mt-4 d-flex gap-15 align-items-center justify-content-center">
              <button className="button">Create</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Signup
