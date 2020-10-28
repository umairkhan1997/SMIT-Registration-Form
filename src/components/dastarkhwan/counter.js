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
        <div className="bg-image pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pt-5 pb-5">
                <div className="p-3">
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
                  <p className="Name">Employee</p>
                </div>
              </div>
              <div className="col-md-4 pt-5 pb-5">
                <div className="p-3">
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
                  <p className="Name">Branches</p>
                </div>
              </div>
              <div className="col-md-4 pt-5 pb-5">
                <div className="p-3">
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
                  <p className="Name">Cities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
