import React from "react";

export default function Home() {
  return (
    <div>
      <section
        id="hero"
        classNameName="hero d-flex align-items-center section-bg"
      >
        <div classNameName="container">
          <div classNameName="row justify-content-between gy-5">
            <div classNameName="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h2 data-aos="fade-up">
                Enjoy Your Healthy
                <br />
                Delicious Food
              </h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                eveniet. Eum quas beatae cumque eum quaerat.
              </p>
              <div
                classNameName="d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a href="#book-a-table" classNameName="btn-book-a-table">
                  Book a Table
                </a>
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  classNameName="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i classNameName="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div classNameName="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
              <img
                src="assets/img/hero-img.png"
                classNameName="img-fluid"
                alt=""
                data-aos="zoom-out"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="why-us" classNameName="why-us section-bg">
          <div classNameName="container" data-aos="fade-up">
            <div classNameName="row gy-4">
              <div
                classNameName="col-lg-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div classNameName="why-box">
                  <h3>Why Choose Yummy?</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit Asperiores
                    dolores sed et. Tenetur quia eos. Autem tempore quibusdam
                    vel necessitatibus optio ad corporis.
                  </p>
                  <div classNameName="text-center">
                    <a href="#" classNameName="more-btn">
                      Learn More <i classNameName="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div classNameName="col-lg-8 d-flex align-items-center">
                <div classNameName="row gy-4">
                  <div
                    classNameName="col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div classNameName="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i classNameName="bi bi-clipboard-data"></i>
                      <h4>Corporis voluptates officia eiusmod</h4>
                      <p>
                        Consequuntur sunt aut quasi enim aliquam quae harum
                        pariatur laboris nisi ut aliquip
                      </p>
                    </div>
                  </div>

                  <div
                    classNameName="col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div classNameName="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i classNameName="bi bi-gem"></i>
                      <h4>Ullamco laboris ladore pan</h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt
                      </p>
                    </div>
                  </div>

                  <div
                    classNameName="col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div classNameName="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i classNameName="bi bi-inboxes"></i>
                      <h4>Labore consequatur incidid dolore</h4>
                      <p>
                        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus
                        ut maiores omnis facere
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="stats-counter" classNameName="stats-counter">
          <div classNameName="container" data-aos="zoom-out">
            <div classNameName="row gy-4">
              <div classNameName="col-lg-3 col-md-6">
                <div classNameName="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    classNameName="purecounter"
                  ></span>
                  <p>Clients</p>
                </div>
              </div>

              <div classNameName="col-lg-3 col-md-6">
                <div classNameName="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    classNameName="purecounter"
                  ></span>
                  <p>Projects</p>
                </div>
              </div>

              <div classNameName="col-lg-3 col-md-6">
                <div classNameName="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1453"
                    data-purecounter-duration="1"
                    classNameName="purecounter"
                  ></span>
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div classNameName="col-lg-3 col-md-6">
                <div classNameName="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="32"
                    data-purecounter-duration="1"
                    classNameName="purecounter"
                  ></span>
                  <p>Workers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" classNameName="testimonials section-bg">
          <div classNameName="container" data-aos="fade-up">
            <div classNameName="section-header">
              <h2>Testimonials</h2>
              <p>
                What Are They <span>Saying About Us</span>
              </p>
            </div>

            <div
              classNameName="slides-1 swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div classNameName="swiper-wrapper">
                <div classNameName="swiper-slide">
                  <div classNameName="testimonial-item">
                    <div classNameName="row gy-4 justify-content-center">
                      <div classNameName="col-lg-6">
                        <div classNameName="testimonial-content">
                          <p>
                            <i classNameName="bi bi-quote quote-icon-left"></i>
                            Proin iaculis purus consequat sem cure digni ssim
                            donec porttitora entum suscipit rhoncus. Accusantium
                            quam, ultricies eget id, aliquam eget nibh et.
                            Maecen aliquam, risus at semper.
                            <i classNameName="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Saul Goodman</h3>
                          <h4>Ceo &amp; Founder</h4>
                          <div classNameName="stars">
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div classNameName="col-lg-2 text-center">
                        <img
                          src="assets/img/testimonials/testimonials-1.jpg"
                          classNameName="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div classNameName="swiper-slide">
                  <div classNameName="testimonial-item">
                    <div classNameName="row gy-4 justify-content-center">
                      <div classNameName="col-lg-6">
                        <div classNameName="testimonial-content">
                          <p>
                            <i classNameName="bi bi-quote quote-icon-left"></i>
                            Export tempor illum tamen malis malis eram quae
                            irure esse labore quem cillum quid cillum eram malis
                            quorum velit fore eram velit sunt aliqua noster
                            fugiat irure amet legam anim culpa.
                            <i classNameName="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Sara Wilsson</h3>
                          <h4>Designer</h4>
                          <div classNameName="stars">
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div classNameName="col-lg-2 text-center">
                        <img
                          src="assets/img/testimonials/testimonials-2.jpg"
                          classNameName="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div classNameName="swiper-slide">
                  <div classNameName="testimonial-item">
                    <div classNameName="row gy-4 justify-content-center">
                      <div classNameName="col-lg-6">
                        <div classNameName="testimonial-content">
                          <p>
                            <i classNameName="bi bi-quote quote-icon-left"></i>
                            Enim nisi quem export duis labore cillum quae magna
                            enim sint quorum nulla quem veniam duis minim tempor
                            labore quem eram duis noster aute amet eram fore
                            quis sint minim.
                            <i classNameName="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Jena Karlis</h3>
                          <h4>Store Owner</h4>
                          <div classNameName="stars">
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div classNameName="col-lg-2 text-center">
                        <img
                          src="assets/img/testimonials/testimonials-3.jpg"
                          classNameName="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div classNameName="swiper-slide">
                  <div classNameName="testimonial-item">
                    <div classNameName="row gy-4 justify-content-center">
                      <div classNameName="col-lg-6">
                        <div classNameName="testimonial-content">
                          <p>
                            <i classNameName="bi bi-quote quote-icon-left"></i>
                            Quis quorum aliqua sint quem legam fore sunt eram
                            irure aliqua veniam tempor noster veniam enim culpa
                            labore duis sunt culpa nulla illum cillum fugiat
                            legam esse veniam culpa fore nisi cillum quid.
                            <i classNameName="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>John Larson</h3>
                          <h4>Entrepreneur</h4>
                          <div classNameName="stars">
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                            <i classNameName="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div classNameName="col-lg-2 text-center">
                        <img
                          src="assets/img/testimonials/testimonials-4.jpg"
                          classNameName="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div classNameName="swiper-pagination"></div>
            </div>
          </div>
        </section>
        <section id="chefs" classNameName="chefs section-bg">
          <div classNameName="container" data-aos="fade-up">
            <div classNameName="section-header">
              <h2>Chefs</h2>
              <p>
                Our <span>Proffesional</span> Chefs
              </p>
            </div>

            <div classNameName="row gy-4">
              <div
                classNameName="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div classNameName="chef-member">
                  <div classNameName="member-img">
                    <img
                      src="assets/img/chefs/chefs-1.jpg"
                      classNameName="img-fluid"
                      alt=""
                    />
                    <div classNameName="social">
                      <a href="">
                        <i classNameName="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i classNameName="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i classNameName="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i classNameName="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div classNameName="member-info">
                    <h4>Walter White</h4>
                    <span>Master Chef</span>
                    <p>
                      Velit aut quia fugit et et. Dolorum ea voluptate vel
                      tempore tenetur ipsa quae aut. Ipsum exercitationem iure
                      minima enim corporis et voluptate.
                    </p>
                  </div>
                </div>
              </div>

              <div
                classNameName="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div classNameName="chef-member">
                  <div classNameName="member-img">
                    <img
                      src="assets/img/chefs/chefs-2.jpg"
                      classNameName="img-fluid"
                      alt=""
                    />
                    <div classNameName="social">
                      <a href="">
                        <i classNameName="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i classNameName="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i classNameName="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i classNameName="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div classNameName="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Patissier</span>
                    <p>
                      Quo esse repellendus quia id. Est eum et accusantium
                      pariatur fugit nihil minima suscipit corporis. Voluptate
                      sed quas reiciendis animi neque sapiente.
                    </p>
                  </div>
                </div>
              </div>

              <div
                classNameName="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div classNameName="chef-member">
                  <div classNameName="member-img">
                    <img
                      src="assets/img/chefs/chefs-3.jpg"
                      classNameName="img-fluid"
                      alt=""
                    />
                    <div classNameName="social">
                      <a href="">
                        <i classNameName="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i classNameName="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i classNameName="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i classNameName="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div classNameName="member-info">
                    <h4>William Anderson</h4>
                    <span>Cook</span>
                    <p>
                      Vero omnis enim consequatur. Voluptas consectetur unde qui
                      molestiae deserunt. Voluptates enim aut architecto porro
                      aspernatur molestiae modi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="book-a-table" classNameName="book-a-table">
          <div classNameName="container" data-aos="fade-up">
            <div classNameName="section-header">
              <h2>Book A Table</h2>
              <p>
                Book <span>Your Stay</span> With Us
              </p>
            </div>

            <div classNameName="row g-0">
              <div
                classNameName="col-lg-4 reservation-img"
                data-aos="zoom-out"
                data-aos-delay="200"
              ></div>

              <div classNameName="col-lg-8 d-flex align-items-center reservation-form-bg">
                <form
                  action="forms/book-a-table.php"
                  method="post"
                  role="form"
                  classNameName="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div classNameName="row gy-4">
                    <div classNameName="col-lg-4 col-md-6">
                      <input
                        type="text"
                        name="name"
                        classNameName="form-control"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div classNameName="validate"></div>
                    </div>
                    <div classNameName="col-lg-4 col-md-6">
                      <input
                        type="email"
                        classNameName="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div classNameName="validate"></div>
                    </div>
                    <div classNameName="col-lg-4 col-md-6">
                      <input
                        type="text"
                        classNameName="form-control"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div classNameName="validate"></div>
                    </div>
                    <div classNameName="col-lg-4 col-md-6">
                      <input
                        type="text"
                        name="date"
                        classNameName="form-control"
                        id="date"
                        placeholder="Date"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div classNameName="validate"></div>
                    </div>
                    <div classNameName="col-lg-4 col-md-6">
                      <input
                        type="text"
                        classNameName="form-control"
                        name="time"
                        id="time"
                        placeholder="Time"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div classNameName="validate"></div>
                    </div>
                    <div classNameName="col-lg-4 col-md-6">
                      <input
                        type="number"
                        classNameName="form-control"
                        name="people"
                        id="people"
                        placeholder="# of people"
                        data-rule="minlen:1"
                        data-msg="Please enter at least 1 chars"
                      />
                      <div classNameName="validate"></div>
                    </div>
                  </div>
                  <div classNameName="form-group mt-3">
                    <textarea
                      classNameName="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                    <div classNameName="validate"></div>
                  </div>
                  <div classNameName="mb-3">
                    <div classNameName="loading">Loading</div>
                    <div classNameName="error-message"></div>
                    <div classNameName="sent-message">
                      Your booking request was sent. We will call back or send
                      an Email to confirm your reservation. Thank you!
                    </div>
                  </div>
                  <div classNameName="text-center">
                    <button type="submit">Book a Table</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" classNameName="gallery section-bg">
          <div classNameName="container" data-aos="fade-up">
            <div classNameName="section-header">
              <h2>gallery</h2>
              <p>
                Check <span>Our Gallery</span>
              </p>
            </div>

            <div classNameName="gallery-slider swiper">
              <div classNameName="swiper-wrapper align-items-center">
                <div classNameName="swiper-slide">
                  <a
                    classNameName="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-1.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-1.jpg"
                      classNameName="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div classNameName="swiper-slide">
                  <a
                    classNameName="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-2.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-2.jpg"
                      classNameName="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div classNameName="swiper-slide">
                  <a
                    classNameName="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-3.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-3.jpg"
                      classNameName="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div classNameName="swiper-slide">
                  <a
                    classNameName="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-4.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-4.jpg"
                      classNameName="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div classNameName="swiper-slide">
                  <a
                    classNameName="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-5.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-5.jpg"
                      classNameName="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div classNameName="swiper-slide">
                  <a
                    classNameName="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-6.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-6.jpg"
                      classNameName="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div classNameName="swiper-slide">
                  <a
                    classNameName="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-7.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-7.jpg"
                      classNameName="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div classNameName="swiper-slide">
                  <a
                    classNameName="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-8.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-8.jpg"
                      classNameName="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div classNameName="swiper-pagination"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
