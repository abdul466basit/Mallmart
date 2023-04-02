import React from "react";
import offers_img_01 from "../images/watch.jpg";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img className="img-fluid" src={offers_img_01} alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havel</h5>
            <h6 className="title">Samsung Galaxy S21+ Pro</h6>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$100 </span> &nbsp;
              <strike>$150</strike>
            </p>
            <div className="discount-till">
              <p>
                <b>5 days</b>
              </p>
              <div className="d-flex gap-10">
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">1</span>
              </div>
              <div className="prod-count my-3">
                <p className=" mb-0">Products: 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{width:"24%"}}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
