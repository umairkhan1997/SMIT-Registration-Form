import React from "react";
import "./blood.css";

export default class BloodBankServices extends React.Component {
  render() {
    return (
      <div id="bloodBankAims">
        <div className="backImg bg-image">
          <div
            className="pt-5 pb-5"
            style={{ backgroundColor: "rgba(0,0,0,.5)" }}
          >
            <div className="container pt-5 pb-5">
              <div className="row">
                <div className="col-md-12 p-3">
                  <div
                    style={{ backgroundColor: "maroon" }}
                    className="aims text-white"
                  >
                    <div className=" p-5">
                      <h3>
                        Aims and objectives of Saylani Blood Bank & Thalassemia
                        Center
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-3">
                  <div className="aims">
                    <div className="p-5">
                      Providing awareness about Thalassemia.
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-3">
                  <div className="aims">
                    <div className=" p-5">
                      Thalassemia screening and diagnosis.
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-3">
                  <div className="aims">
                    <div className=" p-5">
                      Saylani Blood Bank & Thalassemia Center also aims to
                      provide CVS facilities to pregnant mothers with
                      thalassemia minor.
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-3">
                  <div className="aims p-5">
                    Screening performed by FDA & WHO approved analyzer and
                    reagents based on EISA, CLI, PCR and NAT tests.
                  </div>
                </div>
                <div className="col-md-6 p-3">
                  <div className="aims p-5">
                    Along with patient care, medical research is also a primary
                    focus of Saylani Blood Bank & Thalassemia Center. We aim to
                    conduct extensive research in the areas of thalassemia and
                    other blood related diseases in order to keep patients,
                    their families and the extended medical community abreast of
                    modern research & developments.
                  </div>
                </div>
                <div className="col-md-6 p-3">
                  <div className="aims p-5">
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
    );
  }
}
