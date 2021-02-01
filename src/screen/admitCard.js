import React from "react";
import QRCode from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Zia from "../images/ziaKhan.png";
import logo from "../images/smitlogo.png";
import "jspdf/dist/polyfills.es.js";

class AdmitCard extends React.Component {
  state = {
    instruction: false,
    idCard: true,
  };
  createPDF() {
    const page = document.getElementById("divIdToPrint");
    html2canvas(page).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0, 210, 390);
      pdf.save("smit_id_card.pdf");
      this.setState({ instruction: true, idCard: false });
    });
  }
  componentDidMount() {
    this.createPDF();
  }
  render() {
    return (
      <div
        className="backgroundLight"
        style={{ padding: "10px", height: "100%", minHeight: "100vh" }}
      >
        {this.state.idCard ? (
          <div id="divIdToPrint">
            <div className="border m-5 p-3 inrollmentCard">
              <div className="row">
                <div className=" col-md-3 p-3">
                  <img src={logo} width="100px" />
                </div>
                <div className="col-md-9 text-right p-3">
                  <h2>Enrollment Card</h2>
                  <h4 className="color">Graphic Designing</h4>
                </div>
              </div>
              <div className=" d-flex justify-content-between">
                <div>
                  <img src={Zia} width="100px" />
                </div>
                <div>
                  <QRCode
                    className="rounded shadow"
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
                    src={Zia}
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
            {/* =================== ID Card end ========================= */}
          </div>
        ) : null}
        {this.state.instruction ? (
          <div className="container bg-white p-5 my-5 rounded shadow">
            <div className="p-3">
              <img src={logo} width="100px" />
            </div>
            <div>
              <div className="text-left p-0">
                <h3 className="p-3">
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
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default AdmitCard;
