import React from "react";
import Footer from "../components/Footer";
import HomeNews from "../components/Home/HomeNews";
import MainHeader from "../components/Home/MainHeader";
import ImgSlider from "../components/Home/ImgSlider";
import Introduction from "../components/Home/Introduction";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <ImgSlider />
        <Introduction />
        <HomeNews />
        <Footer />
      </div>
    );
  }
}
