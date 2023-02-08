import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
        <a
          href="bdprogrammers.com"
          className="navbar-brand d-flex align-items-center"
        >
          <h1 className="m-0">
            <img
              className="img-fluid me-3"
              src="/assets/img/webdev.png"
              alt=""
            />
            Bdprogramers
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto bg-light pe-4 py-3 py-lg-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About Us
            </Link>
            <a href="service.html" className="nav-item nav-link">
              Our Services
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu bg-light border-0 m-0">
                <a href="feature.html" className="dropdown-item">
                  Features
                </a>
                <a href="quote.html" className="dropdown-item">
                  Free Quote
                </a>
                <a href="team.html" className="dropdown-item">
                  Our Team
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
              Contact Us
            </a>
          </div>
          <div className="h-100 d-lg-inline-flex align-items-center d-none">
            <a
              className="btn btn-square rounded-circle bg-light text-primary me-2"
              href=""
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-square rounded-circle bg-light text-primary me-2"
              href=""
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-square rounded-circle bg-light text-primary me-2"
              href=""
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-square rounded-circle bg-light text-primary me-0"
              href=""
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
