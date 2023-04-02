import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import icon_01 from "../images/add-cart.svg";
import icon_02 from "../images/view.svg";
import icon_03 from "../images/prodcompare.svg";

const ProductsCard = (props) => {
  return (
    <div className="product-card-single">
      <Link className="product-card position-relative p-0">
        <div className="product-image">
          <img className="product-main-img img-fluid" src={props.image} alt="watch" />
          <img className="product-main-img img-fluid" src={props.image} alt="watch" />
        </div>

        <div className="product-details px-2 mt-3">
          <h6 className="d-flex flex-wrap brand">{props.brand}
            <div className="wishlist-icon postion-absolute">
            </div>
          </h6>
          <h5 className="product-title">{props.title}</h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">{props.price}</p>
        </div>

        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src={icon_03} alt="compare" />
            </Link>
            <Link>
              <img src={icon_02} alt="view" />
            </Link>
            <Link>
              <img src={icon_01} alt="add-cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProductsCard;
