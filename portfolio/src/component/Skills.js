import React from "react";

export default function Skills() {
  return (
    <div className="col-lg-8">
      <section
        className="py-5 border-bottom wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h1 className="title pb-3 mb-5">Skills</h1>
        <div className="row">
          <div className="col-sm-6">
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">HTML</p>
                <p className="mb-2">95%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">CSS</p>
                <p className="mb-2">75%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">PHP</p>
                <p className="mb-2">70%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Javascript</p>
                <p className="mb-2">60%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Jquery</p>
                <p className="mb-2">65%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuenow={65}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">React js</p>
                <p className="mb-2">75%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Angular JS</p>
                <p className="mb-2">65%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow={65}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Wordpress</p>
                <p className="mb-2">75%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
