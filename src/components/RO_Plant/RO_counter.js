import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import CountUp from "react-countup";
import "./ro.css";
import Fade from "react-reveal";

export default class ROCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 p-3">
              <h4 className="counterHeading text-center">Installed RO Plants</h4>
              <Fade down>
                <div className="roCounter p-4 text-center">
                  <CountUp
                    style={{ fontSize: "2.5em" }}
                    start={10}
                    end={60}
                    duration={4}
                  />
                </div>
              </Fade>
            </div>
            <div className="col-md-3 col-sm-6 p-3">
              <h4 className="counterHeading text-center">Under Construction</h4>
              <Fade down>
                <div className="roCounter p-4  text-center">
                  <CountUp
                    style={{ fontSize: "2.5em" }}
                    start={0}
                    end={18}
                    duration={4}
                  />
                </div>
              </Fade>
            </div>
            <div className="col-md-3 col-sm-6 p-3">
              <h4 className="counterHeading text-center">Dug Water Well</h4>
              <Fade down>
                <div className="roCounter p-4 text-center">
                  <CountUp
                    style={{ fontSize: "2.5em" }}
                    start={0}
                    end={200}
                    duration={4}
                  />
                </div>
              </Fade>
            </div>
            <div className="col-md-3 col-sm-6 p-3">
              <h4 className="counterHeading text-center">Water Chillers</h4>
              <Fade down>
                <div className="roCounter p-4 text-center">
                  <CountUp
                    style={{ fontSize: "2.5em" }}
                    start={100}
                    end={1200}
                    duration={4}
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
