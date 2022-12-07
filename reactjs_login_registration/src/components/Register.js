import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [info, setInfo] = useState({});
  const changeValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost/React/reactjs_login_registration/api/registration.php",
        info
      )
      .then((res) => {
        if (res.data) {
          console.log(res.data);
        }
      });
  };
  //   console.log(info);

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-left h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  User Registration
                </h3>

                <form className="px-md-2" onSubmit={formSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example1q">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="fname"
                      onChange={changeValue}
                      id="form3Example1q"
                      className="form-control"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example1q">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lname"
                      onChange={changeValue}
                      id="form3Example1q"
                      className="form-control"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example1q">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      onChange={changeValue}
                      id="form3Example1q"
                      className="form-control"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example1q">
                      Password
                    </label>
                    <input
                      type="text"
                      name="password"
                      onChange={changeValue}
                      id="form3Example1q"
                      className="form-control"
                    />
                  </div>

                  <button type="submit" className="btn btn-success btn-lg mb-1">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
