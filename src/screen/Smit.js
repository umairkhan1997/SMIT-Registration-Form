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

export default class Smit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        {/* LinkLine Start*/}
        <LinkLine />
        {/* LinkLine End*/}

        {/* MainHeader Start*/}
        <MainHeader />
        {/* MainHeader End*/}

        {/* START UPCOMING COURSES  */}

        <UpcomingCourses />

        {/* END UPCOMING COURSES  */}

        {/* START SmitCounter  */}

        <SmitCounter />
        {/* END SmitCounter  */}

        {/* <Start WHy LEarn  */}
        <WhyLearnSmit />
        {/* END END END */}

        {/* {MAIN SMIT COURSES} */}
        <MainCourses />
        {/* END END END */}

        {/* VOCATIOnAL TRANING */}

        <VocaTrain />
        {/* VOCATIOnAL TRANING END */}

        {/* HUMAN AND TEXT  */}

        <div className="container-fluid pt-5">
          <div className="row determineTxt">
            <div className="col-md-2 "></div>
            <div className="col-md-4 ">
              <img src={img7} style={{ width: "100%", height: 400 }} />
            </div>
            <div className="col-md-5 ">
              <p className="p-1 pText determineTxt">
                Determine the right learning path for you
              </p>
              <p className="p-1 pTextTwo">
                Determine the right learning path for you Determine the right
                learning path for you Determine the right learning path for you
                Determine the right learning path for you Determine the right
                learning path for you Determine the right learning path for you
                Determine the right learning path for you Determine the right
                learning path for you Determine the right learning path for you
                Determine the right learning path for you Determine the right
                learning path for you Determine the right learning path for you
                Determine the right learning path for you Determine the right
                learning path for you Determine the right learning path for you
                Determine the right learning path for you Determine the right
                learning path for you Determine the right learning path for you
              </p>
            </div>
          </div>
        </div>

        {/* SmitContact START */}
        <SmitContact />
        {/* SmitContact END */}

        <Footer />
      </div>
    );
  }
}
