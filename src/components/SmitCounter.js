import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import CountUp from "react-countup";
import "../App.css";
import Zoom from "react-reveal/Zoom";

export default class ServiceCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="back bg-image">
        <div
          className="pt-5 pb-5"
          style={{ backgroundColor: "rgba(212, 60, 24,.5)" }}
        >
          <div className="container p-5">
            <div className="row text-white">
              <div className="col-md-3">
                <Zoom>
                  <div className="p-3">
                    <p style={{ fontSize: "3em" }}>
                      <i class="fas fa-laptop-code"></i>
                    </p>
                    <CountUp
                      style={{ fontSize: "2.5em" }}
                      start={1000}
                      end={15000}
                      duration={4}
                    />{" "}
                    <br />
                    Web and Mobile App Development
                  </div>
                </Zoom>
              </div>
              <div className="col-md-3">
                <Zoom>
                  <div className="p-3">
                    <p style={{ fontSize: "3em" }}>
                      <i class="fas fa-network-wired"></i>
                    </p>
                    <CountUp
                      style={{ fontSize: "2.5em" }}
                      start={1000}
                      end={8500}
                      duration={4}
                    />
                    <br />
                    Cisco Certified Networking Academy (CCNA)
                  </div>
                </Zoom>
              </div>
              <div className="col-md-3">
              <Zoom>
                <div className="p-3">
                  <p style={{ fontSize: "3em" }}>
                    <i class="fas fa-pen-nib"></i>
                  </p>
                  <CountUp
                    style={{ fontSize: "2.5em" }}
                    start={1000}
                    end={5349}
                    duration={4}
                  />{" "}
                  <br />
                  Graphic Designing 
                </div>
                </Zoom>
              </div>
              <div className="col-md-3">
              <Zoom>
                <div className="p-3">
                  <p style={{ fontSize: "3em" }}>
                    <i class="fab fa-windows"></i>
                  </p>
                  <CountUp
                    style={{ fontSize: "2.5em" }}
                    start={1000}
                    end={3000}
                    duration={4}
                  />
                  <br />
                 CCO & CCA
                </div>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
