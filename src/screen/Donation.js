import React from "react";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import DonationForm from "../components/donate/donationForm";
import BankDetails from "../components/donate/bankdetails";
import DonateBtn from "../components/donatebtn/donateBtn";

export default class Donation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sadqa: true, aqiqa: false, otherDonation: false, coronaEffec: false, DonationForms: true, bgClrBtnOne: '#0069d9', bgClrBtnTwo: '#5a6268',

      // this.donationType = this.donationType.bind
      donationForm: true,
      bankDetails: false,
      donationForm: false,
      bankDetails: true,
      
    };
  }



  DonationForm = () => {
    this.setState({
      DonationForms: true,
      bgClrBtnOne: '#0069d9', bgClrBtnTwo: '#5a6268'
    })
  }
  BankDetail = () => {
    this.setState({
      DonationForms: false,
      bgClrBtnOne: '#5a6268', bgClrBtnTwo: '#0069d9'
    })
  }
  render() {
    const {
      aqiqaDropDown,
      sadqaDropDown,
      coronaDropDown,
      otherDonationDropDown,
      currentData,
    } = this.state;
    console.log(currentData);
    return (
      <div>
        <MainHeader />
        <div className="container">
          <div className="row">



            <div className="col-md-6 p-3 pt-5">
              <div
                onClick={() =>
                  this.setState({ donationForm: true, bankDetails: false })
                }
                className="selectBtn"
              >
                Donation Form
              </div>
            </div>
            <div className="col-md-6 p-3 pt-5">
              <div
                onClick={() =>
                  this.setState({ donationForm: false, bankDetails: true })
                }
                className="selectBtn"
              >
                Bank Details
              </div>
            </div>
          </div>
        </div>
        {this.state.donationForm ? (
          <DonationForm data={this.state.currentData} />
        ) : null}
        {this.state.bankDetails ? <BankDetails /> : null}
        <Footer />
      </div>
    )
  }
}
