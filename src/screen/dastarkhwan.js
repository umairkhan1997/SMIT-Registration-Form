import React from "react";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import Cost from "../components/Dastarkhwan/cost";
import LangarCounter from "../components/Dastarkhwan/counter";
import Dailyserve from "../components/Dastarkhwan/dailylife";
import RotiBank from "../components/Dastarkhwan/rotibank";
import Navbar from "../smallcomponents/navbar";
export default class Dasterkhwan extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Navbar />
        <Dailyserve />
        <LangarCounter />
        <RotiBank />
        <Cost />
        <Footer />
      </div>
    );
  }
}
