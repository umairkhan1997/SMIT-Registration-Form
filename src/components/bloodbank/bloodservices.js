import React from "react";
import "./blood.css";

export default class BloodBankAims extends React.Component {
  render() {
    return (
      <div id="bloodBankServices">
        <div className="container pt-5 pb-5">
          <div className="">
            <h3 className="dataHeading" style={{ textDecoration: 'none' }}><b>Blood Bank Services</b></h3>
          </div>
          <div className="row">
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5 text-muted font-weight-bold">Diagnostic Services</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5 text-muted font-weight-bold">Blood Bank</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5 text-muted font-weight-bold">Thalessimia Care</div>
            </div>

            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5 text-muted font-weight-bold">Peads Heamatologist</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5 text-muted font-weight-bold">Child Specialist</div>
            </div>

            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5 text-muted font-weight-bold">Effective Screening</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5 text-muted font-weight-bold">Medication</div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5 text-muted font-weight-bold">
                Hepatitis B Vaccination
              </div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5 text-muted font-weight-bold">
                Blood Donation Mobile Services
              </div>
            </div>
            <div className="col-md-3 p-3 mt-3 mb-3">
              <div className="bloodServiceCard p-5 text-muted font-weight-bold">
                Bloods and its components Transfusion
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
