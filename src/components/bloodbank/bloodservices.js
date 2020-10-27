import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./blood.css";
import logo from "../../images/logo.png";
import Fade from "react-reveal";

export default class BloodBankAims extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container pt-5 pb-5">
          <div className='p-5'>
            <h2 className='Heading'>Blood Bank Services</h2>
          </div>
          <div className="row">
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">laboratory Services</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">Blood Bank</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">Thalessimia Care</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">General Physicians</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">
                Bloods and its components Trandfusion
              </div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">Effective Screening</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">Medication</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
