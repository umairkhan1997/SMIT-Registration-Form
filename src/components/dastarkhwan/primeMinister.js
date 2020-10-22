import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Zoom from "react-reveal/Zoom";
import "./dastarkhwan.css";
import CountUp from "react-countup";
import primeMinister from "../../images/primeMinister.jpg";

export default class PrimeMinister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container mt-5 mb-5">
          <div className="row p-5">
            <div className="col-md-6">
              <img className="roundImage" src={primeMinister} width="100%" />
            </div>
            <div className="col-md-6">
              <h2 className="Heading">
                Honorable Prime Minister Imran Khan, inaugurated the Islamabad
                Langar Khana
              </h2>
              <p>Over Target is to open 112 more langer Khana</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
