import React from "react";
import doorstep from "../../images/homeimages/doorstep.png";
import collectioncenter from "../../images/homeimages/collectioncenter.png";
import banktransfer from "../../images/homeimages/banktransfer.png";
import MainDonationForm from "./mainDonationForm";
import {
  FaDonate,
  FaBreadSlice,
  FaCheese,
  FaBookOpen,
  FaEye,
  FaLaptop,
  FaCouch,
  FaCogs,
  FaUtensils,
  FaPills,
} from "react-icons/fa";
import winterblacnket from "../../images/winter-blanket.png";
import Modal from "react-awesome-modal";

export default class DonationDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStatus: this.props.status,
      visible: false,
      aqiqaDropDown: [
        { value: 8000, donationCate: "Aqiqa Goat (8000)" },
        { value: 9000, donationCate: "Aqiqa Goat (9000)" },
        { value: 10000, donationCate: "Aqiqa Goat (10000)" },
        { value: 12000, donationCate: "Aqiqa Goat (12000)" },
        { value: 15000, donationCate: "Aqiqa Goat (15000)" },
        { value: 40000, donationCate: "Aqiqa Cow (40000)" },
        { value: 45000, donationCate: "Aqiqa Cow (45000)" },
        { value: 50000, donationCate: "Aqiqa Cow (50000)" },
        { value: 55000, donationCate: "Aqiqa Camel (55000)" },
        { value: 60000, donationCate: "Aqiqa Camel (60000)" },
        { value: 65000, donationCate: "Aqiqa Camel (65000)" },
      ],
      sadqaDropDown: [
        { value: 5500, donationCate: "Sadqa Goat (5500)" },
        { value: 6000, donationCate: "Sadqa Goat (6000)" },
        { value: 7000, donationCate: "Sadqa Goat (7000)" },
        { value: 8000, donationCate: "Sadqa Goat (8000)" },
        { value: 9000, donationCate: "Sadqa Goat (9000)" },
        { value: 10000, donationCate: "Sadqa Goat (10000)" },
        { value: 12000, donationCate: "Sadqa Goat (12000)" },
        { value: 15000, donationCate: "Sadqa Goat (15000)" },
        { value: 30000, donationCate: "Sadqa Cow (30000)" },
        { value: 35000, donationCate: "Sadqa Cow (35000)" },
        { value: 40000, donationCate: "Sadqa Cow (40000)" },
        { value: 45000, donationCate: "Sadqa Cow (45000)" },
        { value: 50000, donationCate: "Sadqa Cow (50000)" },
        { value: 55000, donationCate: "Sadqa Camel (55000)" },
        { value: 60000, donationCate: "Sadqa Camel (60000)" },
        { value: 65000, donationCate: "Sadqa Camel (65000)" },
        { value: 400, donationCate: "Sadqa Hen (400)" },
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
      kifalat: 2500,
      donationType: "",
      donateCategoryName: "",
      currentDropdownList: [],
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
        {/* <div>
          <img
            width="100%"
            height="600"
            alt=""
            src="http://flood-rescue.com/img/essay-help-needy-people-35.jpg"
          />
        </div> */}
        {/* Campaign Start */}
        <div className="container py-5">
          <h3 className="color">
            <b>
              <u>DONATION DRIVE OF RAMAZAN</u>
            </b>
          </h3>
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <div className="p-5" style={{ backgroundColor: "#e2e2e2" }}>
                  <button
                    className="catBtn"
                    onClick={() => {
                      this.setState({
                        donationType: "sadqa&aqeeqa",
                        donateCategoryName: "Sadqa & Aqeeqa",
                      });
                      this.openModal();
                    }}
                  >
                    <span className="catIcon">
                      <FaDonate />
                    </span>
                    Sadqa & Aqeeqa Animals
                  </button>
                  <button
                    className="catBtn"
                    onClick={() => {
                      this.setState({
                        donationType: "kifalatProgram",
                        donateCategoryName: "Kifalat Program",
                      });
                      this.openModal();
                    }}
                  >
                    <span className="catIcon">
                      <FaBreadSlice />
                    </span>
                    Kifalat programm
                  </button>
                  <button
                    className="catBtn"
                    onClick={() => {
                      this.setState({
                        donationType: "ramzanRashan",
                        donateCategoryName: "Ramzan Rashan Program",
                      });
                      this.openModal();
                    }}
                  >
                    <span className="catIcon">
                      <FaCheese />
                    </span>
                    Ramzan Rashan Package
                  </button>
                  <button
                    className="catBtn"
                    onClick={() => {
                      this.setState({
                        donationType: "sehriAftari",
                        donateCategoryName: "Sehri And Aftari",
                      });
                      this.openModal();
                    }}
                  >
                    <span className="catIcon">
                      <FaBreadSlice />
                    </span>
                    Sehri & Aftari Support
                  </button>
                  <button
                    className="catBtn"
                    onClick={() => {
                      this.setState({
                        donationType: "educationProgram",
                        donateCategoryName: "Education Program",
                      });
                      this.openModal();
                    }}
                  >
                    <span className="catIcon">
                      <FaBookOpen />
                    </span>
                    Education Support Program
                  </button>
                  <button
                    className="catBtn"
                    onClick={() => {
                      this.setState({
                        donationType: "eyePatients",
                        donateCategoryName: "Eye Patients Support",
                      });
                      this.openModal();
                    }}
                  >
                    <span className="catIcon">
                      <FaEye />
                    </span>
                    Eye Patients
                  </button>
                  <button
                    className="catBtn"
                    onClick={() => {
                      this.setState({
                        donationType: "ramzanRashan",
                        donateCategoryName: "Ramzan Rashan Program",
                      });
                      this.openModal();
                    }}
                  >
                    <span className="catIcon">
                      <FaLaptop />
                    </span>
                    SMIT Program
                  </button>
                  <button
                    className="catBtn"
                    onClick={() => {
                      this.setState({
                        donationType: "weddingSupport",
                        donateCategoryName: "Weddign Support Program",
                      });
                      this.openModal();
                    }}
                  >
                    <span className="catIcon">
                      <FaCouch />
                    </span>
                    Weddign Support Program
                  </button>
                  <button
                    className="catBtn"
                    onClick={() => {
                      this.setState({
                        donationType: "vocationalTraining",
                        donateCategoryName: "Vocational Training Program",
                      });
                      this.openModal();
                    }}
                  >
                    <span className="catIcon">
                      <FaCogs />
                    </span>
                    Vocational training Programm
                  </button>
                  <button
                    className="catBtn"
                    onClick={() => {
                      this.setState({
                        donationType: "saylaniDasterkhwan",
                        donateCategoryName: "Saylani Dastarkhwan Support",
                      });
                      this.openModal();
                    }}
                  >
                    <span className="catIcon">
                      <FaUtensils />
                    </span>
                    Saylani Dastarkhwan
                  </button>
                  <button
                    className="catBtn"
                    onClick={() => {
                      this.setState({
                        donationType: "monthlyPackage",
                        donateCategoryName: "Monthly Rashan Package",
                      });
                      this.openModal();
                    }}
                  >
                    <span className="catIcon">
                      <FaBreadSlice />
                    </span>
                    Monthly Rashan Support
                  </button>
                  <button
                    className="catBtn"
                    onClick={() => {
                      this.setState({
                        donationType: "supportHepatitis",
                        donateCategoryName: "Support Hepatitis Program",
                      });
                      this.openModal();
                    }}
                  >
                    <span className="catIcon">
                      <FaPills />
                    </span>
                    Support Hepatitis Patients
                  </button>
                </div>
              </div>
            </div>
            {/* Campaign Details */}
            <div className="col-md-6">
              <div
                className=" backgroundLight mb-3 p-3"
                style={{ backgroundColor: "#e2e2e2" }}
              >
                <div>
                  <label className="font-weight-bold">
                    <input
                      type="radio"
                      value="General Support Donation"
                      name="DonationType"
                    />{" "}
                    General Support Donation
                  </label>
                </div>
                <div>
                  <label className="font-weight-bold">
                    <input
                      type="radio"
                      value="Donate a Blanket"
                      name="DonationType"
                    />{" "}
                    Donate a Blanket
                  </label>
                </div>
                <div>
                  <label className="font-weight-bold">
                    <input
                      type="radio"
                      value="Donate Two Blanket"
                      name="DonationType"
                    />{" "}
                    Donate Two Blanket
                  </label>
                </div>
              </div>
              <div
                className="  backgroundLight mb-3 p-3 font-weight-bold"
                style={{ backgroundColor: "#e2e2e2" }}
              >
                <h5 className="font-weight-bold">I Want to Donate</h5>
                <input maxLength="5" min="0" size="2" type="number" /> Blanket
              </div>
              <div
                className="  backgroundLight mb-3 p-3"
                style={{ backgroundColor: "#e2e2e2" }}
              >
                <div>
                  <button
                    className="btn-fluid"
                    style={{
                      backgroundColor: "#0863ce",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Give Once
                  </button>
                  <button
                    className="btn-fluid"
                    style={{
                      backgroundColor: "white",
                      color: "#0863ce",
                      border: "none",
                    }}
                  >
                    Monthly
                  </button>
                </div>
                <div className="py-4">
                  <h5>
                    <b>
                      Bank tax{" "}
                      <span className="text-primary text-bold">PKR</span>
                    </b>
                  </h5>
                  <h5>
                    <b>My donation amount is </b>
                    <br />{" "}
                    <span className="text-primary text-bold">
                      <b>PKR</b>
                    </span>
                  </h5>
                </div>
                <div className="py-1">
                  <label>
                    <input
                      type="radio"
                      value="Treat this as Zakat"
                      name="DonationCategory"
                    />{" "}
                    <b>Treat this as Zakat </b>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="text-center text-muted">
                    <p>
                      <b>
                        Ways to Donate This is a secure SSL encrypted payment.
                      </b>
                    </p>
                  </div>
                </div>
                <div className="text-right col-md-6">
                  <button className="prevbtn px-5">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Campaign End */}
        {/* Ways to Donate Start */}
        <div
          className="container-fluid py-5"
          style={{ backgroundColor: "#e2e2e2" }}
        >
          <div className="">
            <h2 className="text-center color">
              <b>WAYS TO DONATE</b>
            </h2>
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
                <h4>
                  <b>Cheque or Cash Pickup</b>
                </h4>
                <p>
                  <b>
                    To have your donation in the form of a cheque or cash picked
                    from your doorstep, call our toll-free helpline at
                    <a style={{ fontSize: "1.3em" }} href="tel:+92311729526">
                      &nbsp; 03-111-729-526
                    </a>
                  </b>
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
                <h4>
                  <b>Collection Center</b>
                </h4>
                <p>
                  <b>
                    {" "}
                    Visit our collection centers in all over Pakistan.
                    <a style={{ fontSize: "1.3em" }} href="tel:+92311729526">
                      &nbsp; Find your nearest center now!
                    </a>
                  </b>
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
                <h4>
                  <b>Direct Bank Deposits or Transfer</b>
                </h4>
                <p>
                  <b>
                    {" "}
                    Transfer your Zakat or donations in favour of The Citizens
                    Foundation in our
                    <a style={{ fontSize: "1.3em" }} href="#">
                      &nbsp; selected banks
                    </a>
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Ways to Donate End */}

        <Modal
          visible={this.state.visible}
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div
            className="modalParent"
            style={{ height: "95vh", width: "70vw", overflow: "scroll" }}
          >
            <div className="container p-4">
              <h1>{this.state.donateCategoryName}</h1>
              {(this.state.donationType = "sadqa&aqeeqa") ? (
                <div className="row">
                  <div className="col-md-6 p-3">
                    <div>
                      <label>
                        <input
                          onChange={() =>
                            this.setState({
                              currentDropdownList: this.state.aqiqaDropDown,
                            })
                          }
                          type="radio"
                          name="sadqa&Aqeeqa"
                        />{" "}
                        Aqeeqa
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          onChange={() =>
                            this.setState({
                              currentDropdownList: this.state.sadqaDropDown,
                            })
                          }
                          type="radio"
                          name="sadqa&Aqeeqa"
                        />{" "}
                        Sadqa
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 p-3">
                    <select className="inp">
                      {this.state.currentDropdownList.map((e, i) => {
                        return <option key={i}>{e.donationCate}</option>;
                      })}
                    </select>
                  </div>
                  <div className="col-md-6 p-3">
                    <button>+</button>
                    <input type="number" min="0" />
                    <button>-</button>
                  </div>
                  <div className="col-md-6 p-3">
                    Amount Payable:{" "}
                    <input placeholder="0" type="number" disabled min="0" />
                    <div>
                      {" "}
                      <button className="prevbtn">Donate</button>
                    </div>
                  </div>
                </div>
              ) : null}
              {(this.state.donationType = "kifalatProgram") ? (
                <div>
                  <h3>One Family Kifalat Expense Monthly PKR 25,000</h3>
                  <div>
                    <p>
                      I want to Sponser{" "}
                      <input type="number" size="2" min="0" placeholder="0" />{" "}
                    </p>
                  </div>
                  <p className="text-success">Amount payable</p>
                  <button className="prevbtn">Donate</button>
                </div>
              ) : null}
              {
                (this.state.donationType = "ramzanRashan" ? (
                  <div>
                    <h3>One Ramzan Rashan package Expense PKR 4500/-</h3>
                    <div>
                      <p>
                        I want to Support the{" "}
                        <input type="number" size="2" min="0" placeholder="0" />{" "}
                        families
                      </p>
                    </div>
                    <p className="text-success">Amount payable</p>
                    <button className="prevbtn">Donate</button>
                  </div>
                ) : null)
              }
              {
                <div>
                  <h3>One Ramzan Rashan package Expense PKR 4500/-</h3>
                  <div>
                    <p>
                      I want to Support the{" "}
                      <input type="number" size="2" min="0" placeholder="0" />{" "}
                      families
                    </p>
                  </div>
                  <p className="text-success">Amount payable</p>
                  <button className="prevbtn">Donate</button>
                </div>
              }
              {
                <div>
                  <h3>Sehri and Aftari for on person expense is 600</h3>
                  <div>
                    <p>
                      <label>
                        {" "}
                        <input type="radio" name="sehri&aftari" />
                        Sehri
                      </label>
                      <br />
                      <label>
                        <input type="radio" name="sehri&aftari" />
                        Aftari + Dinner{" "}
                      </label>
                    </p>
                    <p>
                      I Want to Sponser{" "}
                      <input type="number" size="2" min="0" placeholder="0" />{" "}
                      person
                    </p>
                  </div>
                  <p className="text-success">Amount payable</p>
                  <button className="prevbtn">Donate</button>
                </div>
              }
              {
                <div>
                  <h3>Education Support</h3>
                  <div>
                    <p>
                      <label>
                        {" "}
                        <input name="educationSupport" type="radio" />
                        Support a children Education
                      </label>
                      <br />
                      <label>
                        <input name="educationSupport" type="radio" />
                        Support a Classroom{" "}
                      </label>
                    </p>
                    <p>
                      I want to support the Education of{" "}
                      <input type="number" size="2" min="0" placeholder="0" />{" "}
                      Child
                    </p>
                  </div>
                  <p className="text-success">Amount payable</p>
                  <button className="prevbtn">Donate</button>
                </div>
              }
              {
                <div>
                  <h3>Eye patients expense PKR</h3>
                  <div>
                    <p>
                      I want to support the{" "}
                      <input type="number" size="2" min="0" placeholder="0" />{" "}
                      Eye patients
                    </p>
                  </div>
                  <p className="text-success">Amount payable</p>
                  <button className="prevbtn">Donate</button>
                </div>
              }
              {
                <div>
                  <h3>One student expense PKR 50,000 Monthly</h3>
                  <div>
                    <p>
                      I want to Sponsor{" "}
                      <input type="number" size="2" min="0" placeholder="0" />{" "}
                      SMIT Students
                    </p>
                  </div>
                  <p className="text-success">Amount payable</p>
                  <button className="prevbtn">Donate</button>
                </div>
              }
              {
                <div>
                  <h3>One Poor girl Wedding Expense PKR 35,000 - 50,000</h3>
                  <div>
                    <p>
                      I want to Sponsor{" "}
                      <input type="number" size="2" min="0" placeholder="0" />{" "}
                      girl Wedding
                    </p>
                  </div>
                  <p className="text-success">Amount payable</p>
                  <button className="prevbtn">Donate</button>
                </div>
              }
              {
                <div>
                  <h3>One Student Technical Course Expense PKR 25,000</h3>
                  <div>
                    <p>
                      I want to support the{" "}
                      <input type="number" size="2" min="0" placeholder="0" />{" "}
                      Hepatitis patients
                    </p>
                  </div>
                  <p className="text-success">Amount payable</p>
                  <button className="prevbtn">Donate</button>
                </div>
              }
              {
                <div>
                  <h3>One Person food for 01 time PKR 50</h3>
                  <div>
                    <p>
                      I want to Sponsor{" "}
                      <input type="number" size="2" min="0" placeholder="0" />{" "}
                      People
                    </p>
                  </div>
                  <p className="text-success">Amount payable</p>
                  <button className="prevbtn">Donate</button>
                </div>
              }
              {
                <div>
                  <h3>One Family Ration Expense Monthly PKR 3,000 - 12,000</h3>
                  <div>
                    <p>
                      I want to Sponsor{" "}
                      <input type="number" size="2" min="0" placeholder="0" />{" "}
                      Families monthly Ration
                    </p>
                  </div>
                  <p className="text-success">Amount payable</p>
                  <button className="prevbtn">Donate</button>
                </div>
              }
              {
                <div>
                  <h3>One Family Ration Expense Monthly PKR 3,000 - 12,000</h3>
                  <div>
                    <p>
                      I want to Sponsor{" "}
                      <input type="number" size="2" min="0" placeholder="0" />{" "}
                      Families monthly Ration
                    </p>
                  </div>
                  <p className="text-success">Amount payable</p>
                  <button className="prevbtn">Donate</button>
                </div>
              }
            </div>

            <button className="closebtn" onClick={() => this.closeModal()}>
              X
            </button>
          </div>
        </Modal>

        {/* Donate Cards Start */}

        {/* =============================================================== */}
        {/* =============================================================== */}
        {/* =========================Drawer================================ */}
        {/* =============================================================== */}
        {/* =============================================================== */}
        {/* <div className="row p-0 py-5 bg-light m-0">
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
          <div className="col-md-4">
            <div id="accordion"></div>
          </div>
        </div> */}

        {/* Donate Cards End */}
      </div>
    );
  }
}