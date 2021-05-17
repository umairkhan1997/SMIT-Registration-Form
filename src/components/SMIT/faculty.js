import React from "react";
import "./SmitStyle.css";
import Fade from "react-reveal/Fade";
export default class Faculty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


    };
  }
  render() {
    return (
      <div id="smitFaculty" className="my-5 py-5">
        <div className="container">
          <div className="Heading">
            <h3 className="color"><b><u>FACULTY</u></b></h3>
          </div>
        </div>
        <div className="container">
          <div className="text-left pb-3">
            <div>
              <Fade left>
                <img
                  className="facultyImg "
                  src="https://res.cloudinary.com/di3ippvmb/image/upload/v1611386416/ziaKhan_wd3thj.png"
                  alt="Zia Khan"
                  title="Zia Khan"
                />
              </Fade>
              <Fade right>
                <div className="facultyName p-3 pt-5">
                  <h3 className="color"><b><u>Sir Zia Khan</u></b></h3>
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
                <img
                  className="facultyImg"
                  src="https://res.cloudinary.com/di3ippvmb/image/upload/v1620816822/11906728_10207983240963735_3037437866944121625_o_ual4v4.jpg"
                  alt="Muhammad Zunaib Afzal"
                  title="Muhammad Zunaib Afzal"
                />
              </Fade>
              <Fade right>
                <div className="facultyName p-3 pt-5">
                  <h2 className="color"><b><u>Zeeshan Hanif</u></b></h2>
                  <p className="text-muted">(Head of Software Development)</p>
                </div>
              </Fade>
            </div>
            <div className="facultyContent  ml-5 pt-5 p-3 rounded shadow">
              <Fade right>
                <p>
                  I have a decade of experience in developing Web and Mobile apps.
                  Extensive documented track record of building apps using the Java/J2EE platform,
                  MEAN Stack, HTML5 Hybrid mobile apps and Android Native apps.
                  I have over 10 years of experience in teaching software programming and Finance courses
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
