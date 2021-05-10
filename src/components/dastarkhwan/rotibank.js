import React from "react";
import Fade from "react-reveal/Fade";
import "./dastarkhwan.css";
import roti from "../../images/rotibank.jpg";
import mobiledastarkhwan from "../../images/mobileDastarkhwan.jpg";

export default class RotiBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-6 border-right border-primary pt-4 pb-5 pr-5 pl-5">
              <Fade right>
                <div>
                  <div className="">
                    <h3
                      className="color font-weight-bold mt-4"
                    >
                      Saylani Roti Bank
                    </h3>
                  </div>
                  <p className="text-left text-muted font-weight-bold">
                    Saylani is providing pack food to deserving and hungry
                    peoples for the first time in Pakistan through “SAYLANI ROTI
                    BANK” where anyone can get the food for their families from
                    the counter of Roti Bank.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="col-md-6  p-5">
              <Fade left>
                <div>
                  <img className="roundImage" src={roti} width="100%" />
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-6 p-5 border-right border-primary">
              <Fade right>
                <div>
                  <img
                    className="roundImage"
                    src={mobiledastarkhwan}
                    width="100%"
                  />
                </div>
              </Fade>
            </div>
            <div className="col-md-6 pt-4 pb-5 pr-5 pl-5">
              <Fade left>
                <div>
                  <div>
                    <h3
                      className="color font-weight-bold mt-4"
                    // style={{ color: "#1371b8" }}
                    >
                      Saylani Mobile Dastarkhwan
                    </h3>
                  </div>
                  <p className="text-left text-muted font-weight-bold">
                    In an effort to go the extra mile in the service of
                    humanity, we don’t wait for the hungry to come to us, but
                    Saylani Welfare International Trust outreaches the hungry
                    itself through Saylani Mobile Dastarkhawan in far off
                    corners such as less privilege and villages areas. Thousands
                    of poor people are facilitated by this service and are
                    provided fresh and healthy meals daily.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
