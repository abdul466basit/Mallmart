import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
        <Meta title="Forgot Password " />
        <BreadCrumb title="Forgot Password" />
        <div className="login-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className=" fg-password-card col-12">
                    <div className="fg-password-card-inner">
                        <h3>Reset Your Password</h3>
                        <p>We will send you an email to reset your password</p>
                        <form action="" className="d-flex flex-column gap-30">
                            <div>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="form-control mb-3"
                            />
                            </div>
                        </form>
                    </div>
                    <div className="d-flex flex-column gap-15 align-items-center justify-content-center">
                        
                        <Link to="/reset-password" type='submit' className="button">Submit</Link>
                        <Link to="/login" className="button-cancel">Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}

export default ForgotPassword
