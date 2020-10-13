import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";

export default class MedicalServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div
          style={{ backgroundColor: "#f5f8ff" }}
          className="container-fluid pt-5 pb-5"
        >
          <div className="container pt-5 pb-5">
            <div className="pt-5 pb-5">
              <h1 className="medicalHeading">Over Medical Services</h1>
            </div>
            <div className="row">
              <div className="col-md-2 col-sm-4 mt-5 mb-5">
                <div className="shadow">
                  <div className="bg-white p-4 text-primary">
                    <i style={{ fontSize: "2.5em" }} class="fas fa-tooth"></i>
                  </div>
                  <div className="text-white bg-primary p-2">Dental</div>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 mt-5 mb-5">
                <div className="shadow">
                  <div className="bg-white p-4 text-primary">
                    <i style={{ fontSize: "2.5em" }} class="fas fa-pills"></i>
                  </div>
                  <div className="text-white bg-primary p-2">Pharmacy</div>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 mt-5 mb-5">
                <div className="shadow">
                  <div className="bg-white p-4 text-primary">
                    <i style={{ fontSize: "2.5em" }} class="fas fa-x-ray"></i>
                  </div>
                  <div className="text-white bg-primary p-2">X-Ray</div>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 mt-5 mb-5">
                <div className="shadow">
                  <div className="bg-white p-4 text-primary">
                    <i
                      style={{ fontSize: "2.5em" }}
                      class="fas fa-stethoscope"
                    ></i>
                  </div>
                  <div className="text-white bg-primary p-2">General OPD</div>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 mt-5 mb-5">
                <div className="shadow">
                  <div className="bg-white p-4 text-primary">
                    <i style={{ fontSize: "2.5em" }} class="fas fa-vial"></i>
                  </div>
                  <div className="text-white bg-primary p-2">Laboratory</div>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 mt-5 mb-5">
                <div className="shadow">
                  <div className="bg-white p-4 text-primary">
                    <i
                      style={{ fontSize: "2.5em" }}
                      class="fas fa-hands-helping"
                    ></i>
                  </div>
                  <div className="text-white bg-primary p-2">
                    Patient Welfare
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 mt-5 mb-5">
                <div className="shadow">
                  <div className="bg-white p-4 text-primary">
                    <i
                      style={{ fontSize: "2.5em" }}
                      class="fas fa-first-aid"
                    ></i>
                  </div>
                  <div className="text-white bg-primary p-2">First Aid</div>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 mt-5 mb-5">
                <div className="shadow">
                  <div className="bg-white p-4 text-primary">
                  <i style={{ fontSize: "2.5em" }} class="fas fa-syringe"></i>
                  </div>
                  <div className="text-white bg-primary p-2">Vaccine</div>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 mt-5 mb-5">
                <div className="shadow">
                  <div className="bg-white p-4 text-primary">
                  <i style={{ fontSize: "2.5em" }} class="fas fa-crutch"></i>
                  </div>
                  <div className="text-white bg-primary p-2">Medical Equipement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
