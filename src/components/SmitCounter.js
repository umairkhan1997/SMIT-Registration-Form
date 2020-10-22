import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import CountUp from "react-countup";
import "../App.css";
import Zoom from "react-reveal/Zoom";
import lab from "../images/lab.jpg";

export default class ServiceCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="smitCounter mt-5 mb-5 bg-image">
        <div
          className="pt-5 pb-5"
          style={{ backgroundColor: "rgba(0, 0, 0,.7)" }}
        >
          <div className="container p-5">
            <div className="row text-white">
              <div className="col-md-4 p-3">
                <div className="achieve p-3">
                  <Zoom>
                    <div className="p-3">
                      <p style={{ fontSize: "2em" }}>No Of Trained Students</p>
                      <CountUp
                        style={{ fontSize: "2.5em" }}
                        start={100000}
                        end={125000}
                        duration={4}
                      />
                    </div>
                  </Zoom>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="p-3 achieve">
                  <Zoom>
                    <div className="p-3">
                      <p style={{ fontSize: "2em" }}>
                        Number Of Enrolled Students
                      </p>
                      <CountUp
                        style={{ fontSize: "2.5em" }}
                        start={10000}
                        end={55000}
                        duration={4}
                      />
                    </div>
                  </Zoom>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="p-3 achieve">
                  <Zoom>
                    <div className="p-3">
                      <p style={{ fontSize: "2em" }}>Number Of Courses</p>
                      <CountUp
                        style={{ fontSize: "2.5em" }}
                        start={1}
                        end={20}
                        duration={4}
                      />
                    </div>
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
