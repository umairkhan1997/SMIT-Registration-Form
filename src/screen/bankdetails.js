import React from "react";
import BankDetails from "../components/bankdetails/bankList";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";

export default class Bank extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <BankDetails />
        <Footer />
      </div>
    );
  }
}
