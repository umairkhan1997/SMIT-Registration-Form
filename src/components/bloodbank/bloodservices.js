import React from "react";
import "./blood.css";

export default class BloodBankAims extends React.Component {
  render() {
    return (
      <div id="bloodBankServices">
        <div className="container pt-5 pb-5">
          <div className="displayheading">
            <h2 className="dataHeading">Blood Bank Services</h2>
          </div>
          <div className="row">
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5">Diagnostic Services</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5">Blood Bank</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5">Thalessimia Care</div>
            </div>

            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5">Peads Heamatologist</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5">Child Specialist</div>
            </div>

            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5">Effective Screening</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5">Medication</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5">
                Hepatitis B Vaccination
              </div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5">
                Blood Donation Mobile Services
              </div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5">
                Bloods and its components Transfusion
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
