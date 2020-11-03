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
      sadqa:true,aqiqa:false,otherDonation:false,coronaEffec:false,DonationForms:true,bgClrBtnOne:'#0069d9',bgClrBtnTwo:'#5a6268',

    // this.donationType = this.donationType.bind
      donationForm:true,
      bankDetails:false
    };
  }


  donationType=(e)=>{
    // console.log(e.target.value,'asdsa')

    if(e.target.value ==='Sadqa') {
      this.setState({
        sadqa:true,aqiqa:false,otherDonation:false,coronaEffec:false
      })
    }
    if(e.target.value ==='Aqiqa') {
      this.setState({
        aqiqa:true,sadqa:false,otherDonation:false,coronaEffec:false
      })
    }
    if(e.target.value ==='Other Donation') 
    {
      this.setState({
        otherDonation:true,aqiqa:false,sadqa:false,coronaEffec:false
      })
    }
    if(e.target.value ==='Corona Effecties') {
      this.setState({
        coronaEffec:true,aqiqa:false,otherDonation:false,sadqa:false
      })
    }
  }
  DonationForm=()=>{
    this.setState({
DonationForms:true,
bgClrBtnOne:'#0069d9',bgClrBtnTwo:'#5a6268'
    })
  }
  BankDetail=()=>{
    this.setState({
      DonationForms:false,
      bgClrBtnOne:'#5a6268',bgClrBtnTwo:'#0069d9'
    })
  }
  render() {
    return <div>
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
    </div>;
  }
}
