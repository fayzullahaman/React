import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="container-fluid top-footer px-0">
      <div className="row d-none d-lg-flex">
        <div className="col-lg-6 ps-5 text-start">
          <div className="h-100 d-inline-flex align-items-center text-light">
            <span>Follow Us:</span>
            <a className="btn btn-link text-light">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-link text-light">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-link text-light">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="btn btn-link text-light">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-6 ps-5 text-end">
          <div className="h-100 bg-secondary d-inline-flex align-items-center text-dark py-2 px-4 bg-warning">
            <span className="me-2 fw-bold">
              <i className="fas fa-phone-alt me-2"></i>
              Call Us:{" "}
            </span>
            <span>+88012 345 6789</span>
          </div>
        </div>
      </div>
    </div>
  );
}
