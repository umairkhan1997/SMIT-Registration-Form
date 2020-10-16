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
import Faculty from '../components/SMIT/faculty'

export default class Smit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        {/* MainHeader Start*/}
        <MainHeader />
        {/* MainHeader End*/}
      <Faculty />
        {/* START UPCOMING COURSES  */}

        {/* <UpcomingCourses /> */}

        {/* END UPCOMING COURSES  */}

        {/* START SmitCounter  */}

        {/* <SmitCounter /> */}
        {/* END SmitCounter  */}

        {/* <Start WHy LEarn  */}
        {/* <WhyLearnSmit /> */}
        {/* END END END */}

        {/* {MAIN SMIT COURSES} */}
        <MainCourses />
        {/* END END END */}

        {/* VOCATIOnAL TRANING */}

        {/* <VocaTrain /> */}
        {/* VOCATIOnAL TRANING END */}

        {/* HUMAN AND TEXT  */}


        {/* SmitContact START */}
        <SmitContact />
        {/* SmitContact END */}

        <Footer />
      </div>
    );
  }
}
