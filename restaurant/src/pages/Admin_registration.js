import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin_registration() {
  const navigate = useNavigate();
  
  const [info, setInfo] = useState({});

  const changeValue = (e) => {
    setInfo({...info, [e.target.name]: e.target.value});
  }
  // console.log(info);
  const formSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost/restaurantApi/admin-reg.php", info).then((res)=>{if(res.data){
      console.log(res.data);
      navigate("/admin_log");
    }})
  }

  return (
    <div>
      <div>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Addmin Registration
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Booking
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div
          className="container-xxl py-5 px-0 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="row g-0 justify-content-center">
            <div className="col-md-6 bg-dark d-flex align-items-center">
              <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                  Registration Form
                </h5>
                <h1 className="text-white mb-4">Admin Registration</h1>
                <form onSubmit={formSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          name='fname'
                          className="form-control"
                          id="fname"
                          onChange={changeValue}
                          placeholder="Your First Name"
                        />
                        <label for="name">Your First Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          name='lname'
                          onChange={changeValue}
                          className="form-control"
                          id="lname"
                          placeholder="Your Last Name"
                        />
                        <label for="name">Your Last Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          name='email'
                          onChange={changeValue}
                          id="email"
                          placeholder="Your Email"
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          name='password'
                          onChange={changeValue}
                          id="password"
                          placeholder="Your Password"
                        />
                        <label for="email">Your Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
