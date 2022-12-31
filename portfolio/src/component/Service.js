import React from "react";

export default function Service() {
  return (
    <div className="col-lg-8">
      <section
        className="py-5 border-bottom wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h1 className="title pb-3 mb-5">Services</h1>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="service-item">
              <i className="fas fa-2x fa-paint-brush mx-auto mb-4"></i>
              <h5 className="mb-2">Web Design</h5>
              <p className="mb-0">
                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                Amet lorem lorem lorem est amet labore
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-item">
              <i className="fas fa-2x fa-globe mx-auto mb-4"></i>
              <h5 className="mb-2">Web Development</h5>
              <p className="mb-0">
                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                Amet lorem lorem lorem est amet labore
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-item">
              <i className="fas fa-2x fa-laptop-code mx-auto mb-4"></i>
              <h5 className="mb-2">Front End Developer</h5>
              <p className="mb-0">
                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                Amet lorem lorem lorem est amet labore
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-item">
              <i className="fas fa-2x fa-layer-group mx-auto mb-4"></i>
              <h5 className="mb-2">Backend Developer</h5>
              <p className="mb-0">
                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                Amet lorem lorem lorem est amet labore
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
