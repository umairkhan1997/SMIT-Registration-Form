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
import SideList from "../smallcomponents/sidelist";

export default class Medical extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [
        {
          listText: "Introduction",
          listIcon: "fas fa-door-open",
          id: "medicalIntro",
        },
        {
          listText: "Services",
          listIcon: "fas fa-briefcase-medical",
          id: "medicalServices",
        },
        {
          listText: "Consultant OPD",
          listIcon: "fas fa-user-md",
          id: "MedicalOPD",
        },
        {
          listText: "Hijama",
          listIcon: "fas fa-tint",
          id: "medicalHijama",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <SideList item={this.state.listItem} />
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
