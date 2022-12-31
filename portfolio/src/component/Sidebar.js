import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
// import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="col-lg-4 sticky-lg-top vh-100">
      <div className="d-flex flex-column h-100 text-center overflow-auto shadow">
        <img
          className="w-100 img-fluid mb-4"
          src="/assets/img/profile.jpg"
          alt="Image"
        />
        <h1 className="text-info mt-2 text-uppercase">Md. Fayzullah Aman</h1>
        <span className="mb-4" style={{ fontWeight: "bold", fontSize: "22px" }}>
          <Typewriter
            words={[
              "Front End Developer",
              "Backend Developer",
              "Web Designer",
              "Web Developer",
            ]}
            loop={10}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        {/* <div>
          <ul>
            <li className="btn btn-secondary">About Me</li>
            <br />
            <li className="btn btn-secondary my-1">Skills</li>
            <br />
            <li className="btn btn-secondary">Expericence</li>
            <br />
            <li className="btn btn-secondary my-1">Services</li>
            <br />
            <li className="btn btn-secondary">Portfolio</li>
            <br />
            <li className="btn btn-secondary my-1">Testimonial</li>
            <br />
            <li className="btn btn-secondary">Contact Me</li>
            <br />
          </ul>
        </div> */}
        <div className="d-flex justify-content-center mt-auto mb-3">
          {/* <a className="btn btn-secondary btn-square mx-1" to="#">
            <i className="fab fa-twitter" style={{ color: "#009cb8" }}></i>
          </a> */}
          <a
            className="btn btn-secondary btn-square mx-1"
            href="https://www.facebook.com/md.fayzullah.aman/"
          >
            <i className="fab fa-facebook-f" style={{ color: "#009cb8" }}></i>
          </a>
          <a
            className="btn btn-secondary btn-square mx-1"
            href="https://www.linkedin.com/in/md-fayzullah-aman-140323223/"
          >
            <i className="fab fa-linkedin-in" style={{ color: "#009cb8" }}></i>
          </a>
          <a
            className="btn btn-secondary btn-square mx-1"
            href="https://github.com/fayzullahaman"
          >
            <i className="fab fa-github" style={{ color: "#009cb8" }}></i>
          </a>
        </div>
        <div className="d-flex align-items-end justify-content-between border-top">
          <a
            href="assets/img/fayzullahaman_resume.pdf"
            download="fayzullahaman_resume.pdf"
            className="btn w-50 border-end"
          >
            Download CV
          </a>
          <Link to="contact" className="btn w-50 btn-scroll">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
