import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import logo from "../images/logo.png";
import dr from "../images/Dr.jpg";
import MedicalServices from "../components/medicalServices";
import MedicalClinics from "../components/medicalClinics";
import MedicalOPD from "../components/medicalOPD";
import MainHeader from '../components/Home/MainHeader'

export default class Medical extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <div
          style={{ backgroundImage: `url(${dr})`, backgroundSize: "cover" }}
          className="p-5"
        >
          <p className="p-5" style={{ fontSize: "4em" }}>
            We Serve Humanity
          </p>
        </div>
        <MedicalServices />
        <MedicalOPD />
        <MedicalClinics />
        <div className="container p-5">
          <div className="row">
            <div
              style={{ backgroundColor: "#f5f8ff" }}
              className="col-md-4 p-5 border border-primary"
            >
              <h2>Yearly Patient</h2>
            </div>
            <div className="col-md-3 bg-primary text-white p-5">
              <h1>45454</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
