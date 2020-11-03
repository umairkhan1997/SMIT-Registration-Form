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
      sadqa:true,aqiqa:false,otherDonation:false,coronaEffec:false,DonationForms:true,bgClrBtnOne:'#0069d9',bgClrBtnTwo:'#5a6268',

    // this.donationType = this.donationType.bind
      donationForm:true,
      bankDetails:false,
      donationForm: false,
      bankDetails: true,
      title: "",
      aqiqaDropDown: [
        "Aqiqa Goat (8000)",
        "Aqiqa Goat (9000)",
        "Aqiqa Goat (10000)",
        "Aqiqa Goat (12000)",
        "Aqiqa Goat (15000)",
        "Aqiqa Cow (40000)",
        "Aqiqa Cow (45000)",
        "Aqiqa Cow (50000)",
        "Aqiqa Camel (55000)",
        "Aqiqa Camel (60000)",
        "Aqiqa Camel (65000)",
      ],
      sadqaDropDown: [
        "Sadqa Goat (5500)",
        "Sadqa Goat (6000)",
        "Sadqa Goat (7000)",
        "Sadqa Goat (8000)",
        "Sadqa Goat (9000)",
        "Sadqa Goat (10000)",
        "Sadqa Goat (12000)",
        "Sadqa Goat (15000)",
        "Sadqa Cow (30000)",
        "Sadqa Cow (35000)",
        "Sadqa Cow (40000)",
        "Sadqa Cow (45000)",
        "Sadqa Camel (55000)",
        "Sadqa Camel (60000)",
        "Sadqa Camel (65000)",
        "Sadqa Hen (400)",
      ],
      coronaDropDown: ["Corona Effecties Rashan Bag Rs.(1500)"],
      otherDonationDropDown: [
        "Donation",
        "Marriage",
        "Zakat",
        "Food",
        "Education",
        "Water Well",
        "Monthly Rashan",
        "Thar Fund",
        "Flood Victim",
        "Fitra (Overseas)",
        "Saaf Pani",
        "Heat Stroke",
        "Syrian Crisis",
        "Masjid Construction",
        "Medical Projects",
      ],
      currentData: [],
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
        <DonateBtn />
        <div className="container">
          <div className="row">
            <div className="col-md-3 p-5">
              <div
                onClick={() =>
                  this.setState({
                    donationForm: true,
                    bankDetails: false,
                    currentData: sadqaDropDown,
                  })
                }
                className="select"
              >
                Sadqa
              </div>
            </div>
            <div className="col-md-3 p-5">
              <div
                onClick={() =>
                  this.setState({
                    donationForm: true,
                    bankDetails: false,
                    currentData: aqiqaDropDown,
                  })
                }
                className="select"
              >
                Aqeeqa
              </div>
            </div>
            <div className="col-md-3 p-5">
              <div
                onClick={() =>
                  this.setState({
                    donationForm: true,
                    bankDetails: false,
                    currentData: otherDonationDropDown,
                  })
                }
                className="select"
              >
                Other Donation
              </div>
            </div>
            <div className="col-md-3 p-5">
              <div
                onClick={() =>
                  this.setState({
                    donationForm: true,
                    bankDetails: false,
                    currentData: coronaDropDown,
                  })
                }
                className="select"
              >
                Corona Rashan
              </div>
            </div>
            <div className="col-md-3 p-5">
              <div
                onClick={() =>
                  this.setState({ donationForm: false, bankDetails: true })
                }
                className="select"
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
