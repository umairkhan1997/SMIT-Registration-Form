// import React from "react";
// import QRCode from "qrcode.react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import Zia from "../images/ziaKhan.png";
// import logo from "../images/smitlogo.png";
// import "jspdf/dist/polyfills.es.js";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";

// class AdmitCard extends React.Component {
//   state = {
//     instruction: false,
//     idCard: true,
//   };
//   createPDF() {
   
//     const page = document.getElementById("divIdToPrint");
//     html2canvas(page).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, "PNG", 0, 0, 210, 390);
//       pdf.save("smit_id_card.pdf");
    
//       // this.setState({ instruction: true, idCard: false });
//     });
//   }
//   componentWillMount(){
//     if (!this.props.stdDatas.data.data) {
//       this.props.history.push('/smit')
//   }
//   }

//   componentDidMount() {
//     setTimeout(() => {
//     this.createPDF();
//   }, 16000);
//     console.log(this.props,'this.props admit 222222222')
//     // setTimeout(() => {
//     //   this.setState({ instruction: true, idCard: false });
//     // }, 8000);
//   }
//   render() {
//     const {fullName,email,gender,img,fatherName,ContactNumber,cnic,fatherCnic,dob,address,lastQualification,batchName,cityName,courseName,rollNo,multiple_image    } = this.props.stdDatas.data.data
//     console.log(this.props,'this.props admit')
//     let imgOne=multiple_image[0]
//     console.log(imgOne,'imgOne',this.props.stdDatasImg)
//     return (
//       <div
//         className="backgroundLight"
//         style={{ padding: "10px", height: "100%", minHeight: "100vh" }}
//       >
//         {this.state.idCard ? (
//           <div id="divIdToPrint">
//             <div className="border m-5 p-3 inrollmentCard">
//               <div className="row">
//                 <div className=" col-md-3 p-3">
//                   <img src={logo} width="100px" />
//                 </div>
//                 <div className="col-md-9 text-right p-3">
//                   <h2>Enrollment Card</h2>
//         <h4 className="color">{courseName}</h4>
//                 </div>
//               </div>
//               <div className=" d-flex justify-content-between">
//                 <div>
//                   <img src={this.props.stdDatasImg} width="100px" />
//                 </div>
//                 <div>
//                   <QRCode
//                     className="rounded shadow"
//                     value={`${batchName}${rollNo}`}
//                     bgColor="#f5f8ff"
//                     fgColor="#000"
//                     includeMargin={true}
//                     style={{ width: "100px", height: "100px" }}
//                   />
//                 </div>
//               </div>

