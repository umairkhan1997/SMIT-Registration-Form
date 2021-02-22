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
import {
  FaDoorOpen,
  FaNewspaper,
  FaHandshake,
  FaCodeBranch,
} from "react-icons/fa";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [
        {
          listText: "Introduction",
          listIcon: [<FaDoorOpen />],
          id: "homeIntro",
        },
        {
          listText: "Latest",
          listIcon: [<FaNewspaper />],
          id: "homeNews",
        },
        {
          listText: "Partners",
          listIcon: [<FaHandshake />],
          id: "saylaniPartners",
        },
        {
          listText: "Saylani Dept",
          listIcon: [<FaCodeBranch />],
          id: "saylanidepart",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <SideList item={this.state.listItem} />
        <MainHeader />
        {/* <ImgSlider /> */}
        <Introduction />
        <HomeCover />
        {/* <HomeData /> */}
        <HomeNews />
        <p className="partnerHeading">CORPORATE EMBASSADOR PROGRAM</p>
        <PartnerScreen />
        <Footer />
      </div>
    );
  }
}
