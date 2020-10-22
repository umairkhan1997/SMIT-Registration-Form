import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import MainHeader from "../components/Home/MainHeader";
import MainCourses from "../components/SMIT/MainCourses";
import img7 from "../images/human.JPG";
import LinkLine from "../components/LinkLine";
import Footer from "../components/Footer";
import SmitCounter from "../components/SmitCounter";
import UpcomingCourses from "../components/SMIT/UpcomingCourses";
import WhyLearnSmit from "../components/SMIT/WhyLearnSmit";
import VocaTrain from "../components/SMIT/VocaTrain";
import SmitContact from "../components/SMIT/SmitContact";
import Faculty from "../components/SMIT/faculty";
import Collaboration from "../components/SMIT/collaboration";
import SMITeacher from '../components/SMIT/teacher'

export default class Smit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <MainHeader />
        <Faculty />
        {/* <UpcomingCourses /> */}
        <SmitCounter />
        {/* <WhyLearnSmit /> */}
        <MainCourses />
        {/* <VocaTrain /> */}
        <SMITeacher />
        <Collaboration />
        <SmitContact />
        <Footer />
      </div>
    );
  }
}
