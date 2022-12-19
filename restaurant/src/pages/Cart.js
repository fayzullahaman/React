import React from "react";

export default function Cart() {
  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Cart Menu
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Cart
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primar fw-normal">
              Cart Menu
            </h5>
            <h1 className="mb-5">Your Order</h1>
          </div>
          <div
            className="tab-className text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            {/* <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <Link
                  onClick={() => setMenuName("")}
                  className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                  data-bs-toggle="pill"
                  to=""
                >
                  <i className="fa fa-coffee fa-2x text-primar"></i>
                  <div className="ps-3">
                    <small className="text-body">Your Favorite</small>
                    <h6 className="mt-n1 mb-0">All Menu</h6>
                  </div>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  onClick={() => setMenuName("breakfast")}
                  className="d-flex align-items-center text-start mx-3 ms-0 pb-3"
                  data-bs-toggle="pill"
                  to=""
                >
                  <i className="fa fa-coffee fa-2x text-primar"></i>
                  <div
                    className="ps-3"
                    onChange={handleSearch}
                    // onClick={() => filterResult("breakfast")}
                  >
                    <small className="text-body">Popular</small>
                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setMenuName("lunch")}
                  className="d-flex align-items-center text-start mx-3 pb-3"
                  data-bs-toggle="pill"
                  to=""
                >
                  <i className="fa fa-hamburger fa-2x text-primar"></i>
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6 className="mt-n1 mb-0">Lunch</h6>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setMenuName("dinner")}
                  className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                  data-bs-toggle="pill"
                  to=""
                >
                  <i className="fa fa-utensils fa-2x text-primar"></i>
                  <div className="ps-3">
                    <small className="text-body">Lovely</small>
                    <h6 className="mt-n1 mb-0">Dinner</h6>
                  </div>
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
