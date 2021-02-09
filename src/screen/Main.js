import React from "react";
import Footer from "../components/Footer";
import HomeNews from "../components/Home/HomeNews";
import MainHeader from "../components/Home/MainHeader";
import ImgSlider from "../components/Home/ImgSlider";
import Introduction from "../components/Home/Introduction";
import HomeData from "../components/Home/homedata";
import SideList from "../smallcomponents/sidelist";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [
        {
          listText: "Introduction",
          listIcon: "fas fa-door-open",
          id: "homeIntro",
        },
        {
          listText: "Highlights",
          listIcon: "fas fa-highlighter",
          id: "highlights",
        },
        {
          listText: "Latest",
          listIcon: "fas fa-newspaper",
          id: "homeNews",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <SideList item={this.state.listItem} />
        <MainHeader />
        <ImgSlider />
        <Introduction />
        <HomeData />
        <HomeNews />
        <Footer />
      </div>
    );
  }
}
