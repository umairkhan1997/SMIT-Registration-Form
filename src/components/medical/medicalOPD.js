import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./medical.css";

export default class MedicalOPD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container pt-5 pb-5">
          <h1 className="medicalHeading">Consultant OPD</h1>
          <div className="row pt-5 pb-5">
            <div className="col-md-3 mt-3 mb-3">
              <div className="clinicCard text-left p-4 shadow">
                <h3 className="text-primary">General Surgery</h3>
                <p>Timing</p>
                <p className="DrName">Dr Name</p>
              </div>
            </div>
            <div className="col-md-3 mt-3 mb-3">
              <div className="clinicCard text-left p-4 shadow">
                <h3 className="text-primary">Eye specialist</h3>
                <p>Timing</p>
                <p className="DrName">Dr Name</p>
              </div>
            </div>
            <div className="col-md-3 mt-3 mb-3">
              <div className="clinicCard text-left p-4 shadow">
                <h3 className="text-primary">Gynaecologist</h3>
                <p>Timing</p>
                <p className="DrName">Dr Name</p>
              </div>
            </div>
            <div className="col-md-3 mt-3 mb-3">
              <div className="clinicCard text-left p-4 shadow">
                <h3 className="text-primary">Pediatrician</h3>
                <p>Timing</p>
                <p className="DrName">Dr Name</p>
              </div>
            </div>
            <div className="col-md-3 mt-3 mb-3">
              <div className="clinicCard text-left p-4 shadow">
                <h3 className="text-primary">Dermatologist</h3>
                <p>Timing</p>
                <p className="DrName">Dr Name</p>
              </div>
            </div>
            <div className="col-md-3 mt-3 mb-3">
              <div className="clinicCard text-left p-4 shadow">
                <h3 className="text-primary">Neurosurgeon</h3>
                <p>Timing</p>
                <p className="DrName">Dr Name</p>
              </div>
            </div>
            <div className="col-md-3 mt-3 mb-3">
              <div className="clinicCard text-left p-4 shadow">
                <h3 className="text-primary">Orthopaedic</h3>
                <p>Timing</p>
                <p className="DrName">Dr Name</p>
              </div>
            </div>
            <div className="col-md-3 mt-3 mb-3">
              <div className="clinicCard text-left p-4 shadow">
                <h3 className="text-primary">Cardiologist</h3>
                <p>Timing</p>
                <p className="DrName">Dr Name</p>
              </div>
            </div>
            <div className="col-md-3 mt-3 mb-3">
              <div className="clinicCard text-left p-4 shadow">
                <h3 className="text-primary">Psychiatrist</h3>
                <p>Timing</p>
                <p className="DrName">Dr Name</p>
              </div>
            </div>
          </div>
          <div className="row pt-5 pb-5">
            <div className="col-md-4 mt-3 mb-3">
              <div className="clinicCard text-left p-4 shadow">
                <h3 className="text-primary">Mother & Child Care Center</h3>
                <p>Timing</p>
                <p className="DrName">Dr Name</p>
              </div>
            </div>
            <div className="col-md-4 mt-3 mb-3">
              <div className="clinicCard text-left p-4 shadow">
                <h3 className="text-primary">Mobile Health Clinic</h3>
                <p>Timing</p>
                <p className="DrName">Dr Name</p>
              </div>
            </div>
            <div className="col-md-4 mt-3 mb-3">
              <div className="clinicCard text-left p-4 shadow">
                <h3 className="text-primary">Mobile Eye Care Services</h3>
                <p>Timing</p>
                <p className="DrName">Dr Name</p>
              </div>
            </div>
            <div className="col-md-4 mt-3 mb-3">
              <div className="clinicCard text-left p-4 shadow">
                <h3 className="text-primary">Medical Camps and Blood Donation</h3>
                <p>Timing</p>
                <p className="DrName">Dr Name</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}
