import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import logo from "../images/logo.png";
import dr from "../images/Dr.jpg";
import MedicalServices from "../components/medical/medicalServices";
import MedicalClinics from "../components/medical/medicalClinics";
import MedicalOPD from "../components/medical/medicalOPD";
import MainHeader from "../components/Home/MainHeader";
import Internship from "../components/medical/internship";
import MedicalContact from "../components/medical/medicalContact";
import Footer from "../components/Footer";
import Table from "../components/medical/table";

export default class Medical extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <Table />
        <MedicalServices />
        <MedicalOPD />
        <MedicalClinics />
        {/* <Internship /> */}
        {/* <MedicalContact /> */}
        <Footer />
      </div>
    );
  }
}
