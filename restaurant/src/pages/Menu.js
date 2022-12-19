import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    allMenu();
  }, []);
  // console.log(menu);

  // const filterResult = (catItem) => {
  //   const result = Menu.filter((e) => {
  //     return e.category === catItem;
  //   });
  //   setMenu(result);
  // };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // const searchedProduct = menu.filter((mu) =>
  //   mu.category.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const allMenu = async () => {
    axios
      .get("http://localhost/React/restaurant/restaurantApi/allmenu.php")
      .then((res) => {
        setMenu(res.data.datas.menus);
        // console.log(res.data.datas.menus);
      });
  };

  return (
    <div>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Food Menu
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
                  Menu
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primar fw-normal">
                Food Menu
              </h5>
              <h1 className="mb-5">Most Popular Items</h1>
            </div>

            <div
              className="tab-className text-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                  <Link
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
                    className="d-flex align-items-center text-start mx-3 pb-3"
                    data-bs-toggle="pill"
                    to=""
                  >
                    <i className="fa fa-hamburger fa-2x text-primar"></i>
                    <div className="ps-3">
                      <small className="text-body">Special</small>
                      <h6 className="mt-n1 mb-0">Launch</h6>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
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
              </ul>
              <div className="row g-4">
                {menu.map((item, index) => (
                  <div
                    className="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="team-item text-center rounded overflow-hidden">
                      <div className=" overflow-hidden m-3">
                        {/* <img className="img-fluid" src={item.image} alt="" /> */}
                        <img
                          // className="flex-shrink-0 img-fluid rounded"
                          src="assets/img/menu-9.jpg"
                          alt=""
                          style={{ width: "250px" }}
                        />
                      </div>
                      <h4 className="mb-3">{item.name}</h4>
                      <h6>TK {item.price}</h6>
                      <div className="justify-content-center mt-4">
                        <button className="btn btn-primary" href="">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    {menu.map((item, index) => (
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="assets/img/menu-1.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>{item.name}</span>
                              <span className="text-primar">
                                Tk {item.price}
                              </span>
                            </h5>
                            <small className="fst-italic">{item.details}</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
