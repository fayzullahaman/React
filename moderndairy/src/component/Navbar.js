import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-custom navbar-mainbg nav">
        <a className="navbar-brand navbar-logo" href="#">
          <img src="assets/img/logo.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="javascript:void(0);">
                <i className="fas fa-home"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" href="javascript:void(0);">
                <i className="fas fa-address-card"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-link"
                href="javascript:void(0);"
              >
                <i className="fab fa-servicestack"></i> Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-link"
                href="javascript:void(0);"
              >
                <i className="fab fa-product-hunt"></i>
                Products
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="javascript:void(0);"
              >
                <i className="fas fa-pager"></i>
                Pages
              </a>
              <div className="dropdown-menu bg-dark m-0">
                <a href="" className="dropdown-item">
                  Gallery
                </a>
                <a href="" className="dropdown-item">
                  Features
                </a>
                <a href="" className="dropdown-item">
                  Our Team
                </a>
                <a href="" className="dropdown-item">
                  Testimonial
                </a>
                <a href="" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                href="javascript:void(0);"
              >
                <i className="fas fa-phone-square"></i>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
