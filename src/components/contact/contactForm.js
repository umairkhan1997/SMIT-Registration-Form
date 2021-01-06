import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./contact.css";
import logo from "../../images/logo.png";
import Fade from "react-reveal";
import Button from "../../smallcomponents/mybtn";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <div
            style={{ backgroundColor: "#0066b3" }}
            className="p-5 text-white rounded"
          >
            <div className="container py-5">
              <h2>Get In Touch</h2>
            </div>
          </div>
          <div style={{ marginTop: "-40px" }} className="container pl-5 pr-5">
            <div className="row shadow">
              <div className="col-md-8 bg-white p-5">
                <h2>Send us a message</h2>
                <form>
                  <div>
                    <div className="row">
                      <div className="col-md-6 pt-4">
                        <label for="name" className="labl">
                          Your Name (required)
                        </label>
                        <input
                          placeholder="Your Name"
                          id="name"
                          className="inp"
                        />
                      </div>
                      <div className="col-md-6 pt-4">
                        <label for="Subject" className="labl">
                          Your Subject (required)
                        </label>
                        <input
                          placeholder="Your Subject"
                          id="Subject"
                          className="inp"
                        />
                      </div>
                      <div className="col-md-12 pt-4">
                        <label for="email" className="labl">
                          Your Email (required)
                        </label>
                        <input
                          placeholder="Your Email"
                          id="email"
                          className="inp"
                        />
                      </div>
                      <div className="col-md-12 pt-4">
                        <label for="message" className="labl">
                          Your Message
                        </label>
                        <textarea
                          placeholder="Your Message"
                          id="message"
                          className="inp"
                          rows="8"
                        ></textarea>
                      </div>
                      <div className="col-md-12 pt-4">
                        <Button value="Send" otherClass="btn-block" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div
                style={{
                  backgroundImage:
                    "url('https://www.dentonsgmbh.com/-/media/images/website/background-images/landing-pages/whats-different-about-dentons/contact-us/contact3.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="col-md-4"
              >
                <div className="p-5">
                  <img src={logo} width="180px" />
                </div>
                <div className="p-5">
                  <div className="text-white text-left">
                    <p style={{ fontSize: "1.2em" }}>
                      Saylani Welfare Head Office
                    </p>
                    <p>
                      <i class="fas fa-map-marker-alt"></i> A-25, Bahadurabad
                      Chowrangi Karachi, Pakistan
                    </p>
                    <div className="pt-2 pb-2">
                      <p>
                        <i class="fas fa-phone-alt"></i>{" "}
                        <a style={{ color: "white" }} href="tel:111729526">
                          UAN: 111-729-526
                        </a>
                      </p>
                    </div>
                    <div className="pt-2 pb-2">
                      <p>
                        <i class="fas fa-globe"></i>{" "}
                        <a style={{ color: "white" }} href="tel:+0092413078690">
                          (+0092-213) 4130786-90
                        </a>
                      </p>
                    </div>
                    <div className="pt-2 pb-2">
                      <p>
                        <i class="fas fa-globe"></i>{" "}
                        <a style={{ color: "white" }} href="tel:+17169417792">
                          USA No: +1(716)941 7792
                        </a>
                      </p>
                    </div>
                    <div className="pt-2 pb-2">
                      <p>
                        <i class="fas fa-globe"></i>{" "}
                        <a style={{ color: "white" }} href="tel: +441159706256">
                          UK No: (+44)115 970 6256
                        </a>
                      </p>
                    </div>
                    <div className="pt-2 pb-2">
                      <p>
                        <i class="fas fa-envelope"></i>{" "}
                        <a
                          style={{ color: "white" }}
                          href="mailto:info@saylaniwelfare.com"
                        >
                          info@saylaniwelfare.com
                        </a>
                      </p>
                    </div>
                    <div className="pt-2 pb-2">
                      <div>
                        <span className="socialLink">
                          <a href="https://www.facebook.com/saylaniwelfare/">
                            <i class="fab fa-facebook"></i>
                          </a>
                        </span>
                        <span className="socialLink">
                          <a href="https://www.youtube.com/c/SaylaniWelfareTrustOfficialPage">
                            <i class="fab fa-youtube"></i>
                          </a>
                        </span>
                        <span className="socialLink">
                          <a href="https://www.instagram.com/saylaniwelfare/">
                            <i class="fab fa-instagram"></i>
                          </a>
                        </span>
                        <span className="socialLink">
                          <a href="https://twitter.com/OfficialSwit">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </span>
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
}
