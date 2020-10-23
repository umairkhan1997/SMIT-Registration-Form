import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import HomeContact from "../components/Home/HomeContact";
import Footer from "../components/Footer";
import saylanidastarkhwan from "../images/saylaniDastarkhwan.jpg";
import Cost from "../components/dastarkhwan/cost";
import LangarCounter from "../components/dastarkhwan/counter";
import Dailyserve from "../components/dastarkhwan/dailylife";
import PrimeMinister from "../components/dastarkhwan/primeMinister";
import RotiBank from '../components/dastarkhwan/rotibank'

export default class Dasterkhwan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <div
          style={{ backgroundImage: `url(${saylanidastarkhwan})` }}
          className="back"
        >
          <div style={{ backgroundColor: "rgba(0,0,0,.5)" }} className="p-5">
            <h1 className="p-3 text-white">Dastarkhwan</h1>
          </div>
        </div>
        <PrimeMinister />
        <LangarCounter />
        <Dailyserve />
        <RotiBank />
        <Cost />
        <Footer />
      </div>
    );
  }
}
