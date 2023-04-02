import React from "react";
import { Link } from "react-router-dom";
import newsletter from "../images/newsletter.png";
import {
  BsLinkedin,
  BsInstagram,
  BsYoutube,
  BsFacebook,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center gap-30">
                <img src={newsletter} alt="newsletter" />
                <h2 className="text-white mb-0">Sign Up for NewsLetter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group mb-3">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row text-white mb-4">
            <div className="col-4">
              <h4>Follow Us</h4>
              <div className="social-icons d-flex align-items-center gap-30 mt-4">
                <Link className="text-white" to="">
                  <BsInstagram className="fs-4" />
                </Link>
                <Link className="text-white" to="">
                  <BsFacebook className="fs-4"></BsFacebook>
                </Link>
                <Link className="text-white" to="">
                  <BsYoutube className="fs-4" />
                </Link>
                <Link className="text-white" to="">
                  <BsLinkedin className="fs-4" />
                </Link>
                <Link className="text-white" to="">
                  <BsPinterest className="fs-4" />
                </Link>
                <Link className="text-white" to="">
                  <BsTwitter className="fs-4" />
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4>Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Term & Condition</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4>Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4>Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tabletss</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-white mb-0">
              <p className="text-center">
                &copy; {new Date().getFullYear()}; Powered By Expert's Solution{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
