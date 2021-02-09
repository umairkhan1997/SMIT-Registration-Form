import React from "react";

export default class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smit: {
        trainedStudents: 522,
        enrolledStudents: 522,
        iTcourses: 14,
        vocationalTraining: 6,
        vision: 123,
      },
      welfare: {
        totalWelfareAmount: 123123,
        weddingFurniture: 123123,
        rozgar: 12313,
        education: 1231,
        rashan: 1231,
      },
      medical: {
        consultantOpd: 1231,
        dental: 123132,
        eyeOpd: 123,
        patientWelfare: 1231,
        childOpd: 123,
      },
      education: {
        totalStudents: 1231,
        totalCampuses: 123,
        totalFaculty: 123,
        totalPassOut: 2123,
        support: "25% of Students are supported by saylani welfare",
      },
      roPlant: {
        roProject: "Saylani Saaf Pani Project",
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
            <div className="col-md-9">
              <div className="b2 my-3">
                <div className="dataRound">
                  <div className="dataRoundImage">
                    {/* <i className="fas fa-globe-americas"></i> */}
                  </div>
                </div>
              </div>
              <div className="homeDataListLeft">
                <ul className="homeTabList">
                  <li>{smitS ? smit.vision : null}</li>
                  <li>Welfare</li>
                  <li>Medical</li>
                  <li>Education</li>
                  <li>RO Plant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
