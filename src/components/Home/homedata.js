import React from "react";
import { Link } from "react-router-dom";

export default class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smit: {
        trainedStudents: "10,000",
        enrolledStudents: "55,000",
        iTcourses: 15,
        vocationalTraining: 4,
        vision: "1,00,000",
      },
      welfare: {
        totalWelfareAmount: "719,101,123",
        weddingFurniture: "98,000,000",
        rozgar: "36,915,470",
        education: "173,224,833",
        rashan: "22,030,400",
      },
      medical: {
        benificiary: "848,028",
        dental: "20,316",
        eyeOpd: "21,676",
        patientWelfare: "27,126",
        childOpd: "18,853",
      },
      education: {
        totalStudents: "1,200",
        totalCampuses: 4,
        totalFaculty: 75,
        totalPassOut: "2,000",
        support: "25% of Students are supported by saylani welfare",
      },
      roPlant: {
        roProject: "1,122",
        vision: 1200,
        installed: 60,
        underconstruction: 18,
        rest: 1122,
      },
      smitS: true,
      welfareS: false,
      educationS: false,
      medicalS: false,
      roPlantS: false,
    };
  }
  render() {
    const {
      smit,
      smitS,
      welfare,
      welfareS,
      medical,
      medicalS,
      roPlant,
      roPlantS,
      education,
      educationS,
    } = this.state;
    return (
      <div id="highlights" className="backgroundDark py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="homeDataListleft">
                <ul className="homeTabList">
                  <li
                    onClick={() =>
                      this.setState({
                        smitS: true,
                        welfareS: false,
                        medicalS: false,
                        educationS: false,
                        roPlantS: false,
                      })
                    }
                  >
                    Mass Training
                  </li>
                  <li
                    onClick={() =>
                      this.setState({
                        smitS: false,
                        welfareS: true,
                        medicalS: false,
                        educationS: false,
                        roPlantS: false,
                      })
                    }
                  >
                    Welfare
                  </li>
                  <li
                    onClick={() =>
                      this.setState({
                        smitS: false,
                        welfareS: false,
                        medicalS: true,
                        educationS: false,
                        roPlantS: false,
                      })
                    }
                  >
                    Medical
                  </li>
                  <li
                    onClick={() =>
                      this.setState({
                        smitS: false,
                        welfareS: false,
                        medicalS: false,
                        educationS: true,
                        roPlantS: false,
                      })
                    }
                  >
                    Education
                  </li>
                  <li
                    onClick={() =>
                      this.setState({
                        smitS: false,
                        welfareS: false,
                        medicalS: false,
                        educationS: false,
                        roPlantS: true,
                      })
                    }
                  >
                    RO Plant
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="b2 my-3">
                <div className="dataRound">
                  <div className="dataRoundImage">
                    {/* <i className="fas fa-globe-americas"></i> */}
                  </div>
                </div>
              </div>
              <div className="homeDataListRight text-right">
                <ul className="homeTabList">
                  <li>
                    {smitS ? (
                      <>
                        SMIT Vision{" "}
                        <span className="dataHeadingDark">{smit.vision}</span>
                      </>
                    ) : welfareS ? (
                      <>
                        Welfare Amount 2014 to 20{" "}
                        <span className="dataHeadingDark">
                          {welfare.totalWelfareAmount}
                        </span>
                      </>
                    ) : educationS ? (
                      <>
                        Students Average{" "}
                        <span className="dataHeadingDark">
                          {education.totalStudents}
                        </span>
                      </>
                    ) : medicalS ? (
                      <>
                        Total beneficiaries in 2020{" "}
                        <span className="dataHeadingDark">
                          {medical.benificiary}
                        </span>
                      </>
                    ) : roPlantS ? (
                      <>
                        {" "}
                        Rest RO Plant
                        <span className="dataHeadingDark">
                          {roPlant.roProject}
                        </span>
                      </>
                    ) : null}
                  </li>
                  <li>
                    {smitS ? (
                      <>
                        Enrolled Students{" "}
                        <span className="dataHeadingDark">
                          {smit.enrolledStudents}
                        </span>
                      </>
                    ) : welfareS ? (
                      <>
                        Wedding Furniture{" "}
                        <span className="dataHeadingDark">
                          {welfare.weddingFurniture}
                        </span>
                      </>
                    ) : educationS ? (
                      <>
                        Campus{" "}
                        <span className="dataHeadingDark">
                          {education.totalCampuses}
                        </span>
                      </>
                    ) : medicalS ? (
                      <>
                        Average Dental Patient{" "}
                        <span className="dataHeadingDark">
                          {medical.dental}
                        </span>
                      </>
                    ) : roPlantS ? (
                      <>
                        Vision of Installing RO Plant{" "}
                        <span className="dataHeadingDark">
                          {roPlant.vision}
                        </span>
                      </>
                    ) : null}
                  </li>
                  <li>
                    {smitS ? (
                      <>
                        IT Course{" "}
                        <span className="dataHeadingDark">
                          {smit.iTcourses}
                        </span>
                      </>
                    ) : welfareS ? (
                      <>
                        Help In Rozgar{" "}
                        <span className="dataHeadingDark">
                          {welfare.rozgar}
                        </span>
                      </>
                    ) : educationS ? (
                      <>
                        Faculty{" "}
                        <span className="dataHeadingDark">
                          {education.totalFaculty}
                        </span>
                      </>
                    ) : medicalS ? (
                      <>
                        Eye OPD{" "}
                        <span className="dataHeadingDark">
                          {medical.eyeOpd}
                        </span>
                      </>
                    ) : roPlantS ? (
                      <>
                        Installed RO Plant{" "}
                        <span className="dataHeadingDark">
                          {roPlant.installed}
                        </span>
                      </>
                    ) : null}
                  </li>
                  <li>
                    {smitS ? (
                      <>
                        Vocational Training{" "}
                        <span className="dataHeadingDark">
                          {smit.vocationalTraining}
                        </span>
                      </>
                    ) : welfareS ? (
                      <>
                        Help In Education{" "}
                        <span className="dataHeadingDark">
                          {welfare.education}
                        </span>
                      </>
                    ) : educationS ? (
                      <>
                        Total Pass Out{" "}
                        <span className="dataHeadingDark">
                          {education.totalPassOut}
                        </span>
                      </>
                    ) : medicalS ? (
                      <>
                        Patient Welfare{" "}
                        <span className="dataHeadingDark">
                          {medical.patientWelfare}
                        </span>
                      </>
                    ) : roPlantS ? (
                      <>
                        Installed RO Plant{" "}
                        <span className="dataHeadingDark">
                          {roPlant.installed}
                        </span>
                      </>
                    ) : null}
                  </li>
                  <li>
                    {smitS ? (
                      <Link to="/smit">
                        Visit Saylani Mass IT Training{" "}
                        <i class="fas fa-arrow-right"></i>
                      </Link>
                    ) : welfareS ? (
                      <Link to="/welfare">
                        Visit Saylani Welfare <i class="fas fa-arrow-right"></i>
                      </Link>
                    ) : educationS ? (
                      <Link to="/education">
                        Saylani Education <i class="fas fa-arrow-right"></i>
                      </Link>
                    ) : medicalS ? (
                      <Link to="/medical">
                        Saylani Medical & Diagnostic Center{" "}
                        <i class="fas fa-arrow-right"></i>
                      </Link>
                    ) : roPlantS ? (
                      <Link to="/roplant">
                        Saylani RO Plant <i class="fas fa-arrow-right"></i>
                      </Link>
                    ) : null}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
