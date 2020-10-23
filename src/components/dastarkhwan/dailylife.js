import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Zoom from "react-reveal/Zoom";
import "./dastarkhwan.css";
import CountUp from "react-countup";

export default class Dailyserve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="full d-flex align-items-center">
          <div className="container text-white p-5">
            <h1 className="largeHeading">
              Saylani Welfare Trust is serving
              <span className="largeCounter">
                <Zoom left>
                  <CountUp start={1000} end={150000} duration={4} />
                </Zoom>
              </span>
              people on daily basis.
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
