import React from "react";
import doorstep from "../../images/homeimages/doorstep.png";
import collectioncenter from "../../images/homeimages/collectioncenter.png";
import banktransfer from "../../images/homeimages/banktransfer.png";
import MainDonationForm from "./mainDonationForm";
import { FaDonate } from "react-icons/fa";
import Modal from "react-awesome-modal";

export default class DonationDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStatus: this.props.status,
      visible: false,
    };
  }
  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        {this.state.formStatus ? <MainDonationForm /> : null}

        {/* Campaign Start */}
        <div className="p-3">
          <div className="row p-0 m-0">
            <div className="col-md-6">
              <div className="shadow">
                <div className="py-2">
                  <ul className="donationHead">
                    <li onClick={() => this.openModal()}>
                      Sadqa and Aqeeqa Animals
                    </li>
                    <li onClick={() => this.openModal()}>kifalat Program</li>
                    <li onClick={() => this.openModal()}>
                      Ramzan Rashan Package
                    </li>
                    <li onClick={() => this.openModal()}>
                      Sehri & Aftari Support
                    </li>
                    <li onClick={() => this.openModal()}>
                      Education Support Programm
                    </li>
                    <li onClick={() => this.openModal()}>SMIT Program</li>
                    <li onClick={() => this.openModal()}>
                      Wedding Support Program
                    </li>
                    <li onClick={() => this.openModal()}>
                      Vocational Training
                    </li>
                    <li onClick={() => this.openModal()}>
                      Saylani Dastarkhwan
                    </li>
                    <li onClick={() => this.openModal()}>
                      Monthly Rashan Support Program
                    </li>
                    <li onClick={() => this.openModal()}>
                      Support Hepaptitis Patients
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="shadow heavyRadius backgroundLight mb-3 p-3">
                <div>
                  <label>
                    <input
                      type="radio"
                      value="General Support Donation"
                      name="DonationType"
                    />{" "}
                    General Support Donation
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="Donate a Blanket"
                      name="DonationType"
                    />{" "}
                    Donate a Blanket
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="Donate Two Blanket"
                      name="DonationType"
                    />{" "}
                    Donate Two Blanket
                  </label>
                </div>
              </div>
              <div className="shadow heavyRadius backgroundLight mb-3 p-3">
                <h3>I Want to Donate</h3>
                <input maxLength="5" min="0" size="2" type="number" /> Blanket
              </div>
              <div className="shadow heavyRadius backgroundLight mb-3 p-3">
                <div>
                  <button className="btn-fluid">Give Once</button>
                  <button className="btn-fluid">Monthly</button>
                </div>
                <div className="py-4">
                  <h4>
                    Bank tax <span className="text-primary text-bold">PKR</span>
                  </h4>
                  <h4>
                    My donation amount is <br />{" "}
                    <span className="text-primary text-bold">PKR</span>
                  </h4>
                </div>
                <div className="py-3">
                  <label>
                    <input
                      type="radio"
                      value="Treat this as Zakat"
                      name="DonationCategory"
                    />{" "}
                    Treat this as Zakat
                  </label>
                </div>
              </div>
              <div className="text-right">
                <button className="prevbtn px-5">Next</button>
              </div>
              <div className="mb-3 p-3">
                <div className="py-3 text-center">
                  <p>Ways to Donate This is a secure SSL encrypted payment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Campaign End */}
        {/* Ways to Donate Start */}
        <div className="container py-5">
          <div className="displayheading">
            <h2 className="text-center">Ways To donate</h2>
          </div>
          <div className="row py-5">
            <div className="col-md-4 mb-5">
              <div
                style={{ height: "100%" }}
                className="donationCardColor mb-3 text-center p-4"
              >
                <div>
                  <img className="donatewaysicon" src={doorstep} />
                </div>
                <h4>Cheque or Cash Pickup</h4>
                <p>
                  To have your donation in the form of a cheque or cash picked
                  from your doorstep, call our toll-free helpline at
                  <a style={{ fontSize: "1.3em" }} href="tel:+92311729526">
                    03-111-729-526
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div
                style={{ height: "100%" }}
                className="donationCardColor mb-3 text-center p-4"
              >
                <div>
                  <img className="donatewaysicon" src={collectioncenter} />
                </div>
                <h4>Collection Center</h4>
                <p>
                  Visit our collection centers in all over Pakistan.
                  <a style={{ fontSize: "1.3em" }} href="tel:+92311729526">
                    Find your nearest center now!
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div
                style={{ height: "100%" }}
                className="donationCardColor mb-3 text-center p-4"
              >
                <div>
                  <img className="donatewaysicon" src={banktransfer} />
                </div>
                <h4>Direct Bank Deposits or Transfer</h4>

                <p>
                  Transfer your Zakat or donations in favour of The Citizens
                  Foundation in our
                  <a style={{ fontSize: "1.3em" }} href="#">
                    selected banks
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Ways to Donate End */}
        {/* Donate Cards Start */}

        {/* =============================================================== */}
        {/* =============================================================== */}
        {/* =========================Drawer================================ */}
        {/* =============================================================== */}
        {/* =============================================================== */}
        <div className="row p-0 py-5 bg-light m-0">
          <div className="col-md-4">
            <div id="accordion">
              <div class="card drawerCard border-0 mb-2 shadow">
                <div class="py-3" id="headingOne">
                  <h5
                    class="collapsed donationCardHeading"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    class="mb-0"
                  >
                    <span>
                      <FaDonate />{" "}
                    </span>{" "}
                    <span>Sadqa & Aqiqah Animals</span>
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <hr />
                  <div class="card-body">
                    <p style={{ fontSize: ".8em" }}>
                      Most parents encourage their children to dream big. And
                      why shouldn’t they? Life is full of endless possibilities,
                      and every parent believes their child has a right to be
                      happy and successful. Yet, all around us are children who
                      can’t even dream of a better life. For just Rs.
                      1,600/month, you can give a child, born without privilege
                      and opportunity, the power to realise her dream
                    </p>
                    <div className="px-3 py-2">
                      <label className="px-2">
                        <input
                          type="radio"
                          value="Goat"
                          name="DonationAnimal"
                        />{" "}
                        Goat
                      </label>
                      <label className="px-2">
                        <input
                          type="radio"
                          value="Goat"
                          name="DonationAnimal"
                        />{" "}
                        Cow
                      </label>
                      <label className="px-2">
                        <input
                          type="radio"
                          value="Goat"
                          name="DonationAnimal"
                        />{" "}
                        Camel
                      </label>
                      <label className="px-2">
                        <input
                          type="radio"
                          value="Goat"
                          name="DonationAnimal"
                        />{" "}
                        Hen
                      </label>
                    </div>
                    <div className="px-3 py-2">
                      <select className="inp">
                        <option>Select your Goat</option>
                        <option>Select your Goat</option>
                      </select>
                      <label className="px-2">
                        Qty
                        <button className="partnerBtn">-</button>
                        <input
                          style={{ width: "100px", padding: "6px" }}
                          type="number"
                          min="0"
                        />
                        <button className="partnerBtn">+</button>
                      </label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-1 px-3">
                      Amount Payable{" "}
                      <span>
                        {" "}
                        PKR{" "}
                        <span
                          style={{ fontSize: "1.2em" }}
                          className="text-danger font-weight-bold border"
                        >
                          6500
                        </span>{" "}
                        /-{" "}
                      </span>
                      <button className="prevbtn">Donate</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card drawerCard border-0 mb-2 shadow">
                <div class="py-3" id="headingTwo">
                  <h5
                    class="collapsed donationCardHeading"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    class="mb-0"
                  >
                    <span>
                      <FaDonate />{" "}
                    </span>{" "}
                    <span>Sehri & Iftari Support</span>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p style={{ fontSize: ".8em" }}>
                      Most parents encourage their children to dream big. And
                      why shouldn’t they? Life is full of endless possibilities,
                      and every parent believes their child has a right to be
                      happy and successful. Yet, all around us are children who
                      can’t even dream of a better life. For just Rs.
                      1,600/month, you can give a child, born without privilege
                      and opportunity, the power to realise her dream
                    </p>
                    <div className="px-3 py-1">
                      <label className="px-2">
                        <input
                          type="radio"
                          value="Goat"
                          name="DonationAnimal"
                        />{" "}
                        Sehri
                      </label>
                      <label className="px-2">
                        <input
                          type="radio"
                          value="Goat"
                          name="DonationAnimal"
                        />{" "}
                        Aftari + Dinner
                      </label>
                    </div>
                    <div className="px-3 py-1">
                      <label className="px-2">
                        I Want to Sponser
                        <button className="partnerBtn">-</button>
                        <input
                          style={{ width: "50px", padding: "6px" }}
                          type="number"
                          min="0"
                        />
                        <button className="partnerBtn">+</button>
                        person
                      </label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-1 px-3">
                      Amount Payable{" "}
                      <span>
                        {" "}
                        PKR{" "}
                        <span
                          style={{ fontSize: "1.2em" }}
                          className="text-danger font-weight-bold border"
                        >
                          6500
                        </span>{" "}
                        /-{" "}
                      </span>
                      <button className="prevbtn">Donate</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card drawerCard border-0 mb-2 shadow">
                <div class="py-3" id="headingThree">
                  <h5
                    class="collapsed donationCardHeading"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    class="mb-0"
                  >
                    <span>
                      <FaDonate />{" "}
                    </span>
                    <span>SMIT PROGRAM</span>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p style={{ fontSize: ".8em" }}>
                      Most parents encourage their children to dream big. And
                      why shouldn’t they? Life is full of endless possibilities,
                      and every parent believes their child has a right to be
                      happy and successful. Yet, all around us are children who
                      can’t even dream of a better life. For just Rs.
                      1,600/month, you can give a child, born without privilege
                      and opportunity, the power to realise her dream
                    </p>
                    <p style={{ fontSize: ".8em" }}>
                      One student expense PKR 50,000 Monthly
                    </p>
                    <div className="px-3 py-1">
                      <label className="px-2">
                        I want to Sponsor
                        <button className="partnerBtn">-</button>
                        <input
                          style={{ width: "50px", padding: "6px" }}
                          type="number"
                          min="0"
                        />
                        <button className="partnerBtn">+</button>
                        SMIT Students
                      </label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-1 px-3">
                      Amount Payable{" "}
                      <span>
                        {" "}
                        PKR{" "}
                        <span
                          style={{ fontSize: "1.2em" }}
                          className="text-danger font-weight-bold border"
                        >
                          6500
                        </span>{" "}
                        /-{" "}
                      </span>
                      <button className="prevbtn">Donate</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card drawerCard border-0 mb-2 shadow">
                <div class="py-3" id="headingTen">
                  <h5
                    class="collapsed donationCardHeading"
                    data-toggle="collapse"
                    data-target="#collapseTen"
                    aria-expanded="true"
                    aria-controls="collapseTen"
                    class="mb-0"
                  >
                    <span>
                      <FaDonate />{" "}
                    </span>
                    <span>Sayalni Dastarkhuwan</span>
                  </h5>
                </div>

                <div
                  id="collapseTen"
                  class="collapse"
                  aria-labelledby="headingSeven"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p style={{ fontSize: ".8em" }}>
                      Most parents encourage their children to dream big. And
                      why shouldn’t they? Life is full of endless possibilities,
                      and every parent believes their child has a right to be
                      happy and successful. Yet, all around us are children who
                      can’t even dream of a better life. For just Rs.
                      1,600/month, you can give a child, born without privilege
                      and opportunity, the power to realise her dream
                    </p>
                    <p style={{ fontSize: ".8em" }}>
                      One Person food for 01 time PKR{" "}
                      <span
                        style={{ fontSize: "1.2em" }}
                        className="text-danger font-weight-bold border"
                      >
                        50
                      </span>
                    </p>
                    <div className="px-3 py-1">
                      <label className="px-2">
                        I want to Sponsor
                        <button className="partnerBtn">-</button>
                        <input
                          style={{ width: "50px", padding: "6px" }}
                          type="number"
                          min="0"
                        />
                        <button className="partnerBtn">+</button>
                        People
                      </label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-1 px-3">
                      Amount Payable{" "}
                      <span>
                        {" "}
                        PKR{" "}
                        <span
                          style={{ fontSize: "1.2em" }}
                          className="text-danger font-weight-bold border"
                        >
                          6500
                        </span>{" "}
                        /-{" "}
                      </span>
                      <button className="prevbtn">Donate</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div id="accordion">
              <div class="card drawerCard border-0 mb-2 shadow">
                <div class="py-3" id="headingFour">
                  <h5
                    class="collapsed donationCardHeading"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                    class="mb-0"
                  >
                    <span>
                      <FaDonate />{" "}
                    </span>{" "}
                    Kifalat Program
                  </h5>
                </div>

                <div
                  id="collapseFour"
                  class="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p style={{ fontSize: ".8em" }}>
                      Most parents encourage their children to dream big. And
                      why shouldn’t they? Life is full of endless possibilities,
                      and every parent believes their child has a right to be
                      happy and successful. Yet, all around us are children who
                      can’t even dream of a better life. For just Rs.
                      1,600/month, you can give a child, born without privilege
                      and opportunity, the power to realise her dream
                    </p>
                    <p style={{ fontSize: ".8em" }}>
                      One Family Kifalat Expense Monthly PKR{" "}
                      <span
                        style={{ fontSize: "1.5em" }}
                        className="text-danger font-weight-bold border"
                      >
                        25,000
                      </span>
                    </p>
                    <div className="px-3 py-1">
                      <label className="px-2">
                        I Want to Sponser
                        <button className="partnerBtn">-</button>
                        <input
                          style={{ width: "50px", padding: "6px" }}
                          type="number"
                          min="0"
                        />
                        <button className="partnerBtn">+</button>
                        Families
                      </label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-1 px-3">
                      Amount Payable{" "}
                      <span>
                        {" "}
                        PKR{" "}
                        <span
                          style={{ fontSize: "1.2em" }}
                          className="text-danger font-weight-bold border"
                        >
                          6500
                        </span>{" "}
                        /-{" "}
                      </span>
                      <button className="prevbtn">Donate</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card drawerCard border-0 mb-2 shadow">
                <div class="py-3" id="headingFive">
                  <h5
                    class="collapsed donationCardHeading"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                    class="mb-0"
                  >
                    <span>
                      <FaDonate />{" "}
                    </span>{" "}
                    Education Support Program
                  </h5>
                </div>
                <div
                  id="collapseFive"
                  class="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p style={{ fontSize: ".8em" }}>
                      Most parents encourage their children to dream big. And
                      why shouldn’t they? Life is full of endless possibilities,
                      and every parent believes their child has a right to be
                      happy and successful.
                      <br /> Yet, all around us are children who can’t even
                      dream of a better life. For just Rs. 1,600/month, you can
                      give a child, born without privilege and opportunity, the
                      power to realise her dream
                    </p>
                    <div>
                      <div>
                        <div>
                          <label>
                            <input type="radio" name="educationtype" /> Support
                            a Child Education
                          </label>
                        </div>
                        <div>
                          <label>
                            <input type="radio" name="educationtype" /> Support
                            a Classroom
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="px-2">
                          I want to support the Education of
                          <button className="partnerBtn">-</button>
                          <input
                            style={{ width: "50px", padding: "6px" }}
                            type="number"
                            min="0"
                          />
                          <button className="partnerBtn">+</button>
                          Child
                        </label>
                      </div>
                      <div className="text-right py-1 px-3">
                        <button className="prevbtn">Donate</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card drawerCard border-0 mb-2 shadow">
                <div class="py-3" id="headingSix">
                  <h5
                    class="collapsed donationCardHeading"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                    class="mb-0"
                  >
                    <span>
                      <FaDonate />{" "}
                    </span>{" "}
                    Wedding Support Program
                  </h5>
                </div>
                <div
                  id="collapseSix"
                  class="collapse"
                  aria-labelledby="headingSix"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p style={{ fontSize: ".8em" }}>
                      Most parents encourage their children to dream big. And
                      why shouldn’t they? Life is full of endless possibilities,
                      and every parent believes their child has a right to be
                      happy and successful. Yet, all around us are children who
                      can’t even dream of a better life. For just Rs.
                      1,600/month, you can give a child, born without privilege
                      and opportunity, the power to realise her dream
                    </p>
                    <p style={{ fontSize: ".8em" }}>
                      One Poor girl Wedding Expense PKR{" "}
                      <span
                        style={{ fontSize: "1.2em" }}
                        className="text-danger font-weight-bold border"
                      >
                        {" "}
                        35,000 - 50,000
                      </span>{" "}
                    </p>
                    <div className="px-3 py-1">
                      <label className="px-2">
                        I want to Sponsor
                        <input
                          style={{ width: "70px" }}
                          size="2"
                          type="number"
                          min="0"
                        />{" "}
                        girl Wedding
                      </label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-1 px-3">
                      Amount Payable{" "}
                      <span>
                        {" "}
                        PKR{" "}
                        <span
                          style={{ fontSize: "1.2em" }}
                          className="text-danger font-weight-bold border"
                        >
                          6500
                        </span>{" "}
                        /-{" "}
                      </span>
                      <button className="prevbtn">Donate</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card drawerCard border-0 mb-2 shadow">
                <div class="py-3" id="headingEleven">
                  <h5
                    class="collapsed donationCardHeading"
                    data-toggle="collapse"
                    data-target="#collapseEleven"
                    aria-expanded="false"
                    aria-controls="collapseEleven"
                    class="mb-0"
                  >
                    <span>
                      <FaDonate />{" "}
                    </span>{" "}
                    Monthly Ration Support Program
                  </h5>
                </div>
                <div
                  id="collapseEleven"
                  class="collapse"
                  aria-labelledby="headingEight"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p style={{ fontSize: ".8em" }}>
                      Most parents encourage their children to dream big. And
                      why shouldn’t they? Life is full of endless possibilities,
                      and every parent believes their child has a right to be
                      happy and successful. Yet, all around us are children who
                      can’t even dream of a better life. For just Rs.
                      1,600/month, you can give a child, born without privilege
                      and opportunity, the power to realise her dream
                    </p>
                    <p style={{ fontSize: ".8em" }}>
                      One Family Ration Expense Monthly PKR 3,000 - 12,000
                    </p>
                    <div className="px-3 py-1">
                      <label className="px-2">
                        I want to Sponsor
                        <button className="partnerBtn">-</button>
                        <input
                          style={{ width: "50px", padding: "6px" }}
                          type="number"
                          min="0"
                        />
                        <button className="partnerBtn">+</button>
                        Families monthly Ration
                      </label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-1 px-3">
                      Amount Payable{" "}
                      <span>
                        {" "}
                        PKR{" "}
                        <span
                          style={{ fontSize: "1.2em" }}
                          className="text-danger font-weight-bold border"
                        >
                          6500
                        </span>{" "}
                        /-{" "}
                      </span>
                      <button className="prevbtn">Donate</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div id="accordion">
              <div class="card drawerCard border-0 mb-2 shadow">
                <div class="py-3" id="headingSeven">
                  <h5
                    class="collapsed donationCardHeading"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="true"
                    aria-controls="collapseSeven"
                    class="mb-0"
                  >
                    <span>
                      <FaDonate />{" "}
                    </span>{" "}
                    Ramadan Ration Package
                  </h5>
                </div>

                <div
                  id="collapseSeven"
                  class="collapse"
                  aria-labelledby="headingSeven"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p style={{ fontSize: ".8em" }}>
                      Most parents encourage their children to dream big. And
                      why shouldn’t they? Life is full of endless possibilities,
                      and every parent believes their child has a right to be
                      happy and successful. Yet, all around us are children who
                      can’t even dream of a better life. For just Rs.
                      1,600/month, you can give a child, born without privilege
                      and opportunity, the power to realise her dream
                    </p>
                    <p style={{ fontSize: ".8em" }}>
                      One Family Ration Expense PKR{" "}
                      <span
                        style={{ fontSize: "1.2em" }}
                        className="text-danger font-weight-bold border"
                      >
                        4,500
                      </span>
                    </p>
                    <div className="px-3 py-1">
                      <label className="px-2">
                        I want to support the
                        <button className="partnerBtn">-</button>
                        <input
                          style={{ width: "50px", padding: "6px" }}
                          type="number"
                          min="0"
                        />
                        <button className="partnerBtn">+</button>
                        Families
                      </label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-1 px-3">
                      Amount Payable{" "}
                      <span>
                        {" "}
                        PKR{" "}
                        <span
                          style={{ fontSize: "1.2em" }}
                          className="text-danger font-weight-bold border"
                        >
                          6500
                        </span>{" "}
                        /-{" "}
                      </span>
                      <button className="prevbtn">Donate</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card drawerCard border-0 mb-2 shadow">
                <div class="py-3" id="headingEight">
                  <h5
                    class="collapsed donationCardHeading"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                    class="mb-0"
                  >
                    <span>
                      <FaDonate />{" "}
                    </span>{" "}
                    Eye Patients
                  </h5>
                </div>
                <div
                  id="collapseEight"
                  class="collapse"
                  aria-labelledby="headingEight"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p style={{ fontSize: ".8em" }}>
                      Most parents encourage their children to dream big. And
                      why shouldn’t they? Life is full of endless possibilities,
                      and every parent believes their child has a right to be
                      happy and successful. Yet, all around us are children who
                      can’t even dream of a better life. For just Rs.
                      1,600/month, you can give a child, born without privilege
                      and opportunity, the power to realise her dream
                    </p>
                    <p style={{ fontSize: ".8em" }}>Eye patients expense PKR</p>
                    <div className="px-3 py-1">
                      <label className="px-2">
                        I want to support the
                        <button className="partnerBtn">-</button>
                        <input
                          style={{ width: "50px", padding: "6px" }}
                          type="number"
                          min="0"
                        />
                        <button className="partnerBtn">+</button>
                        Eye patients
                      </label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-1 px-3">
                      Amount Payable{" "}
                      <span>
                        {" "}
                        PKR{" "}
                        <span
                          style={{ fontSize: "1.2em" }}
                          className="text-danger font-weight-bold border"
                        >
                          6500
                        </span>{" "}
                        /-{" "}
                      </span>
                      <button className="prevbtn">Donate</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card drawerCard border-0 mb-2 shadow">
                <div class="py-3" id="headingNine">
                  <h5
                    class="collapsed donationCardHeading"
                    data-toggle="collapse"
                    data-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                    class="mb-0"
                  >
                    <span>
                      <FaDonate />{" "}
                    </span>{" "}
                    Vocational Training Program
                  </h5>
                </div>
                <div
                  id="collapseNine"
                  class="collapse"
                  aria-labelledby="headingNine"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p style={{ fontSize: ".8em" }}>
                      Most parents encourage their children to dream big. And
                      why shouldn’t they? Life is full of endless possibilities,
                      and every parent believes their child has a right to be
                      happy and successful. Yet, all around us are children who
                      can’t even dream of a better life. For just Rs.
                      1,600/month, you can give a child, born without privilege
                      and opportunity, the power to realise her dream
                    </p>
                    <p style={{ fontSize: ".8em" }}>
                      One Student Technical Course Expense PKR 25,000
                    </p>
                    <div className="px-3 py-1">
                      <label className="px-2">
                        I want to support the
                        <button className="partnerBtn">-</button>
                        <input
                          style={{ width: "50px", padding: "6px" }}
                          type="number"
                          min="0"
                        />
                        <button className="partnerBtn">+</button>
                        Hepatitis patients
                      </label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-1 px-3">
                      Amount Payable{" "}
                      <span>
                        {" "}
                        PKR{" "}
                        <span
                          style={{ fontSize: "1.2em" }}
                          className="text-danger font-weight-bold border"
                        >
                          6500
                        </span>{" "}
                        /-{" "}
                      </span>
                      <button className="prevbtn">Donate</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card drawerCard border-0 mb-2 shadow">
                <div class="py-3" id="headingTwelve">
                  <h5
                    class="collapsed donationCardHeading"
                    data-toggle="collapse"
                    data-target="#collapseTwelve"
                    aria-expanded="false"
                    aria-controls="collapseTwelve"
                    class="mb-0"
                  >
                    <span>
                      <FaDonate />{" "}
                    </span>{" "}
                    Support Hepatitis Patients
                  </h5>
                </div>
                <div
                  id="collapseTwelve"
                  class="collapse"
                  aria-labelledby="headingTwelve"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p style={{ fontSize: ".8em" }}>
                      Most parents encourage their children to dream big. And
                      why shouldn’t they? Life is full of endless possibilities,
                      and every parent believes their child has a right to be
                      happy and successful. Yet, all around us are children who
                      can’t even dream of a better life. For just Rs.
                      1,600/month, you can give a child, born without privilege
                      and opportunity, the power to realise her dream
                    </p>
                    <p style={{ fontSize: ".8em" }}>
                      One Family Ration Expense Monthly PKR 3,000 - 12,000
                    </p>
                    <div className="px-3 py-1">
                      <label className="px-2">
                        I want to support the
                        <button className="partnerBtn">-</button>
                        <input
                          style={{ width: "50px", padding: "6px" }}
                          type="number"
                          min="0"
                        />
                        <button className="partnerBtn">+</button>
                        Hepatitis patients
                      </label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-1 px-3">
                      Amount Payable{" "}
                      <span>
                        {" "}
                        PKR{" "}
                        <span
                          style={{ fontSize: "1.2em" }}
                          className="text-danger font-weight-bold border"
                        >
                          6500
                        </span>{" "}
                        /-{" "}
                      </span>
                      <button className="prevbtn">Donate</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          visible={this.state.visible}
          width="400"
          height="300"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <h1>Title</h1>
            <p>Some Contents</p>
            <a href="javascript:void(0);" onClick={() => this.closeModal()}>
              Close
            </a>
          </div>
        </Modal>
        {/* Donate Cards End */}
      </div>
    );
  }
}
