import React from "react";

export default function Footer() {
  return (
    <div className="col-lg-8">
      <a href="#" className="back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
      <section className="wow fadeIn" data-wow-delay="0.1s">
        <div className="bg-secondary text-light text-center p-5">
          <div className="d-flex justify-content-center mb-4">
            <a className="btn btn-dark btn-square mx-1" href="#">
              <i className="fab fa-twitter" style={{ color: "#009cb8" }}></i>
            </a>
            <a
              className="btn btn-dark btn-square mx-1"
              href="https://www.facebook.com/md.fayzullah.aman/"
            >
              <i className="fab fa-facebook-f" style={{ color: "#009cb8" }}></i>
            </a>
            <a
              className="btn btn-dark btn-square mx-1"
              href="https://www.linkedin.com/in/md-fayzullah-aman-140323223/"
            >
              <i
                className="fab fa-linkedin-in"
                style={{ color: "#009cb8" }}
              ></i>
            </a>
            <a
              className="btn btn-dark btn-square mx-1"
              href="https://github.com/fayzullahaman"
            >
              <i className="fab fa-github" style={{ color: "#009cb8" }}></i>
            </a>
          </div>
          <p className="m-0">
            &copy; All Rights Reserved. Designed by{" "}
            <a
              style={{ color: "#009cb8" }}
              href="https://fayzullahaman.bdprogrammers.com"
            >
              Md Fayzullah Aman
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