//               <p className="seperate"></p>
//               <div>
//                 <table className="table table-bordered">
//                   <tr>
//                     <th>Roll Number</th>
//                     <th>Name</th>
//                     <th>Father Name</th>
//                     <th>Course</th>
//                     <th>CNIC</th>
//                   </tr>
//                   <tr>
//         <td>0121{`${batchName}${rollNo}`}</td>
//                     <td>{fullName}</td>
//         <td>{fatherName}</td>
//         <td>{courseName}</td>
//         <td>{cnic}</td>
//                   </tr>
//                 </table>
//               </div>
//               <div style={{ fontSize: ".9em" }} className="text-left p-0">
//                 <ol>
//                   <li>Please colour print of this Admit / ID card</li>
//                   <li>
//                     Attestation of ID / Admit Card is extremely mandatory from
//                     Saylani Head Office, A-25 Bahadurabad Chowrangi.
//                   </li>
//                   <li>
//                     No student will be allowed to enter in Entry Test without
//                     attestation of Admit/ID Card
//                   </li>
//                   <li>
//                     Bring CNIC and Last qualification marksheet/cert. (both
//                     original) at the time of Entry Test
//                   </li>
//                 </ol>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <div className="authorSign">
//                   <p>Candidate Signature</p>
//                 </div>
//                 <div className="authorSign">
//                   <p>Authorized Signature</p>
//                 </div>
//               </div>
//               <div></div>
//             </div>
//             {/* =================== ID Card Start ========================= */}
//             <div className="admitCardPaper p-0">
//               <div style={{ backgroundColor: "#f5f8ff" }} className="admit">
//                 <div className="cardHeader">
//                   <img
//                     style={{ position: "relative" }}
//                     src={logo}
//                     width="80px"
//                   />
//                 </div>
//                 <p className="seperate"></p>
//                 <div className="profileImg">
//                   <img
//                     style={{ position: "relative" }}
//                     alt=""
//                     className="profileImage"
//                     width="110px"
//                     height="110px"
//                     src={imgOne}
//                   />
//                 </div>
//                 <div className="shortDetail">
//                     <p className="name numberHeading">{fullName}</p>
//                     <p className="rollNumber">0121{`${batchName}${rollNo}`}</p>
//                   <p className="course">{courseName}</p>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   backgroundColor: "#1371b8",
//                   display: "flex",
//                   justifyContent: "space-between",
//                   flexDirection: "column",
//                 }}
//                 className="admit text-white"
//               >
//                 <table className="cardTable backgroundLight">
//                   <tr>
//                     <td>Father Name:</td>
//               <td>{fullName}</td>
//                   </tr>
//                   <tr>
//                     <td>Course:</td>
//                     <td>Graphic Designing</td>
//                   </tr>
//                   <tr>
//                     <td>Roll No:</td>
//               <td>0121{`${batchName}${rollNo}`}</td>
//                   </tr>
//                   <tr>
//                     <td>Batch:</td>
//               <td>{batchName}</td>
//                   </tr>
//                   <tr>
//                     <td>CNIC:</td>
//               <td>{cnic}</td>
//                   </tr>
//                 </table>
//                 <div
//                   style={{ borderRadius: "6px" }}
//                   className="backgroundLight d-flex justify-content-around align-items-end py-1"
//                 >
//                   <div>
//                     <QRCode
//                       className="rounded shadow border"
//                       value={`${batchName}${rollNo}`}
//                       bgColor="#fff"
//                       fgColor="#000"
//                       includeMargin={true}
//                       style={{ width: "70px", height: "70px" }}
//                     />
//                   </div>
//                   <div>
//                     <p
//                       style={{ fontSize: ".8em" }}
//                       className="text-dark py-1 m-0 border-top border-dark"
//                     >
//                       Authorized Sign
//                     </p>
//                   </div>
//                 </div>
//                 <div className="text-white">
//                   <p style={{ fontSize: ".8em" }} className="p-0 m-0">
//                     <i className="fab fa-facebook-square"></i>{" "}
//                     /SaylaniMassTraining
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* =================== ID Card end ========================= */}
//           </div>
//         ) : null}
//         {this.state.instruction ? (
//           <div className="container bg-white p-5 my-5 rounded shadow">
//             <div className="p-3">
//               <img src={logo} width="100px" />
//             </div>
//             <div>
//               <div className="text-left p-0">
//                 <h3 className="p-3">
//                   Form has been Successfully Your further details will be
//                   publiched on facebook page{" "}
//                   <a
//                     target="_blank"
//                     href="https://www.facebook.com/SaylaniMassTraining/"
//                   >
//                     Saylani Mass Training
//                   </a>
//                 </h3>
//                 <ol>
//                   <li>Please colour print of this Admit / ID card</li>
//                   <li>
//                     Attestation of ID / Admit Card is extremely mandatory from
//                     Saylani Head Office, A-25 Bahadurabad Chowrangi.
//                   </li>
//                   <li>
//                     No student will be allowed to enter in Entry Test without
//                     attestation of Admit/ID Card
//                   </li>
//                   <li>
//                     Bring CNIC and Last qualification marksheet/cert. (both
//                     original) at the time of Entry Test
//                   </li>
//                 </ol>
//               </div>
//             </div>
//           </div>
//         ) : null}
//       </div>
//     );
//   }
// }

