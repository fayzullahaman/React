import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // console.log(user);

  const formSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    axios
      .post(
        "http://localhost/React/reactjs_login_registration/api/login.php",
        user
      )
      .then((response) => {
        // console.log(response.data);
        if (response.data.success) {
          // alert(response.data.success);
          // console.log(response.data.user.email);
          sessionStorage.setItem("email", response.data.user.email);
          sessionStorage.setItem(
            "fullname",
            response.data.user.fname + " " + response.data.user.lname
          );
          navigate("/dashboard");
        } else {
          alert(response.data.error);
        }
      });
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-left h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  User Login
                </h3>

                <form onSubmit={formSubmit} className="px-md-2">
                  <div className="form-outline mb-4">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      id="form3Example1q"
                      className="form-control"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      id="form3Example1q"
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-success btn-lg mb-1">
                    Login
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
