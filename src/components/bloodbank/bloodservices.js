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
          <div className="displayheading">
            <h2>Blood Bank Services</h2>
          </div>
          <div className="row">
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">Diagnostic Services</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">Blood Bank</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">Thalessimia Care</div>
            </div>

            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">Peads Heamatologist</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">Child Specialist</div>
            </div>
           
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">Effective Screening</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">Medication</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">Hep B Vaccination</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">Blood Donation Mobile Services</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="shadow p-3">
                Bloods and its components Transfusion
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
