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
        </div>
        <div className="container text-white pt-5 pb-5">
          <div className="row text-white pt-5 pb-5">
            <div
              style={{ backgroundColor: "rgb(120 185 255)" }}
              className="col-md-4"
            >
              <div
                data-toggle="modal"
                data-target="#staticBackdrop"
                className="p-4"
              >
                <p style={{ fontSize: "2.5em" }}>
                <i class="fas fa-tint"></i>
                </p>
                <h4>Hijama</h4>
              </div>
            </div>
            <div
              style={{ backgroundColor: "rgb(69 159 255)" }}
              className="col-md-4"
            >
              <div
                data-toggle="modal"
                data-target="#staticBackdrop"
                className="p-4"
              >
                <p style={{ fontSize: "2.5em" }}>
                  <i class="fas fa-mortar-pestle"></i>
                </p>
                <h4>Homeaopathic</h4>
              </div>
            </div>
            <div
              style={{ backgroundColor: "rgb(0 123 255)" }}
              className="col-md-4"
            >
              <div
                data-toggle="modal"
                data-target="#staticBackdrop"
                className="p-4"
              >
                <p style={{ fontSize: "2.5em" }}>
                  <i class="fab fa-pagelines"></i>
                </p>
                <h4>Hikmat</h4>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "rgb(245 248 255)" }}
          className="container-fluid"
        >
          <div className="container">
            <div className="row pt-5 pb-5">
              <div className="col-md-3  pt-2 pb-2">
                <div
                  className="sevicesCard p-4"
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                >
                  <h4>Mother & Child Care Center</h4>
                </div>
              </div>
              <div
                class="modal fade"
                id="staticBackdrop"
                data-backdrop="static"
                data-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        Mother & Child Care Center
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body text-left">
                      <ul>
                        <li>Centers established in Karachi and Hyderabad</li>
                        <li>
                          Provide quality health care services to deserving
                          Mother & Children.
                        </li>
                        <li>
                          Provide life saving vaccinations to Mother & Children
                        </li>
                        <li>
                          Treated more than 650,000 Patients in almost all the
                          fields of medicine including minor and major
                          surgeries.
                        </li>
                      </ul>
                      <hr />
                      <div>
                        <div className="row text-center">
                          <div className="col-md-4">
                            <p className="text-primary">
                              <i class="fas fa-clinic-medical"></i>
                            </p>
                            <p>Bahadurabad Head Office</p>
                          </div>
                          <div className="col-md-4">
                            <p>
                              <i class="fas fa-clinic-medical"></i>
                            </p>
                            <p>Gulistan-e-Johar</p>
                          </div>
                          <div className="col-md-4">
                            <p>
                              <i class="fas fa-clinic-medical"></i>
                            </p>
                            <p>Numaish Chowrangi</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Understood
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 pt-2 pb-2">
                <div
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                  className="sevicesCard p-4"
                >
                  <h4>Mobile Health Clinic</h4>
                </div>
              </div>
              <div className="col-md-3 pt-2 pb-2">
                <div
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                  className="sevicesCard p-4"
                >
                  <h4>Mobile Eye Care Services</h4>
                </div>
              </div>
              <div className="col-md-3 pt-2 pb-2">
                <div
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                  className="sevicesCard p-4"
                >
                  <h4>Medical Camps & Blood Donation</h4>
                </div>
              </div>
              <div className="col-md-3 pt-2 pb-2">
                <div
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                  className="sevicesCard p-4"
                >
                  <h4>Surgery with Medication and Glasses</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
