import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import BloodBankServices from "../components/bloodbank/bloodservices";
import BloodBankAims from "../components/bloodbank/bloadbankaims";
import Footer from "../components/Footer";
import BloodBankEvent from "../components/bloodbank/event";
import Cover from "../components/bloodbank/cover";
import Instruction from "../components/bloodbank/instruction";
export default class BloodBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <Cover />
        <Instruction />
        <BloodBankServices />
        <BloodBankEvent />
        <BloodBankAims />
        <Footer />
      </div>
    );
  }
}
