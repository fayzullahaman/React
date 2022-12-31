import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import emailjs from "@emailjs/browser";

export default function Home() {
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
          console.log("message sent");
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
                <p className="mb-2">95%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">CSS</p>
                <p className="mb-2">75%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">PHP</p>
                <p className="mb-2">70%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Javascript</p>
                <p className="mb-2">60%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Jquery</p>
                <p className="mb-2">65%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuenow={65}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">React js</p>
                <p className="mb-2">75%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Angular JS</p>
                <p className="mb-2">65%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow={65}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Wordpress</p>
                <p className="mb-2">75%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "75%" }}
                ></div>
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
          <p className="mb-2">
            The Royal Scintific Publication | <small>2018 - 2022</small>
          </p>
          <p>
            Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
            dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
            lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
          </p>
        </div>
        <div className="position-relative mb-4">
          <h5 className="mb-1">Computer Operator</h5>
          <p className="mb-2">
            Golden Harvest | <small>2017 - 2018</small>
          </p>
          <p>
            Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
            dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
            lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
          </p>
        </div>
        <div className="position-relative mb-4">
          <h5 className="mb-1">Computer Operator</h5>
          <p className="mb-2">
            Computer Graphic Design Ltd | <small>2016 - 2017</small>
          </p>
          <p>
            Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
            dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
            lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
          </p>
        </div>
      </section>

      <section
        className="py-5 border-bottom wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="bg-secondary text-center p-5">
          <h1 className="text-white font-weight-bold">
            Subscribe My Newsletter
          </h1>
          <p className="text-white">
            Subscribe and get my latest article in your inbox
          </p>
          <div className="position-relative w-100">
            <input
              className="form-control bg-dark border-0 w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-info py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              Subscribe
            </button>
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
        <div className="row">
          <div className="col-12">
            <div className="row">
              {/* <div className="col-12 text-center mb-2">
             <ul className="list-inline mb-4" id="portfolio-flters">
               <li
                 className="btn btn-secondary active"
                 data-filter="*"
               >
                 <i className="fa fa-star me-2"></i>All
               </li>
               <li className="btn btn-secondary" data-filter=".first">
                 <i className="fa fa-laptop-code me-2"></i>Design
               </li>
               <li className="btn btn-secondary" data-filter=".second">
                 <i className="fa fa-mobile-alt me-2"></i>Development
               </li>
             </ul>
           </div> */}
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
                    <a
                      href="https://restaurant.bdprogrammers.com"
                      // data-lightbox="portfolio"
                    >
                      {/* <i className="bi bi-plus text-light"></i> */}
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
                    <a
                      href="/assets/img/portfolio-2.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="bi bi-plus text-light"></i>
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
                    <a
                      href="/assets/img/portfolio-3.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="bi bi-plus text-light"></i>
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
                    <a
                      href="/assets/img/portfolio-4.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="bi bi-plus text-light"></i>
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
        data-wow-delay="0.1s"
      >
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
        <form ref={form} onSubmit={sendEmail}>
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
