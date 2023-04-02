import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const ResetPassword = () => {
  return (
    <>
        <Meta title="Reset Password " />
        <BreadCrumb title="Reset Password" />
        <div className="login-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className=" fg-password-card col-12">
                    <div className="fg-password-card-inner">
                        <h3>Reset Your Password</h3>
                        <p>We will send you an email to reset your password</p>
                        <form action="" className="d-flex flex-column gap-15">
                            <div>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="form-control mb-3"
                            />
                            </div>
                            <div>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="password"
                                className="form-control mb-3"
                            />
                            </div>
                        </form>
                    </div>
                    <div className="d-flex flex-column gap-15 align-items-center justify-content-center">
                        <button 
                            className="button" 
                            type='submit'
                        >Reset Password</button>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}

export default ResetPassword
