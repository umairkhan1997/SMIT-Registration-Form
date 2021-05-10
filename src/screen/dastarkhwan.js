import React from "react";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import Cost from "../components/dastarkhwan/cost";
import LangarCounter from "../components/dastarkhwan/counter";
import Dailyserve from "../components/dastarkhwan/dailylife";
import RotiBank from "../components/dastarkhwan/rotibank";
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
