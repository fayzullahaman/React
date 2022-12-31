import React from "react";
import OwlCarousel from "react-owl-carousel";

export default function Testimoni() {
  return (
    <div className="col-lg-8">
      <section
        className="py-5 border-bottom wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h1 className="title pb-3 mb-5">Testimonial</h1>

        <div className="testimonial-carousel">
          <OwlCarousel items={1} className="owl-theme" loop autoplay={true}>
            <div className="text-left">
              <i className="fa fa-2x fa-quote-left text-info mb-4"></i>
              <p className="fs-4 mb-4">
                Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                dolor stet accusam amet eirmod eos, labore diam clita
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/img/testimonial-1.jpg"
                  style={{ width: "60px", height: "60px" }}
                />
                <div className="ps-3">
                  <p className="text-info fs-5 mb-1">Client Name</p>
                  <i>Profession</i>
                </div>
              </div>
            </div>

            <div className="text-left">
              <i className="fa fa-2x fa-quote-left text-info mb-4"></i>
              <p className="fs-4 mb-4">
                Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                dolor stet accusam amet eirmod eos, labore diam clita
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/img/testimonial-2.jpg"
                  style={{ width: "60px", height: "60px" }}
                />
                <div className="ps-3">
                  <p className="text-info fs-5 mb-1">Client Name</p>
                  <i>Profession</i>
                </div>
              </div>
            </div>
            <div className="text-left">
              <i className="fa fa-2x fa-quote-left text-info mb-4"></i>
              <p className="fs-4 mb-4">
                Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                dolor stet accusam amet eirmod eos, labore diam clita
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/img/testimonial-3.jpg"
                  style={{ width: "60px", height: "60px" }}
                />
                <div className="ps-3">
                  <p className="text-info fs-5 mb-1">Client Name</p>
                  <i>Profession</i>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
}
