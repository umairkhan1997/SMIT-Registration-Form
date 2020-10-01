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
                      <i class="fas fa-utensils"></i>
                    </p>
                    <CountUp
                      style={{ fontSize: "2.5em" }}
                      start={100000}
                      end={150000}
                      duration={4}
                    />{" "}
                    <br />
                    Daily Dastarkhwan (Monthly)
                  </div>
                </Zoom>
              </div>
              <div className="col-md-3">
                <Zoom>
                  <div className="p-3">
                    <p style={{ fontSize: "3em" }}>
                      <i class="fas fa-user-friends"></i>
                    </p>
                    <CountUp
                      style={{ fontSize: "2.5em" }}
                      start={1000}
                      end={8500}
                      duration={4}
                    />
                    <br />
                    Family Adoption (Monthly)
                  </div>
                </Zoom>
              </div>
              <div className="col-md-3">
              <Zoom>
                <div className="p-3">
                  <p style={{ fontSize: "3em" }}>
                    <i class="fas fa-user-md"></i>
                  </p>
                  <CountUp
                    style={{ fontSize: "2.5em" }}
                    start={10000}
                    end={53749}
                    duration={4}
                  />{" "}
                  <br />
                  Medical (Monthly)
                </div>
                </Zoom>
              </div>
              <div className="col-md-3">
              <Zoom>
                <div className="p-3">
                  <p style={{ fontSize: "3em" }}>
                    <i class="fas fa-user-graduate"></i>
                  </p>
                  <CountUp
                    style={{ fontSize: "2.5em" }}
                    start={100000}
                    end={180000}
                    duration={4}
                  />
                  <br />
                  Education (Monthly)
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
