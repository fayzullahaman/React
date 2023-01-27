import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import emailjs from "@emailjs/browser";
import { useSpring, animated } from "react-spring";

export default function Home() {
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tyip2xd",
        "template_fehjdlp",
        form.current,
        "il70G0xCfkOZZaiTJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully");
          document.getElementById("reset").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="col-lg-8">
      <section
        className="py-5 border-bottom wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h1 className="title pb-3 mb-5">About Me</h1>
        <p style={{ textAlign: "justify" }}>
          Assalamu Alaikum. <br />
          Nice to meet you! I have 5 years of experience as computer operator. Recently I completed web development course from IsDB-BISEW and gained experience in web development. Now I am working in web design and development. Languages I know are HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, MySQL, WordPress, Angular, React js, CodeIgniter, Laravel and Vue. I am very interested in sharing my skills in web development to the public. My passion is creating and developing a professional, beautiful website. I am committed to maintain a professional relationship with my clients and provide efficient and reliable service according to their needs. Contact me now to discuss your next project.
        </p>
        <div className="row mb-4">
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-info">Name:</span> Md. Fayzullah
            Aman
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-info">Birthday:</span> 29 December
            1995
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-info">Degree:</span> Master's
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-info">Experience:</span> 1 Years
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-info">Phone:</span> +01795 504043 /
            +01916 955766
          </div>
          <div className="col-sm-6 py-1">
            <span className="fw-medium text-info">Email: </span>
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
                <Number n={1} />
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
                <Number n={0} />
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
                <Number n={5} />
              </h1>
              <div className="ps-3">
                <p className="mb-0">Complete</p>
                <h5 className="mb-0">Projects</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                <p className="mb-2 d-flex">
                  <Number n={95} />%
                </p>
              </div>
              <div className="progress">
                <div className="bg-info progress-value"></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">CSS</p>
                <p className="mb-2 d-flex">
                  <Number n={75} />%
                </p>
              </div>
              <div className="progress">
                <div className="bg-primary progress-value1"></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">PHP</p>
                <p className="mb-2 d-flex">
                  <Number n={70} />%
                </p>
              </div>
              <div className="progress">
                <div className="progress-value2 bg-danger"></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Javascript</p>
                <p className="mb-2 d-flex">
                  <Number n={60} />%
                </p>
              </div>
              <div className="progress">
                <div className="progress-value3 bg-warning"></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Jquery</p>
                <p className="mb-2 d-flex">
                  <Number n={65} />%
                </p>
              </div>
              <div className="progress">
                <div className="progress-value4 bg-secondary"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">React js</p>
                <p className="mb-2 d-flex">
                  <Number n={75} />%
                </p>
              </div>
              <div className="progress">
                <div className="progress-value5 bg-warning"></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Angular JS</p>
                <p className="mb-2 d-flex">
                  <Number n={65} />%
                </p>
              </div>
              <div className="progress">
                <div className="progress-value6 bg-secondary"></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Wordpress</p>
                <p className="mb-2 d-flex">
                  <Number n={75} />%
                </p>
              </div>
              <div className="progress">
                <div className="progress-value7 bg-info"></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Laravel</p>
                <p className="mb-2 d-flex">
                  <Number n={65} />%
                </p>
              </div>
              <div className="progress">
                <div className="progress-value4 bg-primary"></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Vue</p>
                <p className="mb-2 d-flex">
                  <Number n={60} />%
                </p>
              </div>
              <div className="progress">
                <div className="progress-value3 bg-danger"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-5 border-bottom wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h1 className="title pb-3 mb-5">Expericence</h1>
        <div className="position-relative mb-4">
          <h5 className="mb-1">Computer Operator</h5>
          <p className="mb-2">The Royal Scientific Publications</p>
          <small>2018 - 2022</small>
        </div>
        <div className="position-relative mb-4">
          <h5 className="mb-1">Data Entry Operator</h5>
          <p className="mb-2">Golden Harvest InfoTech Ltd.</p>
          <small>2017 - 2018</small>
        </div>
        <div className="position-relative mb-4">
          <h5 className="mb-1">Data Entry Operator</h5>
          <p className="mb-2">Computer Graphics & Design Ltd.</p>
          <small>2016 - 2017</small>
        </div>
      </section>
      <section
        className="py-5 border-bottom wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h1 className="title pb-3 mb-5">Education</h1>
        <div className="position-relative mb-4">
          <div className="row g-4">
            <div className="col-md-4 col-lg-6 col-xl-6">
              <div className="d-flex bg-secondary p-4">
                <div className="ps-3">
                  <h4 className="mb-1">MA / Masters</h4>
                  <p className="mb-2">Al-Hadith & islamic Studies</p>
                  <p>
                    Islamic University Kushtia <br /> 2016-2017
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 col-xl-6">
              <div className="d-flex bg-secondary p-4">
                <div className="ps-3">
                  <h4 className="mb-1">BA / Honours</h4>
                  <p className="mb-2">Al-Hadith & islamic Studies</p>
                  <p>
                    Islamic University Kushtia <br /> 2012-2016
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 col-xl-6">
              <div className="d-flex bg-secondary p-4">
                <div className="ps-3">
                  <h5 className="mb-1">HSC / Alim</h5>
                  <p className="mb-2">Humanities</p>
                  <p>
                    Khamar Bari Nesaria Fazil Madrasah <br /> 2012
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 col-xl-6">
              <div className="d-flex bg-secondary p-4">
                <div className="ps-3">
                  <h5 className="mb-1">SSC / Dakhil</h5>
                  <p className="mb-2">Science</p>
                  <p>
                    Darunnazat Siddikia Kamil Madrasah <br /> 2010
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-5 border-bottom wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h1 className="title pb-3 mb-5">Services</h1>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="service-item">
              <i className="fas fa-2x fa-paint-brush mx-auto mb-4"></i>
              <h5 className="mb-2">Web Design</h5>
              <p className="mb-0">
                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                Amet lorem lorem lorem est amet labore
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-item">
              <i className="fas fa-2x fa-globe mx-auto mb-4"></i>
              <h5 className="mb-2">Web Development</h5>
              <p className="mb-0">
                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                Amet lorem lorem lorem est amet labore
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-item">
              <i className="fas fa-2x fa-laptop-code mx-auto mb-4"></i>
              <h5 className="mb-2">Front End Developer</h5>
              <p className="mb-0">
                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                Amet lorem lorem lorem est amet labore
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-item">
              <i className="fas fa-2x fa-layer-group mx-auto mb-4"></i>
              <h5 className="mb-2">Backend Developer</h5>
              <p className="mb-0">
                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                Amet lorem lorem lorem est amet labore
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-5 border-bottom wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h1 className="title pb-3 mb-5">Portfolio</h1>
        <p>Click on the images- to chack my project's</p>
        <div className="row">
          <div className="col-12">
            <div className="row">              
            </div>
            <div className="row portfolio-container">
              <div className="col-md-6 mb-4 portfolio-item first">
                <div className="position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid w-100"
                    src="/assets/img/portfolio-1.jpg"
                    alt="Protfolio Image"
                  />
                  <div className="portfolio-btn d-flex align-items-center justify-content-center">
                    <a href="https://restaurant.bdprogrammers.com">
                      <i className="bi bi-link text-light"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4 portfolio-item second">
                <div className="position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid w-100"
                    src="/assets/img/portfolio-2.jpg"
                    alt="Protfolio Image"
                  />
                  <div className="portfolio-btn d-flex align-items-center justify-content-center">
                    <a href="https://employee.bdprogrammers.com/">
                      <i className="bi bi-link text-light"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4 portfolio-item first">
                <div className="position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid w-100"
                    src="/assets/img/portfolio-3.jpg"
                    alt="Protfolio Image"
                  />
                  <div className="portfolio-btn d-flex align-items-center justify-content-center">
                    <a href="https://realestate.bdprogrammers.com/">
                      <i className="bi bi-link text-light"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4 portfolio-item second">
                <div className="position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid w-100"
                    src="/assets/img/portfolio-4.jpg"
                    alt="Protfolio Image"
                  />
                  <div className="portfolio-btn d-flex align-items-center justify-content-center">
                    <a href="https://library.bdprogrammers.com/">
                      <i className="bi bi-link text-light"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-5 border-bottom wow fadeInUp"
        data-wow-delay="0.1s">
        <h1 className="title pb-3 mb-5">Testimonial</h1>
        <div className="testimonial-carousel">
          <OwlCarousel items={1} className="owl-theme" loop autoplay={true}>
            <div className="text-left">
              <i className="fa fa-2x fa-quote-left text-info mb-4"></i>
              <p className="fs-4 mb-4">
                Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                dolor stet accusam amet eirmod eos, labore diam clita
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/img/testimonial-1.jpg"
                  style={{ width: "60px", height: "60px" }}
                />
                <div className="ps-3">
                  <p className="text-info fs-5 mb-1">Client Name</p>
                  <i>Profession</i>
                </div>
              </div>
            </div>
            <div className="text-left">
              <i className="fa fa-2x fa-quote-left text-info mb-4"></i>
              <p className="fs-4 mb-4">
                Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                dolor stet accusam amet eirmod eos, labore diam clita
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/img/testimonial-2.jpg"
                  style={{ width: "60px", height: "60px" }}
                />
                <div className="ps-3">
                  <p className="text-info fs-5 mb-1">Client Name</p>
                  <i>Profession</i>
                </div>
              </div>
            </div>
            <div className="text-left">
              <i className="fa fa-2x fa-quote-left text-info mb-4"></i>
              <p className="fs-4 mb-4">
                Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                dolor stet accusam amet eirmod eos, labore diam clita
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/img/testimonial-3.jpg"
                  style={{ width: "60px", height: "60px" }}
                />
                <div className="ps-3">
                  <p className="text-info fs-5 mb-1">Client Name</p>
                  <i>Profession</i>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section className="py-5 wow fadeInUp" data-wow-delay="0.1s" id="contact">
        <h1 className="title pb-3 mb-5">Contact Me</h1>
        <form ref={form} id="reset" onSubmit={sendEmail}>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control border-0 bg-secondary"
                  name="to_name"
                  id="name"
                  placeholder="Your Name"
                />
                <label for="name">Your Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control border-0 bg-secondary"
                  name="from_name"
                  id="email"
                  placeholder="Your Email"
                />
                <label for="email">Your Email</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control border-0 bg-secondary"
                  name="subject_name"
                  id="subject"
                  placeholder="Subject"
                />
                <label for="subject">Subject</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control border-0 bg-secondary"
                  placeholder="Leave a message here"
                  id="message"
                  name="message"
                  style={{ height: "200px" }}
                ></textarea>
                <label for="message">Message</label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-info w-100 py-3" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </section>
      <a href="#" className="back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
      <section className="wow fadeIn" data-wow-delay="0.1s">
        <div className="bg-secondary text-light text-center p-5">
          <div className="d-flex justify-content-center mb-4">            
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
