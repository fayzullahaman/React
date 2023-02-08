import React from "react";

export default function Home() {
  return (
    <div>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                src="/assets/img/carousel-1.jpg"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-4 animated slideInDown">
                        We Provide Best Web Development Services
                      </h1>
                      <p className="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                        sed stet lorem sit clita duo justo erat amet
                      </p>
                      <a
                        href=""
                        className="btn btn-primary py-3 px-5 animated slideInDown"
                      >
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                src="/assets/img/carousel-2.jpg"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-4 animated slideInDown">
                        Quality Heating & Web Development Services
                      </h1>
                      <p className="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                        sed stet lorem sit clita duo justo erat amet
                      </p>
                      <a
                        href=""
                        className="btn btn-primary py-3 px-5 animated slideInDown"
                      >
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h1 className="display-6 mb-5">
                  Welcome To Best Bd Programmers Service Center
                </h1>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <img
                        style={{width: "20%"}}
                        className="flex-shrink-0 me-3"
                        src="/assets/img/icon/icon-07-primary.png"
                        alt=""
                      />
                      <h5 className="mb-0">Expert Developer</h5>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 me-3"
                        src="/assets/img/icon/icon-09-primary.png"
                        alt=""
                      />
                      <h5 className="mb-0">Best Quality Services</h5>
                    </div>
                  </div>
                </div>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <div className="border-top mt-4 pt-4">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center">
                        <div className="btn-lg-square bg-primary rounded-circle me-3">
                          <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <h5 className="mb-0">+012 345 6789</h5>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center">
                        <div className="btn-lg-square bg-primary rounded-circle me-3">
                          <i className="fa fa-envelope text-white"></i>
                        </div>
                        <h5 className="mb-0">developer@example.com</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="/assets/img/about-1.jpg"
                    style={{marginTop: "25%;"}}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="/assets/img/about-2.jpg"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="/assets/img/about-3.jpg"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="/assets/img/about-4.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Facts Start --> */}
      <div
        className="container-fluid facts my-5 py-5"
        data-parallax="scroll"
        data-image-src="/assets/img/carousel-1.jpg"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <h1 className="display-4 text-white" data-toggle="counter-up">
                1234
              </h1>
              <span className="text-primary">Happy Clients</span>
            </div>
            <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h1 className="display-4 text-white" data-toggle="counter-up">
                1234
              </h1>
              <span className="text-primary">Projects Succeed</span>
            </div>
            <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-4 text-white" data-toggle="counter-up">
                1234
              </h1>
              <span className="text-primary">Awards Achieved</span>
            </div>
            <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <h1 className="display-4 text-white" data-toggle="counter-up">
                1234
              </h1>
              <span className="text-primary">Team Members</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts End --> */}

      {/* <!-- Features Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-6 mb-5">
                Few Reasons Why People Choosing Us!
              </h1>
              <p className="mb-5">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="d-flex mb-5">
                <div
                  className="flex-shrink-0 btn-square bg-primary rounded-circle"
                  style={{width: "90px", height: "90px"}}
                >
                  <img
                    className="img-fluid"
                    src="/assets/img/icon/icon-08-light.png"
                    alt=""
                  />
                </div>
                <div className="ms-4">
                  <h5 className="mb-3">Trusted Service Center</h5>
                  <span>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos.
                  </span>
                </div>
              </div>
              <div className="d-flex mb-5">
                <div
                  className="flex-shrink-0 btn-square bg-primary rounded-circle"
                  style={{width: "90px", height: "90px"}}
                >
                  <img
                    className="img-fluid"
                    src="/assets/img/icon/icon-10-light.png"
                    alt=""
                  />
                </div>
                <div className="ms-4">
                  <h5 className="mb-3">Reasonable Price</h5>
                  <span>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos.
                  </span>
                </div>
              </div>
              <div className="d-flex mb-0">
                <div
                  className="flex-shrink-0 btn-square bg-primary rounded-circle"
                  style={{width: "90px", height: "90px"}}
                >
                  <img
                    className="img-fluid"
                    src="/assets/img/icon/icon-06-light.png"
                    alt=""
                  />
                </div>
                <div className="ms-4">
                  <h5 className="mb-3">24/7 Supports</h5>
                  <span>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div
                className="position-relative rounded overflow-hidden h-100"
                style={{minHeight: "400px"}}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="/assets/img/feature.jpg"
                  alt=""
                  style={{objectFit: "cover"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features End --> */}

      {/* <!-- Service Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{maxWidth: "500px"}}
          >
            <h1 className="display-6 mb-5">
              We Provide Best Web Development Services
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item">
                <img
                  className="img-fluid"
                  src="/assets/img/service-1.jpg"
                  alt=""
                />
                <div className="d-flex align-items-center bg-light">
                  <div className="service-icon flex-shrink-0 bg-primary">
                    <img
                      className="img-fluid"
                      src="/assets/img/icon/icon-01-light-1.png"
                      alt=""
                    />
                  </div>
                  <a className="h4 mx-4 mb-0" href="">
                    Web Design
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item">
                <img
                  className="img-fluid"
                  src="/assets/img/service-2.jpg"
                  alt=""
                />
                <div className="d-flex align-items-center bg-light">
                  <div className="service-icon flex-shrink-0 bg-primary">
                    <img
                      className="img-fluid"
                      src="/assets/img/icon/icon-02-light-1.png"
                      alt=""
                    />
                  </div>
                  <a className="h4 mx-4 mb-0" href="">
                    Web Development
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item">
                <img
                  className="img-fluid"
                  src="/assets/img/service-3.jpg"
                  alt=""
                />
                <div className="d-flex align-items-center bg-light">
                  <div className="service-icon flex-shrink-0 bg-primary">
                    <img
                      className="img-fluid"
                      src="/assets/img/icon/icon-03-light-1.png"
                      alt=""
                    />
                  </div>
                  <a className="h4 mx-4 mb-0" href="">
                    Backend Web Development
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item">
                <img
                  className="img-fluid"
                  src="/assets/img/service-4.jpg"
                  alt=""
                />
                <div className="d-flex align-items-center bg-light">
                  <div className="service-icon flex-shrink-0 bg-primary">
                    <img
                      className="img-fluid"
                      src="/assets/img/icon/icon-04-light-1.png"
                      alt=""
                    />
                  </div>
                  <a className="h4 mx-4 mb-0" href="">
                    Frontend Web Development
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item">
                <img
                  className="img-fluid"
                  src="/assets/img/service-5.jpg"
                  alt=""
                />
                <div className="d-flex align-items-center bg-light">
                  <div className="service-icon flex-shrink-0 bg-primary">
                    <img
                      className="img-fluid"
                      src="/assets/img/icon/icon-05-light-1.png"
                      alt=""
                    />
                  </div>
                  <a className="h4 mx-4 mb-0" href="">
                    Responsiv Website
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item">
                <img
                  className="img-fluid"
                  src="/assets/img/service-6.jpg"
                  alt=""
                />
                <div className="d-flex align-items-center bg-light">
                  <div className="service-icon flex-shrink-0 bg-primary">
                    <img
                      className="img-fluid"
                      src="/assets/img/icon/icon-06-light-1.png"
                      alt=""
                    />
                  </div>
                  <a className="h4 mx-4 mb-0" href="">
                    Full Stack Web Development
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      {/* <!-- Quote Start --> */}
      <div className="container-fluid overflow-hidden my-5 px-lg-0">
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 quote-text"
              data-parallax="scroll"
              data-image-src="/assets/img/carousel-1.jpg"
            >
              <div
                className="h-100 px-4 px-sm-5 ps-lg-0 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <h1 className="text-white mb-4">
                  For Individuals And Organisations
                </h1>
                <p className="text-light mb-5">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <a
                  href=""
                  className="align-self-start btn btn-primary py-3 px-5"
                >
                  More Details
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 quote-form"
              data-parallax="scroll"
              data-image-src="/assets/img/carousel-2.jpg"
            >
              <div
                className="h-100 px-4 px-sm-5 pe-lg-0 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="bg-white p-4 p-sm-5">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="gname"
                          placeholder="Gurdian Name"
                        />
                        <label for="gname">Your Name</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="gmail"
                          placeholder="Gurdian Email"
                        />
                        <label for="gmail">Your Email</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="cname"
                          placeholder="Child Name"
                        />
                        <label for="cname">Your Mobile</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="cage"
                          placeholder="Child Age"
                        />
                        <label for="cage">Service Type</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{height: "80px"}}
                        ></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary py-3 px-5"
                        type="submit"
                      >
                        Get A Free Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Quote End --> */}

      {/* <!-- Team Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{maxWidth: "500px"}}
          >
            <h1 className="display-6 mb-5">
              Meet Our Professional Team Members
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src="/assets/img/team-1.jpg"
                    alt=""
                  />
                  <div className="team-social">
                    <a
                      className="btn btn-square btn-primary rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5>Full Name</h5>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src="/assets/img/team-2.jpg"
                    alt=""
                  />
                  <div className="team-social">
                    <a
                      className="btn btn-square btn-primary rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5>Full Name</h5>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src="/assets/img/team-3.jpg"
                    alt=""
                  />
                  <div className="team-social">
                    <a
                      className="btn btn-square btn-primary rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5>Full Name</h5>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src="/assets/img/team-4.jpg"
                    alt=""
                  />
                  <div className="team-social">
                    <a
                      className="btn btn-square btn-primary rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h5>Full Name</h5>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{maxWidth: "500px"}}
          >
            <h1 className="display-6 mb-5">What They Say About Our Services</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 d-none d-lg-block">
              <div className="testimonial-left h-100">
                <img
                  className="img-fluid animated pulse infinite"
                  src="/assets/img/testimonial-1.jpg"
                  alt=""
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="/assets/img/testimonial-2.jpg"
                  alt=""
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="/assets/img/testimonial-3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid mx-auto mb-4"
                    src="/assets/img/testimonial-1.jpg"
                    alt=""
                  />
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid mx-auto mb-4"
                    src="/assets/img/testimonial-2.jpg"
                    alt=""
                  />
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid mx-auto mb-4"
                    src="/assets/img/testimonial-3.jpg"
                    alt=""
                  />
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="testimonial-right h-100">
                <img
                  className="img-fluid animated pulse infinite"
                  src="/assets/img/testimonial-1.jpg"
                  alt=""
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="/assets/img/testimonial-2.jpg"
                  alt=""
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="/assets/img/testimonial-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </div>
  );
}
