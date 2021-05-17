import React from "react";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import DonationForm from "../components/donate/donationForm";
import BankDetails from "../components/donate/bankdetails";
import Navbar from "../smallcomponents/navbar";
import DonationDashboard from "../components/donate/dontaionDashboard";
import MainDonationForm from "../components/donate/mainDonationForm";

export default class Donation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showScreen: true,
      mainDonationForm: false,
    };
  }
  DonationForm = () => {
    this.setState({
      DonationForms: true,
    });
  };
  BankDetail = () => {
    this.setState({
      DonationForms: false,
    });
  };
  render() {
    const { showScreen } = this.state;
    return (
      <div>
        <MainHeader />
        <Navbar />
        <DonationDashboard />
        {/* <div className="container">
          <div className="row">
            <div className="col-md-6 p-3 pt-5">
              <div
                onClick={() =>
                  this.setState({
                    donationForm: true,
                    bankDetails: false,
                    showScreen: true,
                  })
                }
                className="selectBtn"
                style={{
                  backgroundColor: showScreen ? "#0066b3" : "white",
                  color: showScreen ? "white" : "#0066b3",
                }}
              >
                Donation Form
              </div>
            </div>
            <div className="col-md-6 p-3 pt-5">
              <div
                onClick={() =>
                  this.setState({
                    donationForm: false,
                    bankDetails: true,
                    showScreen: false,
                  })
                }
                className="selectBtn"
                style={{
                  backgroundColor: !showScreen ? "#0066b3" : "white",
                  color: !showScreen ? "white" : "#0066b3",
                }}
              >
                Bank Details
              </div>
            </div>
          </div>
        </div> */}
        {/* {showScreen ? <DonationForm /> : <BankDetails />} */}
        <Footer />
      </div>
    );
  }
}
