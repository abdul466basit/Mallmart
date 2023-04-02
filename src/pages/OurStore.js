import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductsCard"
import image_01 from "../images/img1.jpg";
import image_02 from "../images/img3.jpg"
import image_03 from "../images/img4.jpg"
import image_04 from "../images/img5.jpg"

const OurStore = () => {
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
    },
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
    },
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
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-3 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">

              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div class="form-check px-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label class="form-check-label" htmlFor="flexCheckDefault">
                      In Stock(39)
                    </label>
                  </div>
                  <div className="form-check px-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Out of Stock(5)
                    </label>
                  </div>
                </div>

                <h5 className="sub-title">Price</h5>
                <div className="d-flex algn-items-center gap-10">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label for="floatingInput">From</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="To"
                    />
                    <label for="floatingInput">To</label>
                  </div>
                </div>

                <h5 className="sub-title">Size</h5>
                <div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label class="form-check-label" htmlFor="">
                        S (2)
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label class="form-check-label" htmlFor="">
                        M (2)
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label class="form-check-label" htmlFor="">
                        L (0)
                      </label>
                    </div>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Speakers
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className=" d-flex justify-content-between align-items-center">
                  <div className="filter-sort-sub d-flex align-items-center gap-10">
                    <p className="mb-0 d-block">Sort By:</p>
                    <select name="" id="" className="form-control form-select">

                      <option value="manual" >Featured</option>
                      <option value="best-selling" selected="selected">Best Selling</option>
                      <option value="title-ascending" >Alphabetically, A-Z</option>
                      <option value="title-descending" >Alphabetically, Z-A</option>
                      <option value="price-ascending" >Price, low to high</option>
                      <option value="price-descending" >Price, high to low</option>
                      <option value="created-ascending" >Date, old to new</option>
                      <option value="created-descending" >Date, new to old</option>

                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products mb-0">Products View</p>
                    <div className="d-flex align-items-center gap-10">
                      <i className="fa-solid fa-grid-2"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-between product-list py-4 gap-15">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
