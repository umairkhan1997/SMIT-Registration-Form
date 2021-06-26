import React from "react";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import Prime from "../components/ehsaas/primeminister";
import IntroLangarkhana from "../components/ehsaas/intro";
import Islamabad from "../components/ehsaas/islamabad";
import Multan from "../components/ehsaas/multan";
import Lodhran from "../components/ehsaas/lodhran";
import MobleLangar from "../components/ehsaas/onwheel";
import SWAT from "../components/ehsaas/swat";
import Peshawar from "../components/ehsaas/peshawara";
import Umarkot from "../components/ehsaas/umarkot";
import Navbar from "../smallcomponents/navbar";
export default class EhsaasLangarKhana extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Navbar />
        <Prime />
        <IntroLangarkhana />
        <Islamabad />
        <hr className="container" />
        <Multan />
        <hr className="container" />
        <Lodhran />
        <hr className="container" />
        <MobleLangar />
        <hr className="container" />
        <SWAT />
        <hr className="container" />
        <Peshawar />
        <hr className="container" />
        <Umarkot />
        <hr className="container" />
        <Footer />
      </div>
    );
  }
}
