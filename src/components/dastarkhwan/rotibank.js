import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from "react-reveal/Fade";
import "./dastarkhwan.css";
import CountUp from "react-countup";
import primeMinister from "../../images/primeMinister.jpg";
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
            <div className="col-md-6 border-right border-primary p-5">
              <Fade right>
                <div>
                  <h2 className="Heading">Saylani Roti Bank</h2>
                  <p className="text-left">
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
            <div className="col-md-6 p-5">
              <Fade left>
                <div>
                  <h2 className="Heading">Saylani Mobile Dastarkhwan</h2>
                  <p className="text-left">
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
