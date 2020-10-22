import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";
import farrukh from "../../images/farrukh.jpg";
import nouman from "../../images/noumanYaqoob.jpg";
import kashif from "../../images/kashifSulaiman.jpg";
import raheel from "../../images/raheel.jpg";
import zeeshan from "../../images/zeeshanAnis.jpg";
import Fade from "react-reveal";

export default class SMITeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="Heading">Our Qualified Teacher</h1>
          <div className="row">
            <div className="col-md-4 pt-3 pb-3">
              <div
                style={{ backgroundImage: `url(${farrukh})` }}
                className="teacher"
              >
                <div className="p-5">
                  <Fade up>
                    <h2 className="p-3"> Sir Farrukh Khan</h2>
                    <p className="p-3">CCNA (Routing)</p>
                  </Fade>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-3 pb-3">
              <div
                style={{ backgroundImage: `url(${nouman})` }}
                className="teacher"
              >
                <div className="p-5">
                  <Fade up>
                    <h2 className="p-3">Nauman Yaqoob</h2>
                    <p className="p-3">Web and Mobile</p>
                  </Fade>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-3 pb-3">
              <div
                style={{ backgroundImage: `url(${kashif})` }}
                className="teacher"
              >
                <div className="p-5">
                  <Fade up>
                    <h2 className="p-3">Kashif Sulaiman</h2>
                    <p className="p-3">Web and Mobile</p>
                  </Fade>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-3 pb-3">
              <div
                style={{ backgroundImage: `url(${raheel})` }}
                className="teacher"
              >
                <div className="p-5">
                  <Fade up>
                    <h2 className="p-3">Sir Raheel Gulraiz</h2>
                    <p className="p-3">Graphic Designer</p>
                  </Fade>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-3 pb-3">
              <div
                style={{ backgroundImage: `url(${zeeshan})` }}
                className="teacher"
              >
                <div className="p-5">
                  <Fade up>
                    <h2 className="p-3">Sir Zeeshan Anis</h2>
                    <p className="p-3">Graphic Designer</p>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
