export default function Home() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="assets/img/slider/carousel-1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Welcome to our dairy farm</p>
              <h1>The Farm of Dairy products</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="assets/img/slider/carousel-2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Welcome to our dairy farm</p>
              <h1>Best Organic Dairy Products Previous</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="assets/img/slider/carousel-3.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Welcome to our dairy farm</p>
              <h1>The Farm of Dairy products</h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp tesTimonial"
            data-wow-delay="0.1s"
          >
            <p className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </p>
            <h1 className="mb-5">What People Say About Our Modern Dairy</h1>
          </div>
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-5 wow fadeInUp testLeft"
              data-wow-delay="0.1s"
            >
              <div className="testimonial-img">
                <img
                  className="img-fluid my-Style img-align-1 animated pulse infinite"
                  src="assets/img/testi-1.jpg"
                />
                <img
                  className="img-fluid my-Style img-align-2 animated pulse infinite"
                  src="assets/img/testi-2.jpg"
                />
                <img
                  className="img-fluid my-Style img-align-3 animated pulse infinite"
                  src="assets/img/testi-3.jpg"
                />
                <img
                  className="img-fluid my-Style img-align-4 animated pulse infinite"
                  src="assets/img/testi-4.jpg"
                />
              </div>
            </div>
            <div
              className="col-lg-7 wow fadeInUp testRight"
              data-wow-delay="0.5s"
            >
              <div className="owl-stage-outer">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="img-fluid my-Style img-align-1 animated pulse infinite"
                        src="assets/img/testi-1.jpg"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>Welcome to our dairy farm</p>
                        <h1>The Farm of Dairy products</h1>
                      </div>
                    </div>
                    {/* <div className="carousel-item">
                      <img
                        src="assets/img/slider/carousel-2.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>Welcome to our dairy farm</p>
                        <h1>Best Organic Dairy Products Previous</h1>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src="assets/img/slider/carousel-3.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>Welcome to our dairy farm</p>
                        <h1>The Farm of Dairy products</h1>
                      </div>
                    </div> */}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="owl-stage">
                  asdfsadf
                  <div className="owl-item cloned">
                    <div className="testimonial-item">
                      <img
                        className="img-fluid mb-3"
                        src="assets/img/testi-1.jpg"
                      />
                      <p className="fs-5">
                        Dolores sed duo clita tempor justo dolor et stet lorem
                        kasd labore dolore lorem ipsum. At lorem lorem magna ut
                        et, nonumy et labore et tempor diam tempor erat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
