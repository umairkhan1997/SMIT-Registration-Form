import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MedicalServices from "../components/medical/medicalServices";
import MedicalOPD from "../components/medical/medicalOPD";
import Intro from "../components/medical/intro";
import MainHeader from "../components/Home/MainHeader";
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
        <Intro />
        <MedicalServices />
        <MedicalOPD />
        {/* <MedicalClinics /> */}
        {/* <Internship /> */}
        {/* <MedicalContact /> */}
        <Footer />
      </div>
    );
  }
}
