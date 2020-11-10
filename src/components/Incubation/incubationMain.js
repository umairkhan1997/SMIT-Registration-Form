import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./incubation.css";
import MainHeader from "../Home/MainHeader";
import { Link } from "react-router-dom";
import Fade from "react-reveal";
import img1 from "../../images/incu1.jpg";
import img2 from "../../images/ai.png";
import img3 from "../../images/ar.png";
import img4 from "../../images/ecommerce.png";
import img5 from "../../images/iot.png";
import img6 from "../../images/mar.png";
import img7 from "../../images/aliMughal.png";
import img8 from "../../images/uma.jpg";
import img9 from "../../images/zeeshan.png";
import Footer from "../Footer";
export default class incubationMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />

        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <img src={img1} width="100%" className="img1" />
            </div>
            <div className="col-md-6">
              <h1 className="incuMainhead">Saylani Incubation Center</h1>
              <p className="text-muted text-left">
                In collaboration with SMIT, the Saylani Incubators Program is
                designed to inculcate in students an advanced level of
                entrepreneurial vision and will. The program helps young
                freelancers and entrepreneurs solve some of the problems
                commonly associated with running a startup by providing them
                with necessary workspace, equipment, mentoring and training.
              </p>
              <p className="text-muted text-left">
                The Incubator Program aims to help individuals strenghten their
                entrepreneurial motives and acquire the skills and capabilities
                necessary to play their entrepreneurial role effectively and
                commence new professional or business ventures, thus eventually
                helping foster a rapidly growing I.T industry.
              </p>
            </div>
          </div>
        </div>

        {/* Division */}
        <div className="container my-5">
          <h3>
            Following summarizes the venture services offered by the Saylani
            Incubation Center
          </h3>

          <div className="container my-5 text-center">
            <div className="row">
              <div className="col-md-4 p-3">
                <Fade up>
                  <Link to="incubation" style={{ textDecoration: "none" }}>
                    <div className="iconHover p-5">
                      <p>
                        <img src={img2} width="100%" />
                      </p>
                      <p style={{ fontSize: "1.5em" }}>
                        Artificial Intelligence
                      </p>
                    </div>
                  </Link>
                </Fade>
              </div>

              <div className="col-md-4 p-3 mt-2">
                <Fade up>
                  <Link to="incubation" style={{ textDecoration: "none" }}>
                    <div className="iconHover p-5">
                      <p>
                        <i
                          style={{ fontSize: "100px" }}
                          class="fas fa-tractor"
                        ></i>
                      </p>
                      <p
                        style={{
                          fontSize: "1.5em",
                        }}
                      >
                        Agriculture
                      </p>
                    </div>
                  </Link>
                </Fade>
              </div>

              <div className="col-md-4 p-3">
                <Fade up>
                  <Link to="incubation" style={{ textDecoration: "none" }}>
                    <div className="iconHover p-5">
                      <p>
                        <img src={img3} width="100%" />
                      </p>
                      <p style={{ fontSize: "1.5em" }}>AR / VR</p>
                    </div>
                  </Link>
                </Fade>
              </div>

              <div className="col-md-4 p-3">
                <Fade up>
                  <Link to="incubation" style={{ textDecoration: "none" }}>
                    <div className="iconHover p-5">
                      <p>
                        <img src={img4} width="100%" />
                      </p>
                      <p style={{ fontSize: "1.5em" }}>Ecommerce</p>
                    </div>
                  </Link>
                </Fade>
              </div>

              <div className="col-md-4 p-3">
                <Fade up>
                  <Link to="incubation" style={{ textDecoration: "none" }}>
                    <div className="iconHover p-5">
                      <p>
                        <img src={img5} height="100%" />
                      </p>
                      <p style={{ fontSize: "1.5em" }}>IOT</p>
                    </div>
                  </Link>
                </Fade>
              </div>
              <div className="col-md-4 p-3">
                <Fade up>
                  <Link to="incubation" style={{ textDecoration: "none" }}>
                    <div className="iconHover p-5">
                      <p style={{ fontSize: "3.5em" }}>
                        <img src={img6} width="100%" />
                      </p>
                      <p style={{ fontSize: "1.5em" }}>Media & Marketing</p>
                    </div>
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        {/* Division END*/}

        {/* MENTORS  */}
        <div className="container my-5 py-5">
          <h2 className="text-left">Our Mentors</h2>
          <div className="row">
            <div className="col-md-4 p-5">
              <div className="mentorCard">
                <img src={img7} width="100%" />
                <div className="p-3">
                  <h5>Muhammad Ali Mughal</h5>
                  <p>Data Scientist</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 p-5">
              <div className="mentorCard">
                <img src={img9} width="100%" />
                <div className="p-3">
                  <h5>Zeeshan Hanif</h5>
                  <p>MEAN Stack</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 p-5">
              <div className="mentorCard">
                <img src={img8} width="100%" />
                <div className="p-3">
                  <h5>Muhammad Umair Khan</h5>
                  <p>Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MENTORS ENDS */}

        {/* EVENTS  */}

        <div className="container">
          <div className="row">
            <div className="col-md-8 img2 p-5 text-white my-5">
              <h1 className="text-left">UPCOMING EVENTS</h1>
              <div className="row">
                <div className="col-md-6 text-left py-5">
                  <h3>OCT 23</h3>
                  <h5>Web & Mobile Hackthon</h5>
                  <p>Are you a Developer ? Then come and join us .</p>
                  <p>9 am - 6:00 pm</p>
                </div>

                <div className="col-md-6 text-left py-5">
                  <h3>OCT 23</h3>
                  <h5>Web & Mobile Hackthon</h5>
                  <p>Are you a Developer ? Then come and join us .</p>
                  <p>9 am - 6:00 pm</p>
                </div>
              </div>

              <div className="text-right">
                <h4>View all</h4>
              </div>
            </div>

            <div className="col-md-4 py-5 px-5">
              <h1 className="text-left py-3">News</h1>
              <div className="border">
                <div className="p-3">
                  <h3>OCT 23</h3>
                  <p>Web & Mobile Hackthon</p>
                </div>
                <hr />
                <div className="p-3">
                  <h3>OCT 23</h3>
                  <p>Web & Mobile Hackthon</p>
                </div>
                <hr />
                <div className="p-3">
                  <h3>OCT 23</h3>
                  <p>Web & Mobile Hackthon</p>
                </div>
                <hr />
                <div>
                  <p>
                    View All <i class="fas fa-chevron-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EVENTS END */}
        <Footer />
      </div>
    );
  }
}
