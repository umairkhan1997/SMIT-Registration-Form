import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../../images/logo.png";
import Zoom from "react-reveal/Zoom";
import "./donate.css";
import paypal from "../../images/paypal.png";

export default class DonationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
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
  donationType = (e) => {
    const {sadqaDropDown,aqiqaDropDown,coronaDropDown,otherDonationDropDown} = this.state
    // console.log(e.target.value,'asdsa')

    if (e.target.value === 'Sadqa') {
      let arr = sadqaDropDown
      this.setState({
        currentData:arr
      })
    }
    if (e.target.value === 'Aqiqa') {
      let arr = aqiqaDropDown
      this.setState({
        currentData:arr
      })
    }
    if (e.target.value === 'Other Donation') {
      let arr = otherDonationDropDown
      this.setState({
        currentData:arr
      })
    }
    if (e.target.value === 'Corona Effecties') {
      let arr = coronaDropDown
      this.setState({
       currentData:arr
      })
    }
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <div className="container">
          <div className="text-left">
            <h1>Donation Form</h1>
          </div>
          {/* <p className="text-muted">
            For Sadqa, Aqiqa, Corona Effecties or other Donation select Donation
            Form and for Bank Details select Bank Details option.
          </p> */}
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-7 bg-light p-5">
                <div className="row">
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">Name</label>
                    <input type="text" class="inp" placeholder="Name" />
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">Email</label>
                    <input type="text" class="inp" placeholder="Email" />
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">
                      Select Donation Type
                    </label>
                    <select className="inp">
                      <option>Credit Card</option>
                    </select>
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">
                      Select Donation Type
                    </label>
                    <select onChange={(e)=>this.donationType(e)} className="inp">
                      <option>Select Donation Type</option>
                      <option>Sadqa</option>
                      <option>Aqiqa</option>
                      <option>Other Donation</option>
                      <option>Corona Effecties</option>
                      
                    </select>
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">
                      Select Donation category
                    </label>
                    <select className="inp">
                      <option>Select Donation Category</option>
                      {this.state.currentData.map((i, index) => {
                        return <option key={index}>{i}</option>;
                      })}
                    </select>
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">Quantity</label>
                    <button className="incrementbtn">+</button>
                    <input type="text" class="quantity" placeholder="Number" />
                    <button className="incrementbtn">-</button>
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">Amount Payable</label>
                    <input
                      type="text"
                      disabled="disabled"
                      class="inp"
                      placeholder="Number"
                    />
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">Contact Number</label>
                    <input type="text" class="inp" placeholder="Number" />
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">Remarks</label>
                    <textarea
                      placeholder="Enter Your Remarks"
                      className="inp"
                      rows="8"
                    ></textarea>
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <button className="btn-block donate">Send</button>
                  </div>
                </div>
              </div>
              <div className="col-md-5 bg-primary p-5">
                <img src={paypal} width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
