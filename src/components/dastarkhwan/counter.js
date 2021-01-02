import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Zoom from "react-reveal/Zoom";
import "./dastarkhwan.css";
import CountUp from "react-countup";

export default class LangarCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: "#0066b3" }} className="py-5">
          <div className="container text-white">
            <div>
              <div className="row">
                <div className="col-md-4">
                  <div className="p-3">
                    <h3>No Of Employee</h3>
                    <hr />
                    <h2
                      style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                      className="shadow text-center p-5 rounded"
                    >
                      <CountUp start={30} end={3500} duration={4} />
                    </h2>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3">
                    <h3>Branches</h3>
                    <hr />
                    <h2
                      style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                      className="shadow text-center p-5 rounded"
                    >
                      <CountUp start={0} end={197} duration={4} />
                    </h2>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3">
                    <h3>Cities</h3>
                    <hr />
                    <h2
                      style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                      className="shadow text-center p-5 rounded"
                    >
                      <CountUp start={0} end={12} duration={4} />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md-4 pt-5 pb-5">
                <div className="p-3">
                  <p className="Name">Employee</p>
                  <Zoom>
                    <div className="round">
                      <CountUp
                        style={{ fontSize: "2.5em" }}
                        start={30}
                        end={3500}
                        duration={4}
                      />
                    </div>
                  </Zoom>
                </div>
              </div>
              <div className="col-md-4 pt-5 pb-5">
                <div className="p-3">
                  <p className="Name">Branches</p>
                  <Zoom>
                    <div className="round">
                      <CountUp
                        style={{ fontSize: "2.5em" }}
                        start={0}
                        end={125}
                        duration={4}
                      />
                    </div>
                  </Zoom>
                </div>
              </div>
              <div className="col-md-4 pt-5 pb-5">
                <div className="p-3">
                  <p className="Name">Cities</p>
                  <Zoom>
                    <div className="round">
                      <CountUp
                        style={{ fontSize: "2.5em" }}
                        start={0}
                        end={12}
                        duration={4}
                      />
                    </div>
                  </Zoom>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
