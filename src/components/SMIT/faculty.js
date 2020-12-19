import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";
import zeeshan from "../../images/zeeshan.png";
import ziakhan from "../../images/ziaKhan.png";
import alimughal from "../../images/aliMughal.png";
import Fade from "react-reveal/Fade";
export default class Faculty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="displayheading">
            <h2
              style={{ color: "#1371b8" }}
              className="mt-5 ml-4 font-weight-bold"
            >
              Faculty
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="text-left pb-3">
            <div>
              <Fade left>
                <img className="facultyImg " src={ziakhan} />
              </Fade>
              <Fade right>
                <div className="facultyName p-3 pt-5">
                  <h3 style={{ color: "#1371b8" }}>Sir Zia Khan</h3>
                  <p className="text-muted">(Faculty Head)</p>
                </div>
              </Fade>
            </div>
            <div className="facultyContent ml-5 pt-5 p-3 rounded shadow">
              <Fade right>
                <p>
                  Building Internet-Scale Multi-Cloud Global Apps | Software
                  Developer & Architect | Innovation Coach & Mentor I believe
                  that technology and software can help elevate the human
                  condition. I have spent my life developing global
                  internet-scale applications and mentoring others to do the
                  same. Have more than twenty years of experience in software
                  architecture, design, development, implementation, and
                  integration.
                </p>
              </Fade>
            </div>
          </div>
          
          <div className="text-left pt-3 pb-3">
            <div>
              <Fade left>
                <img className="facultyImg " src={alimughal} />
              </Fade>
              <Fade right>
                <div className="facultyName p-3 pt-5">
                  <h2 style={{ color: "#1371b8" }} className="font-weight-bold">
                    Muhammad Ali Mughal
                  </h2>
                  <p className="text-muted">(Manager SMIT)</p>
                </div>
              </Fade>
            </div>
            <div className="facultyContent  ml-5 pt-5 p-3 rounded shadow">
              <Fade right>
                <p>
                  I initiated working when I was in 7th standard and never stop.
                  Today Alhamdullillah I am working as Lead and Manager and
                  Admin Lead in Saylani Mass IT Training and Saylani Incubation
                  Center along with Admin Lead of PIAIC along with Lecturer in
                  Benazir Bhutto Shaheed University.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
