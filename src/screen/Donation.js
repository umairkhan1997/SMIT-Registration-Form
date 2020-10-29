import React from "react";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import DonationForm from '../components/donate/donationForm';
import BankDetails from '../components/donate/bankdetails';
import DonateBtn from '../components/donatebtn/donateBtn'

export default class Donation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donationForm:true,
      bankDetails:false
    };
  }

  render() {
    return (
      <div>
        <MainHeader />
        <DonateBtn />
        <div className="container m-5">
          <div>
            <button onClick={()=>this.setState({donationForm:true,bankDetails:false})} type="button" class="donate">
              Donation Form
            </button>
            <button onClick={()=>this.setState({donationForm:false,bankDetails:true})} type="button" class="donate">
              Bank Details
            </button>
          </div>
        </div>
       {this.state.donationForm?<DonationForm />:null}
        {this.state.bankDetails?<BankDetails />:null}
        <Footer />
      </div>
    );
  }
}
