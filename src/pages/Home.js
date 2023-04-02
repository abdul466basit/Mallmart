import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ProductCard from "../components/ProductsCard"

import image_01 from "../images/img1.jpg";
import image_02 from "../images/img3.jpg"
import image_03 from "../images/img4.jpg"
import image_04 from "../images/img5.jpg"

import banner_01 from "../images/main-banner-1.jpeg";
import small_ban_01 from "../images/banner-01.jpg";
import small_ban_02 from "../images/banner-02.jpg";
import small_ban_03 from "../images/banner-05.jpg";
import small_ban_04 from "../images/banner-04.jpg";

import service_01 from "../images/service.png";
import service_02 from "../images/service-02.png";
import service_03 from "../images/service-03.png";
import service_04 from "../images/service-04.png";
import service_05 from "../images/service-05.png";

import product_01 from "../images/product-01.jpg";
import product_02 from "../images/product-02.jpg";
import product_03 from "../images/product-03.jpg";
import product_04 from "../images/product-04.jpg";
import product_05 from "../images/product-05.jpg";
import product_06 from "../images/product-06.jpeg";
import product_07 from "../images/product-07.jfif";
import product_08 from "../images/product-08.jpg";

import brand_01 from "../images/brand-01.png";
import brand_02 from "../images/brand-02.png";
import brand_03 from "../images/brand-03.png";
import brand_04 from "../images/brand-04.png";
import brand_05 from "../images/brand-05.png";
import brand_06 from "../images/brand-06.png";
import brand_07 from "../images/brand-07.png";
import brand_08 from "../images/brand-08.png";
import SpecialProduct from "../components/SpecialProduct";
import FamousProduct from "../components/FamousProduct";
import Meta from "../components/Meta";

const Home = () => {
  const Product = [
    {brand: "HAIER", 
    title: "Haier -8 kg/ Fully Automatic/ Top Loading Washing Machine",
    price: "$189.00",
    image: image_01
    },
    {brand: "TCL", 
    title: "Dawlance Air Conditioner Chrome 30 Full AC DC Inverter 1.5 Ton",
    price: "$189.00",
    image: image_02
    },
    {brand: "MCD", 
    title: "MCD Hybrid Soccer ball, Official Size & Weight",
    price: "$189.00",
    image: image_03
    },
    {brand: "PU Leather", 
    title: "PU Leather Ladies Hand Bags Set Tassel Bucket Purses for Women",
    price: "$189.00",
    image: image_04
    }
   ]

  return (
    <>
      <Meta title={"E Commerce App"}/>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src={banner_01}
                  className="img-fuild rounded-3"
                  alt="main banner"
                />

                <div className="main-banner-content position-absolute">
                  <h4>SUPPER DISCOUNT</h4>
                  <h5>UPTO 50% off</h5>
                  <p>from $10 to $999</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            {/* ---------------------------------------------------Small banners Portion Starts Here---------------------------------------------- */}

            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src={small_ban_01}
                    className="img-fuild rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>UPTO 50% off</h5>
                    <p>from $10 to $999</p>
                  </div>
                </div>

                <div className="small-banner-02 position-relative">
                  <img
                    src={small_ban_02}
                    className="img-fuild rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-02-content position-absolute">
                    <h4>SUPPER DISCOUNT</h4>
                    <h5>UPTO 50% off</h5>
                    <p>from $10 to $999</p>
                  </div>
                </div>

                <div className="small-banner-03 position-relative">
                  <img
                    src={small_ban_03}
                    className="img-fuild rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-03-content position-absolute">
                    <h4>SUPPER DISCOUNT</h4>
                    <h5>UPTO 50% off</h5>
                    <p>from $10 to $999</p>
                  </div>
                </div>

                <div className="small-banner-04 position-relative">
                  <img
                    src={small_ban_04}
                    className="img-fuild rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-04-content position-absolute">
                    <h4>SUPPER DISCOUNT</h4>
                    <h5>UPTO 50% off</h5>
                    <p>from $10 to $999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5 px-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src={service_01} alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src={service_02} alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src={service_03} alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert </p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src={service_04} alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory direct price</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src={service_05} alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex gap-15 align-items-center">
                  <div className="sub-categories">
                    <h6>CCTV Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    className="sub-categories"
                    src={product_01}
                    alt="CCTV Camera"
                  />
                </div>

                <div className="d-flex gap-15 align-items-center">
                  <div className="sub-categories">
                    <h6>Laptops</h6>
                    <p>10 items</p>
                  </div>
                  <img
                    className="sub-categories"
                    src={product_02}
                    alt="Laptops"
                  />
                </div>

                <div className="d-flex gap-15 align-items-center">
                  <div className="sub-categories">
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    className="sub-categories"
                    src={product_03}
                    alt="Headphones"
                  />
                </div>

                <div className="d-flex gap-15 align-items-center">
                  <div className="sub-categories">
                    <h6>Printer</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    className="sub-categories"
                    src={product_04}
                    alt="Printer"
                  />
                </div>

                <div className="d-flex gap-15 align-items-center">
                  <div className="sub-categories">
                    <h6>Mobile Phones</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    className="sub-categories"
                    src={product_05}
                    alt="Mobile Phones"
                  />
                </div>

                <div className="d-flex gap-15 align-items-center">
                  <div className="sub-categories">
                    <h6>Speakers</h6>
                    <p>10 items</p>
                  </div>
                  <img
                    className="sub-categories"
                    src={product_06}
                    alt="Speakers"
                  />
                </div>

                <div className="d-flex gap-15 align-items-center">
                  <div className="sub-categories">
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    className="sub-categories"
                    src={product_07}
                    alt="Smart Watches"
                  />
                </div>

                <div className="d-flex gap-15 align-items-center">
                  <div className="sub-categories">
                    <h6>LED</h6>
                    <p>10 Items</p>
                  </div>
                  <img className="sub-categories" src={product_08} alt="LED" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-0">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper py-0">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={brand_01} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand_02} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand_03} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand_04} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand_05} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand_06} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand_07} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand_08} alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper home-wrapper-2 py-4"> 
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Featured Product</h3>
            </div>
            {Product.map((item)=>
                <ProductCard 
                  brand={item.brand}
                  title={item.title}
                  price={item.price}
                  image={item.image}  
                />
                )}
          </div>
        </div>
      </section>
      <section className="special-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
          </div>
        </div>
      </section>
      <section className="famous-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <FamousProduct/>
          </div>
        </div>
      </section>  
      <section className="popular-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div >
            {Product.map((item)=>
                <ProductCard 
                  brand={item.brand}
                  title={item.title}
                  price={item.price}
                  image={item.image}  
                />
                )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
