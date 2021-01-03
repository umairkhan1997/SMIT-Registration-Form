import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import saylanidastarkhwan from "../images/saylaniDastarkhwan.jpg";
import Cost from "../components/Dastarkhwan/cost";
import LangarCounter from "../components/Dastarkhwan/counter";
import Dailyserve from "../components/Dastarkhwan/dailylife";
import RotiBank from "../components/Dastarkhwan/rotibank";

export default class Dasterkhwan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <Dailyserve />
        <LangarCounter />
        <RotiBank />
        <Cost />
        <Footer />
      </div>
    );
  }
}
