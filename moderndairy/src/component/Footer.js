export default function Footer() {
  return (
    <div>
      <div
        className="container-fluid bg-dark mt-5 py-5 wow fadeIn top-footer"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 text-white">
              <h4 className="mb-4">Our Office</h4>
              <div>
                <i className="fa fa-map-marker-alt me-3"></i>
                <span className="mb-2">123 Street, Paltan, Dhaka</span>
              </div>
              <div className="my-3">
                <i className="fa fa-phone-alt me-2"></i>
                <span className="mb-2">+88012 345 6789</span>
              </div>
              <div className="my-3">
                <i className="fa fa-envelope me-2"></i>
                <span className="mb-2">mdairy@gmail.com</span>
              </div>
              <div className="d-flex pt-3">
                <span className="btn btn-square btn-secondary rounded-circle me-2">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="btn btn-square btn-secondary rounded-circle me-2">
                  <i className="fab fa-facebook-f"></i>
                </span>
                <span className="btn btn-square btn-secondary rounded-circle me-2">
                  <i className="fab fa-youtube"></i>
                </span>
                <span className="btn btn-square btn-secondary rounded-circle me-2">
                  <i className="fab fa-linkedin-in"></i>
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-white">
              <h4 className="mb-4">Quick Links</h4>
              <div>
                <i className="fas fa-angle-right"></i>
                <span className="mb-2">About Us</span>
              </div>
              <div className="pt-2">
                <i className="fas fa-angle-right"></i>
                <span className="mb-2">Contact Us</span>
              </div>
              <div className="pt-2">
                <i className="fas fa-angle-right"></i>
                <span className="mb-2">Our Services</span>
              </div>
              <div className="pt-2">
                <i className="fas fa-angle-right"></i>
                <span className="mb-2">Terms & Condition</span>
              </div>
              <div className="pt-2">
                <i className="fas fa-angle-right"></i>
                <span className="mb-2">Support</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-white">
              <h4 className="mb-3">Business Hours</h4>
              <div>
                <span className="mb-2">Monday - Friday</span>
                <h5>09:00 am - 07:00 pm</h5>
              </div>
              <div className="pt-2">
                <span className=" pt-4 mb-2">Saturday</span>
                <h5>09:00 am - 12:00 pm</h5>
              </div>
              <div className="pt-2">
                <span className=" pt-4 mb-2">Sunday</span>
                <h5>Closed</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-white">
              <h4 className="mb-3">Newsletter</h4>
              <div>
                <span>
                  Dolor amet sit justo amet elitr clita ipsum elitr est.
                </span>
              </div>
              <div className="position-relative w-100 pt-3">
                <input
                  className="form-control bg-transparent w-100 py-5 pt-4 ps-3"
                  type="text"
                  placeholder="Your Email"
                />
                <button className="btn btn-secondary py-2 position-absolute top-0 end-0 mt-4 me-2">
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-warning text-body copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;
              <span className="fw-bold"> Modern Dairy</span>
              <span>, All Right Reserved.</span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              {" "}
              Designed By
              <span className="fw-bold"> MD FAYZULLAH AMAN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
