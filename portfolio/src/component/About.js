import React from "react";

export default function About() {
  return (
    <div className="col-lg-8">
      <section
        className="py-5 border-bottom wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h1 className="title pb-3 mb-5">About Me</h1>
        <p style={{ textAlign: "justify" }}>
          Assalamu Alaikum. <br />
          Nice to meet you! I have 5 years of experience as computer operator.
          Recently I completed web development course from IsDB-BISEW and gained
          experience in web development. Now I am working in web design and
          development. Languages I know are HTML, CSS, Bootstrap, JavaScript,
          Jquery, PHP, MySQL, WordPress, Angular, React js, CodeIgniter. I am
          very interested in sharing my skills in web development to the public.
          My passion is creating and developing a professional, beautiful
          website. I am committed to maintain a professional relationship with
          my clients and provide efficient and reliable service according to
          their needs. Contact me now to discuss your next project.
        </p>
        <div className="row mb-4">
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-info">Name:</span> Md Fayzullah Aman
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-info">Birthday:</span> 29 December
            1995
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-info">Degree:</span> Master
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-info">Experience:</span> 1 Years
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-info">Phone:</span> +01795 504043 /
            +01916 955766
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-info">Email:</span>{" "}
            fayzullahaman@gmail.com
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-info">Address:</span> Khanbag
            Masjid, Uttar Badda, Dhaka.
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-info">Freelance:</span> Available
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-4 col-lg-6 col-xl-4">
            <div className="d-flex bg-secondary p-4">
              <h1
                className="flex-shrink-0 display-5 text-info mb-0"
                data-toggle="counter-up"
              >
                01
              </h1>
              <div className="ps-3">
                <p className="mb-0">Years of</p>
                <h5 className="mb-0">Experience</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 col-xl-4">
            <div className="d-flex bg-secondary p-4">
              <h1
                className="flex-shrink-0 display-5 text-info mb-0"
                data-toggle="counter-up"
              >
                00
              </h1>
              <div className="ps-3">
                <p className="mb-0">Happy</p>
                <h5 className="mb-0">Clients</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 col-xl-4">
            <div className="d-flex bg-secondary p-4">
              <h1
                className="flex-shrink-0 display-5 text-info mb-0"
                data-toggle="counter-up"
              >
                05
              </h1>
              <div className="ps-3">
                <p className="mb-0">Complete</p>
                <h5 className="mb-0">Projects</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
