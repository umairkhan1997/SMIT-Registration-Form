import React from "react";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import BloodBankServices from "../components/bloodbank/bloodservices";
import BloodBankAims from "../components/bloodbank/bloadbankaims";
import Footer from "../components/Footer";
import Cover from "../components/bloodbank/cover";
import Instruction from "../components/bloodbank/instruction";
import DataBloodBank from "../components/bloodbank/data";
import AboutBloodBank from "../components/bloodbank/about";
import Navbar from "../smallcomponents/navbar";
// import BloodBankServices from "../components/bloodbank/bloodservices";
// import BloodBankAims from "../components/bloodbank/bloadbankaims";
export default class BloodBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <Navbar />
        <Cover />
        <AboutBloodBank />
        <DataBloodBank />
        <Instruction />
        <BloodBankServices />
        <BloodBankAims />
        <Footer />
      </div>
    );
  }
}
