import React from "react";
import Footer from "../components/Footer";
import HomeNews from "../components/Home/HomeNews";
import MainHeader from "../components/Home/MainHeader";
import ImgSlider from "../components/Home/ImgSlider";
import Introduction from "../components/Home/Introduction";
import HomeData from "../components/Home/homedata";
import SideList from "../smallcomponents/sidelist";
import HomeCover from "../components/Home/homecover";
import PartnerScreen from "../components/Home/partnerlogo";
import SaylaniChampions from "../components/Home/saylaniChampions";
import Events from "../components/Home/event";
import Navbar from "../smallcomponents/navbar";
import NewsLater from "../components/Home/newslater";

import {
  FaDoorOpen,
  FaNewspaper,
  FaHandshake,
  FaCodeBranch,
} from "react-icons/fa";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <div className="bg-white shadow sticky-top">
          <Navbar />
        </div>
        <ImgSlider />
        <Introduction />
        {/* <HomeCover /> */}
        {/* <HomeData /> */}
        <div className="row m-0 p-1">
          <div className="col-md-6">
            <HomeNews />
          </div>
          <div className="col-md-6">
            <SaylaniChampions />
          </div>
          <div className="col-md-12">
            <Events />

          </div>
          {/* <div className="col-md-6">
            <NewsLater />
          </div> */}
        </div>
        <p className="partnerHeading">CORPORATE EMBESSADOR PROGRAM</p>
        <PartnerScreen />
        <Footer />
      </div>
    );
  }
}
