import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import logo from "../images/logo.png";
import dr from "../images/Dr.jpg";
import MedicalServices from "../components/medical/medicalServices";
import MedicalClinics from "../components/medical/medicalClinics";
import MedicalOPD from "../components/medical/medicalOPD";
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
        
      </div>
    );
  }
}
