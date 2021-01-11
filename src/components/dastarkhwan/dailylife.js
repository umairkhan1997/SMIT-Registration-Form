import React from "react";
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
        <div className="full">
          <div className="container p-5">
            <div className="row">
              <div className="col-md-6">
                <div className="p-5">
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
              <div className="col-md-6 py-5">
                <iframe
                  className="video"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/gpmoq-Jl9vw"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="allowfullscreen"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
