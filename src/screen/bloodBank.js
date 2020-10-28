import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Scrollable from "../components/scrollable";
import logo from "../images/logo.png";
import BloodBankServices from '../components/bloodbank/bloodservices';
import BloodBankAims from '../components/bloodbank/bloadbankaims'

export default class BloodBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <BloodBankServices />
        <BloodBankAims />
      </div>
    );
  }
}
