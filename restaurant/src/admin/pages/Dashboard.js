import React from "react";
export default function Dashboard() {
  return (
    <div>
      <br />
      <div className="row">
        <div className="col-lg-2 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>
                03<sup style={{ fontSize: "20px" }}></sup>
              </h3>
              <p>Admin</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-2 col-6">
          <div className="small-box bg-success">
            <div className="inner">
              <h3>
                15<sup style={{ fontSize: "20px" }}></sup>
              </h3>

              <p>Total Menu</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-2 col-6">
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>25</h3>

              <p>Our Tem</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-2 col-6">
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>5</h3>

              <p>Upcoming Category</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-6">
          <div className="small-box bg-secondary">
            <div className="inner">
              <h3>15</h3>

              <p>Upcoming Category</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-10 py-3">
        <div className="container-xxl position-relative p-0">
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container my-5 py-5">
              <div className="row align-items-center g-5">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="display-3 text-white animated slideInLeft">
                    Enjoy Our
                    <br />
                    Delicious Meal
                  </h1>
                  <p className="text-white animated slideInLeft mb-4 pb-2">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                </div>
                <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                  <img className="img-fluid" src="assets/img/hero.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
