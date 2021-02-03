import React from "react";
import QRCode from "qrcode.react";
import Zia from "../images/ziaKhan.png";
import logo from "../images/smitlogo.png";
import "jspdf/dist/polyfills.es.js";
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

class AdmitCard extends React.Component {
  state = {
    instruction: false,
    idCard: false,
  };

  componentDidMount() {
    this.setState({ idCard: true });
  }
  down(e) {
    e();
    this.setState({ idCard: false, instruction: true });
  }
  render() {
    return (
      <div>
        <div
          className="backgroundLight py-3"
          style={{ height: "100%", minHeight: "100vh" }}
        >
          <Pdf targetRef={ref} filename="smit_admit_card.pdf">
            {({ toPdf }) => (
              <button onClick={() => this.down(toPdf)}>Generate Pdf</button>
            )}
          </Pdf>
          {this.state.idCard ? (
            <div ref={ref} id="divIdToPrint">
              <div className="border m-5 p-3 inrollmentCard">
                <div className="row">
                  <div className=" col-md-3 py-3 text-left">
                    <img src={logo} width="110px" />
                  </div>
                  <div className="col-md-9 text-right p-3">
                    <h2>Enrollment Card</h2>
                    <h4 className="color">Graphic Designing</h4>
                  </div>
                </div>
                <div className=" d-flex justify-content-between">
                  <div>
                    <img
                      src="http://res.cloudinary.com/di3ippvmb/image/upload/v1612245855/cvvklygjlpgdy57fopja.png"
                      width="100px"
                    />
                  </div>
                  <div>
                    <QRCode
                      className="rounded shadow border"
                      value="786"
                      bgColor="#f5f8ff"
                      fgColor="#000"
                      includeMargin={true}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                </div>

                <p className="seperate"></p>
                <div>
                  <table className="table table-bordered">
                    <tr>
                      <th>Roll Number</th>
                      <th>Name</th>
                      <th>Father Name</th>
                      <th>Course</th>
                      <th>CNIC</th>
                    </tr>
                    <tr>
                      <td>13861</td>
                      <td>Basit Ahmed</td>
                      <td>Ayaz Ahmed</td>
                      <td>Web And Mobile</td>
                      <td>4210119738169</td>
                    </tr>
                  </table>
                </div>
                <div style={{ fontSize: ".9em" }} className="text-left p-0">
                  <ol>
                    <li>Please colour print of this Admit / ID card</li>
                    <li>
                      Attestation of ID / Admit Card is extremely mandatory from
                      Saylani Head Office, A-25 Bahadurabad Chowrangi.
                    </li>
                    <li>
                      No student will be allowed to enter in Entry Test without
                      attestation of Admit/ID Card
                    </li>
                    <li>
                      Bring CNIC and Last qualification marksheet/cert. (both
                      original) at the time of Entry Test
                    </li>
                  </ol>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="authorSign">
                    <p>Candidate Signature</p>
                  </div>
                  <div className="authorSign">
                    <p>Authorized Signature</p>
                  </div>
                </div>
                <div></div>
              </div>
              {/* =================== ID Card Start ========================= */}
              <div className="admitCardPaper p-0">
                <div style={{ backgroundColor: "#f5f8ff" }} className="admit">
                  <div className="cardHeader">
                    <img
                      style={{ position: "relative" }}
                      src={logo}
                      width="80px"
                    />
                  </div>
                  <p className="seperate"></p>
                  <div className="profileImg">
                    <img
                      style={{ position: "relative" }}
                      alt=""
                      className="profileImage"
                      width="110px"
                      height="110px"
                      src="http://res.cloudinary.com/di3ippvmb/image/upload/v1612245855/cvvklygjlpgdy57fopja.png"
                    />
                  </div>
                  <div className="shortDetail">
                    <p className="name numberHeading">Basit Ahmed</p>
                    <p className="rollNumber">786</p>
                    <p className="course">Graphic Designing</p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#1371b8",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                  className="admit text-white"
                >
                  <table className="cardTable backgroundLight">
                    <tr>
                      <td>Father Name:</td>
                      <td>Ayaz Ahmed</td>
                    </tr>
                    <tr>
                      <td>Course:</td>
                      <td>Graphic Designing</td>
                    </tr>
                    <tr>
                      <td>Roll No:</td>
                      <td>786</td>
                    </tr>
                    <tr>
                      <td>Batch:</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>CNIC:</td>
                      <td>4210119738169</td>
                    </tr>
                  </table>
                  <div
                    style={{ borderRadius: "6px" }}
                    className="backgroundLight d-flex justify-content-around align-items-end py-1"
                  >
                    <div>
                      <QRCode
                        className="rounded shadow border"
                        value="786"
                        bgColor="#fff"
                        fgColor="#000"
                        includeMargin={true}
                        style={{ width: "70px", height: "70px" }}
                      />
                    </div>
                    <div>
                      <p
                        style={{ fontSize: ".8em" }}
                        className="text-dark py-1 m-0 border-top border-dark"
                      >
                        Authorized Sign
                      </p>
                    </div>
                  </div>
                  <div className="text-white">
                    <p style={{ fontSize: ".8em" }} className="p-0 m-0">
                      <i className="fab fa-facebook-square"></i>{" "}
                      /SaylaniMassTraining
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {/* =================== ID Card end ========================= */}
          {this.state.instruction ? (
            <div className="container bg-white p-5 my-5 rounded shadow">
              <div className="p-5">
                <img src={logo} width="100px" />

                <div className="text-left">
                  <h3 className="p-2 py-5">
                    Form has been Successfully Your further details will be
                    publiched on facebook page{" "}
                    <a
                      target="_blank"
                      href="https://www.facebook.com/SaylaniMassTraining/"
                    >
                      Saylani Mass Training
                    </a>
                  </h3>
                  <ol>
                    <li>Please colour print of this Admit / ID card</li>
                    <li>
                      Attestation of ID / Admit Card is extremely mandatory from
                      Saylani Head Office, A-25 Bahadurabad Chowrangi.
                    </li>
                    <li>
                      No student will be allowed to enter in Entry Test without
                      attestation of Admit/ID Card
                    </li>
                    <li>
                      Bring CNIC and Last qualification marksheet/cert. (both
                      original) at the time of Entry Test
                    </li>
                  </ol>
                  <div className="color p-3" style={{ fontSize: "1.5em" }}>
                    <Link to="/smit">Go Back To Mass Training Page</Link>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default AdmitCard;
