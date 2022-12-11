import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  let fullName = sessionStorage.getItem("fullname");
  const naviGate = useNavigate();

  const logOut = () => {
    sessionStorage.clear();
    naviGate("/login");
  };

  // const email = sessionStorage.getItem("email");
  // useEffect(() => {
  //   if (email == null) {
  //     naviGate("/login");
  //   }
  // }, []);

  return (
    <div>
      <div class="p-5 bg-primary text-white text-center">
        <h1>React Project</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            REACT PROJECT
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Registe
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}

            {/* <button className="btn btn-primary mx-2" onClick={logOut} href="">
                {fullName}
                LogOut
              </button> */}
            <span className="navbar-text">{fullName}</span>
            {fullName ? (
              <button className="btn btn-info mx-2">
                <a className="nav-link" href="" onClick={logOut}>
                  LogOut
                </a>
              </button>
            ) : (
              <button className="btn btn-info">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </button>
            )}
            {/* </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
