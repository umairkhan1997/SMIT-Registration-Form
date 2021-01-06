import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./medical.css";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="py-5 text-white" style={{ backgroundColor: "#0066b3" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4 my-5">
                    <h4>Sindh Govt Hospital Malir Karachi</h4>
                    <hr />
                    <h2
                      style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                      className="shadow text-center p-2 rounded"
                    >
                      4,763
                    </h2>
                  </div>
                  <div className="col-md-4 my-5">
                    <h4>Civil Hospital Karachi</h4>
                    <hr />
                    <h2
                      style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                      className="shadow text-center p-2 rounded"
                    >
                      78,385
                    </h2>
                  </div>
                  <div className="col-md-4 my-5">
                    <h4>Civil & Bhitai Hospital Hyderabad</h4>
                    <hr />
                    <h2
                      style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                      className="shadow text-center p-2 rounded"
                    >
                      44,274
                    </h2>
                  </div>
                  <div className="col-md-4 my-5">
                    <h4>Allied Hospital Faisalabad</h4>
                    <hr />
                    <h2
                      style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                      className="shadow text-center p-2 rounded"
                    >
                      202,759
                    </h2>
                  </div>
                  <div className="col-md-4 my-5">
                    <h4>Bolan Medical Center Quetta</h4>
                    <hr />
                    <h2
                      style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                      className="shadow text-center p-2 rounded"
                    >
                      7,170
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-5">
                <h1>TOTAL BENEFICIARIES IN 2020</h1>
                <hr />
                <div className="rounded">
                  <h1
                    style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                    className="p-5 text-center shadow rounded"
                  >
                    848,028
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="Heading">
            <h2>Saylani Medical and Diagnostic Center</h2>
            <h3>Patient Treated in 2020</h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h4>Head Office</h4>
              <table className="medicalTable">
                <tr>
                  <td>General O.P.D</td>
                  <td>62383</td>
                </tr>
                <tr>
                  <td>Consultant O.P.D</td>
                  <td>64080</td>
                </tr>
                <tr>
                  <td>Dental Clinics</td>
                  <td>20316</td>
                </tr>
                <tr>
                  <td>Head Office Eye O.P.D</td>
                  <td>9437</td>
                </tr>
                <tr>
                  <td>Patient Welfare</td>
                  <td>27126</td>
                </tr>
                <tr>
                  <td>Hijama</td>
                  <td>5781</td>
                </tr>
                <tr>
                  <td>Homeopathic</td>
                  <td>3575</td>
                </tr>
                <tr>
                  <td>Hikmat</td>
                  <td>4739</td>
                </tr>
              </table>
            </div>

            <div className="col-md-4">
              <h4>Mother & Child Care</h4>
              <table className="medicalTable">
                <tr>
                  <td>Ramswami Karachi</td>
                  <td>39923</td>
                </tr>
                <tr>
                  <td>Diabetic Clininc Johar</td>
                  <td>31427</td>
                </tr>
                <tr>
                  <td>Old Sabzi Mandi</td>
                  <td>21528</td>
                </tr>
                <tr>
                  <td>Punjab Chowrangi</td>
                  <td>48955</td>
                </tr>
                <tr>
                  <td>Numaish Chowrangi</td>
                  <td>48955</td>
                </tr>
                <tr>
                  <td>Muhammadi Colony</td>
                  <td>11617</td>
                </tr>
                <tr>
                  <td>Baldia Town</td>
                  <td>8760</td>
                </tr>
                <tr>
                  <td>Hyderabad</td>
                  <td>19841</td>
                </tr>
              </table>
            </div>
            <div className="col-md-4">
              <h4>Saylani Blood Bank</h4>
              <table className="medicalTable">
                <tr>
                  <td>Child O.P.D</td>
                  <td>18853</td>
                </tr>
                <tr>
                  <td>Blood Transfusion</td>
                  <td>7166</td>
                </tr>
                <tr>
                  <td>Blood Donor</td>
                  <td>4099</td>
                </tr>
                <tr>
                  <td>Laboratory Test</td>
                  <td>48955</td>
                </tr>
              </table>
            </div>
            <div className="col-md-4">
              <h4>Medical Equipement Services Karachi</h4>
              <table className="medicalTable">
                <tr>
                  <td>Bahadurabad</td>
                  <td>2121</td>
                </tr>
                <tr>
                  <td>Gulistan-e-Johar</td>
                  <td>257</td>
                </tr>
                <tr>
                  <td>Cantt Station</td>
                  <td>3481</td>
                </tr>
                <tr>
                  <td>Numaish</td>
                  <td>2701</td>
                </tr>
              </table>
            </div>
            <div className="col-md-4">
              <h4>Hepatitis & Eye Camp</h4>
              <table className="medicalTable">
                <tr>
                  <td>Hepatitis B,C Test Camps</td>
                  <td>14850</td>
                </tr>
                <tr>
                  <td>Hepatitis B,C Vaccine Camps</td>
                  <td>7185</td>
                </tr>
                <tr>
                  <td>Eye O.P.D Camps</td>
                  <td>21676</td>
                </tr>
                <tr>
                  <td>Eye Surgeries Camps</td>
                  <td>5261</td>
                </tr>
                <tr>
                  <td>General O.P.D Camps</td>
                  <td>5052</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
