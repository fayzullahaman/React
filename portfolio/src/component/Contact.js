import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

export default function Contact() {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="col-lg-8">
      <section className="py-5 wow fadeInUp" data-wow-delay="0.1s" id="contact">
        <div className="d-flex justify-content-between">
          <h1 className="title pb-3 mb-5">Contact Me</h1>
          <Link
            to="/"
            className="btn btn-info mt-2"
            style={{ width: "130px", height: "40px" }}
          >
            Back To Home
          </Link>
        </div>

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
    </div>
  );
}
