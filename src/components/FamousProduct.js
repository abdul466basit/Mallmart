import React from "react";
import famous_img_03 from "../images/famous-3.jpg";
import famous_img_02 from "../images/famous-2.png";
import famous_img_01 from "../images/famous-1.png";
import famous_img_04 from "../images/famous-4.png";

const FamousProduct = () => {
  return (
    <>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img className="img-fluid" src={famous_img_01} alt="famous_mobile" />
          <div className="famous-content position-absolute">
            <h5>BIG SCREEN</h5>
            <h6>Smart Watch Series 7</h6>
            <p>From $399.00 or $16.62/mo.<br/> for 24mo.*</p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img className="img-fluid" src={famous_img_02} alt="famous_mobile" />
          <div className="famous-content position-absolute">
            <h5>HOME SPEAKERS</h5>
            <h6>Room-Filling Sound.</h6>
            <p>From $699.00 or $116.62/mo.<br/> for 24mo.*</p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img className="img-fluid" src={famous_img_03} alt="famous_mobile" />
          <div className="famous-content position-absolute">
            <h5>SMARTPHONES</h5>
            <h6>Smartphone 13 Pro.</h6>
            <p>Now in Green From $999.00 or $41.25/mo. for 24mo. FootNode</p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img className="img-fluid" src={famous_img_04} alt="famous_mobile" />
          <div className="famous-content position-absolute">
            <h5>NEW LAPTOPS</h5>
            <h6>HP PAvilian Series</h6>
            <p>From $1299.00 or $67.25/mo. for 24mo.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamousProduct;