// function mapStateToProp(state) {
//   return {
//       stdDatas: state.reducerSmit.stdDatas,
//       stdDatasImg:state.reducerSmit.stdDatasImg
//   };
// }
// function mapDispatchToProp(dispatch) {
//   return {

//   };
// }
// export default withRouter(connect(mapStateToProp, mapDispatchToProp)(AdmitCard));




import React from "react";
import QRCode from "qrcode.react";
import Zia from "../images/ziaKhan.png";
import logo from "../images/smitlogo.png";
import "jspdf/dist/polyfills.es.js";
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const ref = React.createRef();

class AdmitCard extends React.Component {
  state = {
    instruction: false,
    idCard: false,
  };

  componentDidMount() {
    this.setState({ idCard: true });
  }
  componentWillMount() {
    if (!this.props.stdDatas.data) {
        this.props.history.push('/smit')
    }
}

  down(e) {
    e();
    this.setState({ idCard: false, instruction: true });
  }
  render() {
        const {fullName,email,gender,img,fatherName,ContactNumber,cnic,fatherCnic,dob,address,lastQualification,batchName,cityName,courseName,rollNo,multiple_image    } = this.props.stdDatas.data.data
        const {courseId,year}=this.props
        console.log(courseId,year,'courseId,year')
    console.log(this.props,'this.props admit');
    let imgOne=multiple_image[0]
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
                                    <div className=" col-md-3 p-3">
                                      <img src={logo} width="100px" />
                                    </div>
                                    <div className="col-md-9 text-right p-3">
                                      <h2>Enrollment Card</h2>
                            <h4 className="color">{courseName}</h4>
                                    </div>
                                  </div>
                                  <div className=" d-flex justify-content-between">
                                    <div>
                                      <img src={this.props.stdDatasImg} width="100px" />
                                    </div>
                                    <div>
                                      <QRCode
                                       className="rounded shadow"
                                       value={`${courseId}${year}${batchName}${rollNo}`}
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
                                       <th>Student ID</th>
                                       <th>Name</th>
                                       <th>Father Name</th>
                                       <th>Course</th>
                                       <th>CNIC</th>
                                     </tr>
                                     <tr>
                           <td>{`${courseId}${year}${batchName}${rollNo}`}</td>
                                       <td>{fullName}</td>
                           <td>{fatherName}</td>
                           <td>{courseName}</td>
                           <td>{cnic}</td>
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
                                       src={imgOne}
                                     />
                                   </div>
                                   <div className="shortDetail">
                                       <p className="name numberHeading">{fullName}</p>
                                       <p className="rollNumber">{`${courseId}${year}${batchName}${rollNo}`}</p>
                                     <p className="course">{courseName}</p>
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
                                 <td>{fullName}</td>
                                     </tr>
                                     <tr>
                                       <td>Course:</td>
                                  <td>{courseName}</td>
                                     </tr>
                                     <tr>
                                       <td>Student ID:</td>
                                 <td>{`${courseId}${year}${batchName}${rollNo}`}</td>
                                     </tr>
                                     <tr>
                                       <td>Batch:</td>
                                 <td>{batchName}</td>
                                     </tr>
                                     <tr>
                                       <td>CNIC:</td>
                                 <td>{cnic}</td>
                                     </tr>
                                   </table>
                                   <div
                                     style={{ borderRadius: "6px" }}
                                     className="backgroundLight d-flex justify-content-around align-items-end py-1"
                                   >
                                     <div>
                                       <QRCode
                                         className="rounded shadow border"
                                         value={`${courseId}${year}${batchName}${rollNo}`}
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

function mapStateToProp(state) {
  return {
      stdDatas: state.reducerSmit.stdDatas,
      stdDatasImg:state.reducerSmit.stdDatasImg,
      year:state.reducerSmit.year,
      courseId:state.reducerSmit.courseId
  };
}
function mapDispatchToProp(dispatch) {
  return {

  };
}
export default withRouter(connect(mapStateToProp, mapDispatchToProp)(AdmitCard));