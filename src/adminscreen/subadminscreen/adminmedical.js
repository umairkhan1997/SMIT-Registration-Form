import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import image from "../../images/Dr.jpg";
export default class MedicalAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3 bg-light text-primary shadow p-5">
            <div className="p-4">
              <img src={logo} width="100%" />
            </div>
            <div className="p-4">
              <ul>
                <li>Main Image</li>
                <li>services</li>
                <li>Consultant OPD</li>
                <li>Clinic image</li>
                <li>Internship Form</li>
                <li>Contact Form</li>
              </ul>
            </div>
          </div>
          <div
            style={{ height: "100vh", overflow: "scroll" }}
            className="col-md-9"
          >
            <div className="container">
              {/* Main Image */}
              <div className="p-5 content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <h3>We Serve Humanity</h3>
                <img width="100%" src={image} />
              </div>

              {/* Services */}
              <div className="container pt-5 pb-5">
                <div className="pt-5 pb-5">
                  <h1 className="medicalHeading">Over Medical Services</h1>
                </div>
                <div className="row">
                  <div className="col-md-2 col-sm-4 mt-5 mb-5 content">
                    <div className="delete">
                      <button>
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </div>
                    <div className="shadow">
                      <div className="bg-white p-4 text-primary">
                        <i
                          style={{ fontSize: "2.5em" }}
                          class="fas fa-tooth"
                        ></i>
                      </div>
                      <div className="text-white bg-primary p-2">Dental</div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-4 mt-5 mb-5 content">
                    <div className="delete">
                      <button>
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </div>
                    <div className="shadow">
                      <div className="bg-white p-4 text-primary">
                        <i
                          style={{ fontSize: "2.5em" }}
                          class="fas fa-pills"
                        ></i>
                      </div>
                      <div className="text-white bg-primary p-2">Pharmacy</div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-4 mt-5 mb-5 content">
                    <div className="delete">
                      <button>
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </div>
                    <div className="shadow">
                      <div className="bg-white p-4 text-primary">
                        <i
                          style={{ fontSize: "2.5em" }}
                          class="fas fa-x-ray"
                        ></i>
                      </div>
                      <div className="text-white bg-primary p-2">X-Ray</div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-4 mt-5 mb-5 content">
                    <div className="delete">
                      <button>
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </div>
                    <div className="shadow">
                      <div className="bg-white p-4 text-primary">
                        <i
                          style={{ fontSize: "2.5em" }}
                          class="fas fa-stethoscope"
                        ></i>
                      </div>
                      <div className="text-white bg-primary p-2">
                        General OPD
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-4 mt-5 mb-5 content">
                    <div className="delete">
                      <button>
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </div>
                    <div className="shadow">
                      <div className="bg-white p-4 text-primary">
                        <i
                          style={{ fontSize: "2.5em" }}
                          class="fas fa-vial"
                        ></i>
                      </div>
                      <div className="text-white bg-primary p-2">
                        Laboratory
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-4 mt-5 mb-5 content">
                    <div className="delete">
                      <button>
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </div>
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
                  <div className="col-md-2 col-sm-4 mt-5 mb-5 content">
                    <div className="delete">
                      <button>
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </div>
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
                  <div className="col-md-2 col-sm-4 mt-5 mb-5 content">
                    <div className="delete">
                      <button>
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </div>
                    <div className="shadow">
                      <div className="bg-white p-4 text-primary">
                        <i
                          style={{ fontSize: "2.5em" }}
                          class="fas fa-syringe"
                        ></i>
                      </div>
                      <div className="text-white bg-primary p-2">Vaccine</div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-4 mt-5 mb-5 content">
                    <div className="delete">
                      <button>
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </div>
                    <div className="shadow">
                      <div className="bg-white p-4 text-primary">
                        <i
                          style={{ fontSize: "2.5em" }}
                          class="fas fa-crutch"
                        ></i>
                      </div>
                      <div className="text-white bg-primary p-2">
                        Equipement
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-4 mt-5 mb-5 content">
                    <div className="delete">
                      <button>
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </div>
                    <div className="shadow">
                      <div className="bg-white p-4 text-primary">
                        <i
                          style={{ fontSize: "2.5em" }}
                          class="fas fa-low-vision"
                        ></i>
                      </div>
                      <div className="text-white bg-primary p-2">
                        Eye Clinic
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultant OPD */}
              <div className="container py-5">
                <h1 className="medicalHeading">Consultant OPD</h1>
                <div className="row pt-5 pb-5">
                  <div className="col-md-3 mt-3 mb-3">
                    <div className="clinicCard text-left p-4 shadow content">
                      <div className="delete">
                        <button>
                          <i class="fas fa-pen"></i>
                        </button>
                        <button>
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </div>
                      <h3 className="text-primary">General Surgery</h3>
                      <p>Timing</p>
                      <p className="DrName">Dr Name</p>
                    </div>
                  </div>
                  <div className="col-md-3 mt-3 mb-3">
                    <div className="clinicCard text-left p-4 shadow content">
                      <div className="delete">
                        <button>
                          <i class="fas fa-pen"></i>
                        </button>
                        <button>
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </div>
                      <h3 className="text-primary">Eye specialist</h3>
                      <p>Timing</p>
                      <p className="DrName">Dr Name</p>
                    </div>
                  </div>
                  <div className="col-md-3 mt-3 mb-3">
                    <div className="clinicCard text-left p-4 shadow content">
                      <div className="delete">
                        <button>
                          <i class="fas fa-pen"></i>
                        </button>
                        <button>
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </div>
                      <h3 className="text-primary">Gynaecologist</h3>
                      <p>Timing</p>
                      <p className="DrName">Dr Name</p>
                    </div>
                  </div>
                  <div className="col-md-3 mt-3 mb-3">
                    <div className="clinicCard text-left p-4 shadow content">
                      <div className="delete">
                        <button>
                          <i class="fas fa-pen"></i>
                        </button>
                        <button>
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </div>
                      <h3 className="text-primary">Pediatrician</h3>
                      <p>Timing</p>
                      <p className="DrName">Dr Name</p>
                    </div>
                  </div>
                  <div className="col-md-3 mt-3 mb-3">
                    <div className="clinicCard text-left p-4 shadow content">
                      <div className="delete">
                        <button>
                          <i class="fas fa-pen"></i>
                        </button>
                        <button>
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </div>
                      <h3 className="text-primary">Dermatologist</h3>
                      <p>Timing</p>
                      <p className="DrName">Dr Name</p>
                    </div>
                  </div>
                  <div className="col-md-3 mt-3 mb-3">
                    <div className="clinicCard text-left p-4 shadow content">
                      <div className="delete">
                        <button>
                          <i class="fas fa-pen"></i>
                        </button>
                        <button>
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </div>
                      <h3 className="text-primary">Neurosurgeon</h3>
                      <p>Timing</p>
                      <p className="DrName">Dr Name</p>
                    </div>
                  </div>
                  <div className="col-md-3 mt-3 mb-3">
                    <div className="clinicCard text-left p-4 shadow content">
                      <div className="delete">
                        <button>
                          <i class="fas fa-pen"></i>
                        </button>
                        <button>
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </div>
                      <h3 className="text-primary">Orthopaedic</h3>
                      <p>Timing</p>
                      <p className="DrName">Dr Name</p>
                    </div>
                  </div>
                  <div className="col-md-3 mt-3 mb-3">
                    <div className="clinicCard text-left p-4 shadow content">
                      <div className="delete">
                        <button>
                          <i class="fas fa-pen"></i>
                        </button>
                        <button>
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </div>
                      <h3 className="text-primary">Cardiologist</h3>
                      <p>Timing</p>
                      <p className="DrName">Dr Name</p>
                    </div>
                  </div>
                  <div className="col-md-3 mt-3 mb-3">
                    <div className="clinicCard text-left p-4 shadow content">
                      <div className="delete">
                        <button>
                          <i class="fas fa-pen"></i>
                        </button>
                        <button>
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </div>
                      <h3 className="text-primary">Psychiatrist</h3>
                      <p>Timing</p>
                      <p className="DrName">Dr Name</p>
                    </div>
                  </div>
                  <div className="col-md-3 mt-3 mb-3">
                    <div className="clinicCard text-center p-4 shadow">
                      <button className="roundadd">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hijama, Homeo Clinic, Hikmat */}
              <div className='container py-'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
