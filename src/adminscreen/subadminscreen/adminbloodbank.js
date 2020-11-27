import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import image from "../../images/Dr.jpg";
export default class BloodBankAdmin extends React.Component {
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
            <div className='p-5'>
              <h2>Blood Bank</h2>
            </div>
            <div className="p-4">
              <ul>
                <li>Services</li>
                <li>Objectives</li>
              </ul>
            </div>
          </div>
          <div
            style={{ height: "100vh", overflow: "scroll" }}
            className="col-md-9"
          >
            <div className="container">
              <div className="container pt-5 pb-5">
                <div className="displayheading">
                  <h2>Blood Bank Services</h2>
                </div>
                <div className="row">
                  <div className="col-md-3 p-3 mt-3 mb-3 content">
                    <div className='delete'>
                      <button><i class="fas fa-pen"></i></button>
                    </div>
                    <div className="shadow p-3">Diagnostic Services</div>
                  </div>
                  <div className="col-md-3 p-3 mt-3 mb-3 content">
                    <div className='delete'>
                      <button><i class="fas fa-pen"></i></button>
                    </div>
                    <div className="shadow p-3">Blood Bank</div>
                  </div>
                  <div className="col-md-3 p-3 mt-3 mb-3 content">
                    <div className='delete'>
                      <button><i class="fas fa-pen"></i></button>
                    </div>
                    <div className="shadow p-3">Thalessimia Care</div>
                  </div>

                  <div className="col-md-3 p-3 mt-3 mb-3 content">
                    <div className='delete'>
                      <button><i class="fas fa-pen"></i></button>
                    </div>
                    <div className="shadow p-3">Peads Heamatologist</div>
                  </div>
                  <div className="col-md-3 p-3 mt-3 mb-3 content">
                    <div className='delete'>
                      <button><i class="fas fa-pen"></i></button>
                    </div>
                    <div className="shadow p-3">Child Specialist</div>
                  </div>

                  <div className="col-md-3 p-3 mt-3 mb-3 content">
                    <div className='delete'>
                      <button><i class="fas fa-pen"></i></button>
                    </div>
                    <div className="shadow p-3">Effective Screening</div>
                  </div>
                  <div className="col-md-3 p-3 mt-3 mb-3 content">
                    <div className='delete'>
                      <button><i class="fas fa-pen"></i></button>
                    </div>
                    <div className="shadow p-3">Medication</div>
                  </div>
                  <div className="col-md-3 p-3 mt-3 mb-3 content">
                    <div className='delete'>
                      <button><i class="fas fa-pen"></i></button>
                    </div>
                    <div className="shadow p-3">Hep B Vaccination</div>
                  </div>
                  <div className="col-md-3 p-3 mt-3 mb-3 content">
                    <div className='delete'>
                      <button><i class="fas fa-pen"></i></button>
                    </div>
                    <div className="shadow p-3">Blood Donation Mobile Services</div>
                  </div>
                  <div className="col-md-3 p-3 mt-3 mb-3 content">
                    <div className='delete'>
                      <button><i class="fas fa-pen"></i></button>
                    </div>
                    <div className="shadow p-3">
                      Bloods and its components Transfusion
              </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='container'>
              <div className="container pt-5 pb-5">
                <div className="row">
                  <div className="col-md-12 p-3">
                    <div className="aims bg-primary text-white content">
                      <div className='delete'>
                        <button><i class="fas fa-pen"></i></button>
                      </div>
                      <div className=" p-5">
                        <h3>
                          Aims and objectives of Saylani Blood Bank & Thalassemia
                          Center
                      </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 p-3">
                    <div className="aims content">
                      <div className='delete'>
                        <button><i class="fas fa-pen"></i></button>
                      </div>
                      <div className=" p-5">
                        Providing awareness about Thalassemia.
                    </div>
                    </div>
                  </div>
                  <div className="col-md-6 p-3">
                    <div className="aims content">
                      <div className='delete'>
                        <button><i class="fas fa-pen"></i></button>
                      </div>
                      <div className=" p-5">
                        Thalassemia screening and diagnosis.
                    </div>
                    </div>
                  </div>
                  <div className="col-md-6 p-3">
                    <div className="aims content">
                      <div className='delete'>
                        <button><i class="fas fa-pen"></i></button>
                      </div>
                      <div className=" p-5">
                        Saylani Blood Bank & Thalassemia Center also aims to
                        provide CVS facilities to pregnant mothers with
                        thalassemia minor.
                    </div>
                    </div>
                  </div>
                  <div className="col-md-6 p-3">
                    <div className="aims p-5 content">
                      <div className='delete'>
                        <button><i class="fas fa-pen"></i></button>
                      </div>
                      Screening performed by FDA & WHO approved analyzer and
                      reagents based on EISA, CLI, PCR and NAT tests.
                  </div>
                  </div>
                  <div className="col-md-6 p-3">
                    <div className="aims p-5 content">
                      <div className='delete'>
                        <button><i class="fas fa-pen"></i></button>
                      </div>
                      Along with patient care, medical research is also a primary
                      focus of Saylani Blood Bank & Thalassemia Center. We aim to
                      conduct extensive research in the areas of thalassemia and
                      other blood related diseases in order to keep patients,
                      their families and the extended medical community abreast of
                      modern research & developments.
                  </div>
                  </div>
                  <div className="col-md-6 p-3">
                    <div className="aims p-5 content">
                      <div className='delete'>
                        <button><i class="fas fa-pen"></i></button>
                      </div>
                      Thalassemic patients need post transfusion chelation therapy
                      (Removing iron from the body). This highly expensive therapy
                      is also provided completely free of cost to patients.
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}