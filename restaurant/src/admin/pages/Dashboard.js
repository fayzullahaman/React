import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  let naviGate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      naviGate("/admin_log");
    }
  });

  const [adminInfo, setAdminInfo] = useState([]);
  const [menuInfo, setMenuInfo] = useState([]);
  // console.log(adminInfo);

  useEffect(() => {
    allAdmin();
    allMenu();
  }, []);

  const allAdmin = async () => {
    axios
      .get("http://localhost/React/restaurant/restaurantApi/alladmin.php")
      .then((res) => {
        setAdminInfo(res.data.datas.myadmin);
        // console.log(res.data.datas.menus);
      });
  };

  const allMenu = async () => {
    axios
      .get("http://localhost/React/restaurant/restaurantApi/allmenu.php")
      .then((res) => {
        setMenuInfo(res.data.datas.menus);
        // console.log(res.data.datas.menus);
      });
  };

  return (
    <>
      <div className="col-sm-12">
        <div className="row mt-3">
          <div class="col-xl-2 col-sm-3">
            <div class="card bg-success text-white h-100">
              <div class="card-body bg-success">
                <div class="rotate">
                  <i class="fa fa-user fa-2x"></i>
                </div>
                <h6 class="text-uppercase">Users</h6>
                <h1 class="display-6">134</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-6">
            <div className="small-box bg-info">
              <div className="inner mx-3">
                <h3>
                  {adminInfo.length}
                  <sup style={{ fontSize: "20px" }}></sup>
                </h3>
                <p style={{ fontSize: "20px", color: "white" }}>Admin</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag"></i>
              </div>
              <a href="#" className="small-box-footer mx-3">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-6">
            <div className="small-box bg-success">
              <div className="inner mx-3">
                <h3>
                  {menuInfo.length}
                  <sup style={{ fontSize: "20px" }}></sup>
                </h3>

                <p>Total Menu</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars"></i>
              </div>
              <a href="#" className="small-box-footer mx-3">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-6">
            <div className="small-box bg-warning">
              <div className="inner mx-3">
                <h3>25</h3>

                <p>Our Tem</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add"></i>
              </div>
              <a href="#" className="small-box-footer mx-3">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-6">
            <div className="small-box bg-danger">
              <div className="inner mx-3">
                <h3>5</h3>

                <p>Upcoming Category</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph"></i>
              </div>
              <a href="#" className="small-box-footer mx-3">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-6">
            <div className="small-box bg-secondary">
              <div className="inner mx-3">
                <h3>15</h3>

                <p>Upcoming Category</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph"></i>
              </div>
              <a href="#" className="small-box-footer mx-3">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
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
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet
                      </p>
                    </div>
                    <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                      <img
                        className="img-fluid"
                        src="assets/img/hero.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
