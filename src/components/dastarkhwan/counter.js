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
        <div className="bg-image">
          <div className="container">
            <div className="dataTable">
              <div className='p-3'><h2>Data Table</h2></div>
              <table className="showTable" style={{ width: "100%" }}>
                <tr>
                  <td>No Of Employee</td>
                  <td>3500</td>
                </tr>
                <tr>
                  <td>Branches</td>
                  <td>125</td>
                </tr>
                <tr>
                  <td>Cities</td>
                  <td>12</td>
                </tr>
              </table>
            </div>
            <div className="row">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
