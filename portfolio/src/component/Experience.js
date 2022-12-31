import React from "react";

export default function Experience() {
  return (
    <div className="col-lg-8">
      <section
        className="py-5 border-bottom wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h1 className="title pb-3 mb-5">Expericence</h1>
        <div className="position-relative mb-4">
          <h5 className="mb-1">Computer Operator</h5>
          <p className="mb-2">
            The Royal Scintific Publication | <small>2018 - 2022</small>
          </p>
          <p>
            Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
            dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
            lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
          </p>
        </div>
        <div className="position-relative mb-4">
          <h5 className="mb-1">Computer Operator</h5>
          <p className="mb-2">
            Golden Harvest | <small>2017 - 2018</small>
          </p>
          <p>
            Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
            dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
            lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
          </p>
        </div>
        <div className="position-relative mb-4">
          <h5 className="mb-1">Computer Operator</h5>
          <p className="mb-2">
            Computer Graphic Design Ltd | <small>2016 - 2017</small>
          </p>
          <p>
            Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
            dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
            lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
          </p>
        </div>
      </section>

      <section
        className="py-5 border-bottom wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="bg-secondary text-center p-5">
          <h1 className="text-white font-weight-bold">
            Subscribe My Newsletter
          </h1>
          <p className="text-white">
            Subscribe and get my latest article in your inbox
          </p>
          <div className="position-relative w-100">
            <input
              className="form-control bg-dark border-0 w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-info py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
