import React from "react";
import "./donate.css";
import paypal from "../../images/paypal.png";
import { connect } from "react-redux";
import { DonaListGet } from "../../Redux/action/donationAction";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import cover from "../../images/campaignimages/cover.png";
import BankDetail from "../../components/donate/bankdetails";

class DonationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      name: "",
      email: "",
      amount: "",
      amountPayable: 0,
      donationMethod: "Credit Card",
      donationType: "Sadqa",
      donationCategory: "",
      donationValue: 0,
      quan: "",
      amount: "",
      contNumber: "",
      remarks: "",
      title: "",
      chkamount: false,
      donationDetailForm: false,
      donationForm: true,
      amountBox: false,
      donationFormDetail: false,
      dntionTypeControl: true,
      dntionCategoryControl: false,
      dntionQuantityControl: false,
      dntionDetailControl: false,
      // donation new state start
      currentDropDownValue: "",
      categoryAmount: 0,
      donationQuantity: 1,
      donationSubCategory: "",
      // donation new state end
      campaignDetails: [
        { campaignTitle: "Blankets", qty: 2, amount: 1200 },
        { campaignTitle: "Blankets", qty: 5, amount: 1200 },
        { campaignTitle: "Blankets", qty: 12, amount: 1200 },
      ],
      aqiqaDropDown: [
        "Aqiqa Goat (8,000)",
        "Aqiqa Goat (9,000)",
        "Aqiqa Goat (10,000)",
        "Aqiqa Goat (12,000)",
        "Aqiqa Goat (15,000)",
        "Aqiqa Cow (40,000)",
        "Aqiqa Cow (45,000)",
        "Aqiqa Cow (50,000)",
        "Aqiqa Camel (55,000)",
        "Aqiqa Camel (60,000)",
        "Aqiqa Camel (65,000)",
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
      donationList: [
        {
          donationType: "Sadqa",
          values: [
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
        },
        {
          donationType: "Aqiqa",
          values: [
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
        },
        {
          donationType: "Campaign",
          values: [
            {
              value: 1200,
              donationCate: "Blanket",
            },
          ],
        },
        {
          donationType: "Other Donation",
          values: [
            { value: 0, donationCate: "Donation" },
            { value: 0, donationCate: "Marriage" },
            { value: 0, donationCate: "Zakat" },
            { value: 0, donationCate: "Food" },
            { value: 0, donationCate: "Education" },
            { value: 0, donationCate: "Water Well" },
            { value: 0, donationCate: "Monthly Rashan" },
            { value: 0, donationCate: "Thar Fund" },
            { value: 0, donationCate: "Flood Victim" },
            { value: 0, donationCate: "Fitra (Overseas)" },
            { value: 0, donationCate: "Saaf Pani" },
            { value: 0, donationCate: "Heat Stroke" },
            { value: 0, donationCate: "Syrian Crisis" },
            { value: 0, donationCate: "Masjid Construction" },
            { value: 0, donationCate: "Medical Projects" },
          ],
        },
      ],
    };
  }
  donationType = (a) => {
    console.log(a);
    const { donationList } = this.state;
    this.setState({
      currentDropDownValue: a,
      donationDetailForm: true,
      donationForm: false,
      dntionCategoryControl: true,
    });
    let arr = [];
    donationList.map((e) => {
      if (e.donationType === a) {
        arr = e.values;
        this.setState({ currentData: arr });
      }
    });
  };
  selectCategory(a, b) {
    console.log(a);
    this.setState({
      categoryAmount: a,
      amountBox: true,
      donationDetailForm: false,
      dntionQuantityControl: true,
      donationSubCategory: b,
    });
    console.log(this.state.categoryAmount);
  }
  campaignDonation(campaignName, campaignQty, campaignAmount) {
    this.setState({
      currentDropDownValue: "Campaign",
      donationQuantity: campaignQty,
      dntionTypeControl: true,
      donationForm: false,
      dntionCategoryControl: true,
      dntionQuantityControl: true,
    });
    this.selectCategory(campaignAmount * campaignQty, campaignName);
  }
  componentDidMount() {
    this.props.DonaListGet();
  }

  setFieldVal = (a, b) => {
    this.setState({ [b]: a });
  };

  checkField = (a) => {
    if (a != "") {
      return false;
    }
    return true;
  };

  Submit = async () => {
    let {
      name,
      email,
      donationMethod,
      donationType,
      amountPayable,
      donationCategory,
      amount,
      donationValue,
      quan,
      contNumber,
      remarks,
    } = this.state;
    if (this.checkField(name)) {
      this.setState({ chkname: true });
      window.scrollTo(0, 100);
    } else if (this.checkField(email)) {
      this.setState({ chkemail: true });
      window.scrollTo(0, 100);
    } else if (
      this.checkField(donationCategory) ||
      donationCategory == "Select Donation Category"
    ) {
      this.setState({ chkdonationCategory: true });
      window.scrollTo(0, 300);
    } else if (
      this.checkField(donationType == "Other Donation" ? amount : quan)
    ) {
      this.setState({ chkamount: true });
      window.scrollTo(0, 700);
    } else if (this.checkField(contNumber)) {
      this.setState({ chkcontNumber: true });
      window.scrollTo(0, 800);
    } else if (this.checkField(remarks)) {
      this.setState({ chkremarks: true });
      window.scrollTo(0, 900);
    } else {
      const obj = {
        Registration: {
          Currency: "AED",
          ReturnPath: "http://www.saylaniwelfare.com/Saylani/Finalization.php",
          TransactionHint: "CPT:Y;VCC:Y;",
          OrderlD: "7210055701315195",
          Store: "0000",
          Terminal: "0000",
          Channel: "Web",
          Amount: "2.00",
          Customer: "Demo Merchant",
          OrderName: "Paybill",
          UserName: "Demo_fY9c",
          Password: "Comtrust@20182018",
        },
      };
      // //  const result = await fetch(`https://demo-ipg.ctdev.comtrust.ae:2443`)
      // let config = {
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      //     'Access-Control-Allow-Credentials': 'true',
      //     'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
      //   }
      // }

      // fetch("https://demo-ipg.ctdev.comtrust.ae:2443", { method: "POST", body: obj, config:config.headers })
      // // .then(response => response.json())
      //   .then(res => {
      //     console.log(res)
      //   }).catch((err) => {
      //     console.log("err", err)
      //   })
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: obj,
        url: "https://demo-ipg.ctdev.comtrust.ae:2443",
      };
      axios(options)
        .then((res) => {
          console.log(res, "response");
          // console.log(res.data.Transaction.TransactionID)
          // console.log(res.data.Transaction.UniqueID)
          // console.log(res.data.Transaction.PaymentPage)
          // if(res.data.Transaction.PaymentPage)
          // {
          // //  return  <Redirect to={res.data.Transaction.PaymentPortal} />
          //    // res.redirect(res.data.Transaction.PaymentPage);
          //    axios.Redirect(res.data.Transaction.PaymentPage)
          // }
          //     const objs = {
          //       "Finalization": {
          //       "TransactionID": res.data.Transaction.TransactionID,
          //       "Customer": "Demo Merchant",
          //       "UserName":"Demo_fY9c",
          //       "Password":"Comtrust@20182018"
          //       }
          //       }
          //     const optionss = {
          //       method: 'POST',
          //       headers: { 'Accept': 'application/json',
          //           'Content-Type': 'application/json', },
          //       data: objs,
          //       url:res.data.Transaction.PaymentPage,
          //     };
          //  axios(optionss)
          //  .then(res=>{
          //   console.log(res,'res')
          //  })
          //  .catch(err=>{
          //   console.log(err,'2')
          //  })
        })
        .catch((err) => {
          console.log(err);
        });

      console.log("hello world");
    }
  };

  render() {
    let {
      name,
      email,
      donationMethod,
      donationType,
      amountPayable,
      donationCategory,
      amount,
      donationValue,
      quan,
      contNumber,
      remarks,
    } = this.state;
    let quanVal = parseInt(quan) * parseInt(donationValue);
    let perc =
      donationType == "Other Donation"
        ? (parseInt(amount) / 100) * 3
        : (parseInt(quanVal) / 100) * 3;
    // console.log(quanVal, 'quanVal')
    amountPayable =
      donationType == "Other Donation"
        ? parseInt(amount) + (parseInt(amount) / 100) * 3
        : quanVal + (parseInt(quanVal) / 100) * 3;
    console.log(this.props, "this.props");
    return (
      <div>
        {/* Campaign Cover */}
        <div
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/christmas-background-with-falling-snow-snowflake-holiday-winter-merry-christmas-happy-new-year_52701-32.jpg?size=626&ext=jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="container p-5">
            <div className="row">
              <div className="col-md-5">
                <img src={cover} width="100%" />
              </div>
              <div className="col-md-7">
                <h1 className="p-2">
                  Our Donation reached <span>500000</span>
                </h1>
                <div
                  style={{ backgroundColor: "rgba(0,0,0,.1)" }}
                  className="shadow p-3 rounded"
                >
                  <h2>One Blanket Cost is Rs 1200/-</h2>
                </div>

                <div className="row">
                  {this.state.campaignDetails.map((e, i) => {
                    return (
                      <div className="col-md-6 p-3 text-center">
                        <div className="bg-light shadow rounded p-3">
                          <h3>
                            {e.qty} {e.campaignTitle}
                          </h3>
                          <button
                            onClick={() =>
                              this.campaignDonation(
                                e.campaignTitle,
                                e.qty,
                                e.amount
                              )
                            }
                            className="prevbtn"
                          >
                            Donate
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  <div className="col-md-6 p-3 text-center">
                    <div className="bg-light shadow rounded p-3">
                      <h3>Other Amount</h3>
                      <button
                        onClick={() => this.campaignDonation()}
                        className="prevbtn"
                      >
                        Donate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Steps of Donation Form */}
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-3">
              {this.state.dntionTypeControl ? (
                <div
                  onClick={() =>
                    this.setState({
                      donationForm: true,
                      donationDetailForm: false,
                      amountBox: false,
                      donationFormDetail: false,
                    })
                  }
                  className="donationStep"
                >
                  <p>
                    <span
                      style={{ fontSize: "1.3em", margin: 0 }}
                      className="qtyn"
                    >
                      1
                    </span>{" "}
                    <span>Donation Type</span>
                  </p>
                </div>
              ) : (
                false
              )}
            </div>
            <div className="col-md-3">
              {this.state.dntionCategoryControl ? (
                <div
                  onClick={() =>
                    this.setState({
                      donationForm: false,
                      donationDetailForm: true,
                      amountBox: false,
                      donationFormDetail: false,
                    })
                  }
                  className="donationStep"
                >
                  <p>
                    <span
                      style={{ fontSize: "1.3em", margin: 0 }}
                      className="qtyn"
                    >
                      2
                    </span>{" "}
                    Donation Category
                  </p>
                </div>
              ) : (
                false
              )}
            </div>
            <div className="col-md-3">
              {this.state.dntionQuantityControl ? (
                <div
                  onClick={() =>
                    this.setState({
                      donationForm: false,
                      donationDetailForm: false,
                      amountBox: true,
                      donationFormDetail: false,
                    })
                  }
                  className="donationStep"
                >
                  <p>
                    <span
                      style={{ fontSize: "1.3em", margin: 0 }}
                      className="qtyn"
                    >
                      3
                    </span>{" "}
                    Donation Quantity
                  </p>
                </div>
              ) : (
                false
              )}
            </div>
            <div className="col-md-3">
              {this.state.dntionDetailControl ? (
                <div
                  onClick={() =>
                    this.setState({
                      donationForm: false,
                      donationDetailForm: false,
                      amountBox: false,
                      donationFormDetail: true,
                    })
                  }
                  className="donationStep"
                >
                  <p>
                    <span
                      style={{ fontSize: "1.3em", margin: 0 }}
                      className="qtyn"
                    >
                      4
                    </span>{" "}
                    Personal Details
                  </p>
                </div>
              ) : (
                false
              )}
            </div>
          </div>
        </div>
        {/* Donation Form */}
        {this.state.donationForm ? (
          <div className="p-5 backgroundLight">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-4 text-center donationCard">
                  <div onClick={() => this.donationType("Sadqa")}>
                    <p className="donationCardText">Sadqa</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 text-center donationCard">
                  <div onClick={() => this.donationType("Aqiqa")}>
                    <p className="donationCardText">Aqeeqa</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 text-center donationCard">
                  <div onClick={() => this.donationType("Other Donation")}>
                    <p className="donationCardText">Other Donation</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 text-center donationCard">
                  <div
                    onClick={() => {
                      this.donationType("Campaign");
                    }}
                  >
                    <p className="donationCardText">Campaign</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          false
        )}
        {/* Donatin Detail Form */}
        {this.state.donationDetailForm ? (
          <div className="backgroundLight p-5">
            <div className="container rounded shadow bg-white p-5">
              <h3>Select Type</h3>
              <div className="subCategoryList row">
                {this.state.currentData.map((e, i) => {
                  return (
                    <div
                      onClick={() =>
                        this.selectCategory(e.value, e.donationCate)
                      }
                      className="col-md-3"
                      key={i}
                    >
                      <div className="categoryList">{e.donationCate}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
        {/* Amount and Quantity Box */}
        {this.state.amountBox ? (
          <div className="backgroundLight">
            <div className="container py-3">
              <div className="row">
                <div className="col-md-12 py-3">
                  <div className="row amountCard">
                    <div className="col-md-6 px-5 py-2 text-center">
                      {this.state.currentDropDownValue === "Other Donation" ||
                      this.state.currentDropDownValue === "Campaign" ? (
                        <p
                          style={{
                            fontSize: "2em",
                            padding: "10px",
                            height: "100%",
                            borderRadius: "8px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "rgb(0, 102, 179)",
                            border: "2px solid rgb(0, 102, 179)",
                          }}
                        >
                          {this.state.donationSubCategory}
                        </p>
                      ) : (
                        <div className="amountDes py-5">
                          {this.state.donationQuantity > 0 ? (
                            <button
                              onClick={() =>
                                this.setState({
                                  donationQuantity:
                                    this.state.donationQuantity - 1,
                                })
                              }
                            >
                              -
                            </button>
                          ) : null}
                          <span>
                            {this.state.donationQuantity}{" "}
                            {this.state.currentDropDownValue}
                          </span>
                          <button
                            onClick={() =>
                              this.setState({
                                donationQuantity:
                                  this.state.donationQuantity + 1,
                              })
                            }
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 px-5 py-2 text-center ">
                      <div className="amount">
                        <p>
                          Rs <br />
                          {this.state.currentDropDownValue ===
                            "Other Donation" ||
                          this.state.currentDropDownValue === "Campaign" ? (
                            <input
                              onChange={(e) =>
                                this.setState({
                                  categoryAmount: e.target.value,
                                })
                              }
                              value={this.state.categoryAmount}
                              type="number"
                              className="amountInp"
                              placeholder="Amount"
                            />
                          ) : (
                            <>
                              {" "}
                              <p
                                style={{
                                  fontSize: "1.5em",
                                  fontWeight: "bold",
                                }}
                              >
                                {(
                                  this.state.categoryAmount *
                                  this.state.donationQuantity
                                ).toLocaleString()}
                              </p>
                            </>
                          )}
                          /-
                        </p>
                      </div>
                    </div>

                    <div className="col-md-12 px-5 py-2 text-center">
                      <div style={{ height: "100%" }}>
                        <button
                          onClick={() =>
                            this.setState({
                              amountBox: false,
                              donationFormDetail: true,
                              dntionDetailControl: true,
                            })
                          }
                          className="prevbtn btn-block"
                        >
                          Proceed to Amount
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {this.state.donationFormDetail ? (
          <div className="p-4 py-5 backgroundLight">
            <div className="container">
              <div className="row bg-white rounded shadow">
                <div
                  style={{
                    backgroundImage:
                      "url('https://samircharitabletrust.org/wp-content/uploads/2014/02/ab.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="col-md-8 py-2"
                >
                  
                </div>
                <div className="col-md-4 shadow">
                  <div className="p-3">
                    <h3>Personal Details</h3>
                    <div className="row">
                      <div className="col-md-12 mt-3 mb-3">
                        <div className="pb-2">
                          <input
                            type="text"
                            class="inp"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "name");
                              this.setState({ chkname: false });
                            }}
                          />
                          {this.state.chkname ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                        </div>
                        <div className="py-2">
                          <input
                            type="text"
                            class="inp"
                            placeholder="Contact No (for whatsApp Video)"
                            value={contNumber}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "contNumber");
                              this.setState({ chkcontNumber: false });
                            }}
                          />
                          {this.state.chkcontNumber ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                        </div>
                        <div className="py-2">
                          <input
                            type="text"
                            class="inp"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "email");
                              this.setState({ chkemail: false });
                            }}
                          />
                        </div>
                        <div className="pt-2">
                          {this.state.chkemail ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                          <textarea
                            placeholder="Enter Special Request"
                            className="inp"
                            rows="6"
                            value={remarks}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "remarks");
                              this.setState({ chkremarks: false });
                            }}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-7">
                        {this.state.chkremarks ? (
                          <p className="text-danger">Field is Emply</p>
                        ) : null}
                      </div>
                      <div className="col-md-12 text-right ">
                        <button
                          className="prevbtn px-5"
                          onClick={() => this.Submit()}
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          false
        )}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Bank Detail List
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <BankDetail />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-5 py-5">
          <div className="displayheading">
            <h1>Donation Form</h1>
          </div>

          <div className="container mt-5">
            <div className="row">
              <div
                style={{
                  backgroundImage:
                    'url("https://www.islamic-banking.com/sites/default/files/styles/banner/public/field/banner/iibi_banner_london_a_01.jpg?itok=lDAby0JQ")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="col-md-12 p-5 backgroundDark"
              >
                <div>
                  <h3 className="text-white">
                    Donate to us through Virgin Money Giving
                  </h3>
                  <p className="text-white">For UK Donors</p>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <a
                      target="_blank"
                      className="donorLink"
                      href="https://www.paypal.com/donate?token=RO8vMGfMxvHVAca65ngnyG-dyU8MS3ZCzdNx1FNge6C5Oq_gF2DCDN1-ADXnzw5aMhp2kThlxQgMOa4b"
                    >
                      <i class="fab fa-paypal"></i>{" "}
                      <i class="fab fa-cc-visa"></i>
                      <i class="fab fa-cc-mastercard"></i>
                      <i class="fab fa-cc-amex"></i>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a
                      target="_blank"
                      className="donorLink"
                      href="https://uk.virginmoneygiving.com/donation-web/charity?charityId=1015417&campaignId=8552&utm_source=extbtn&utm_campaign=donatebtn"
                    >
                      <img
                        src="https://www.saylaniwelfareuk.com/wp-content/uploads/2019/05/DONATE_RED_BUTTON@1x.png"
                        width="200px"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-12 backgroundLight p-5">
                <div className="row">
                  <div className="col-md-6 mt-3 mb-3">
                    <label className="lab text-dark">
                      Select Donation Method
                    </label>
                    <select
                      className="inp"
                      value={donationMethod}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "donationMethod");
                        this.setState({ chkdonationMethod: false });
                      }}
                    >
                      <option>Credit Card</option>
                    </select>
                  </div>
                  <div className="col-md-6 mt-3 mb-3">
                    <label className="lab text-dark">
                      Select Donation Type
                    </label>
                    <select
                      // onChange={(e) => this.donationType(e)}
                      className="inp"
                      value={donationType}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "donationType");
                        this.setFieldVal("", "donationValue");
                        this.setFieldVal("", "donationCategory");
                        this.setState({ chkdonationType: false });
                      }}
                    >
                      <option value="Select Donation Type">
                        Select Donation Type
                      </option>
                      {this.props.DonaListGets.map((i, index) => {
                        return (
                          <option key={index} value={i.donationType}>
                            {i.donationType}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-md-6 mt-3 mb-3">
                    <label className="lab text-dark">
                      Select Donation category
                    </label>
                    <select
                      className="inp"
                      onChange={(e) => {
                        let index = e.nativeEvent.target.selectedIndex;
                        let label = e.nativeEvent.target[index].text;
                        this.setFieldVal(e.target.value, "donationValue");
                        this.setFieldVal(label, "donationCategory");
                        this.setState({ chkdonationCategory: false });
                      }}
                    >
                      <option value="">Select Donation Category</option>
                      {this.props.DonaListGets.filter((name) => {
                        return (
                          name.donationType
                            .toLocaleLowerCase()
                            .indexOf(
                              this.state.donationType.toLocaleLowerCase()
                            ) >= 0
                        );
                      }).map((filterData) => {
                        return filterData.values.map((filter) => {
                          return (
                            <option value={filter.value}>
                              {filter.donationCate}
                            </option>
                          );
                        });
                      })}
                    </select>
                    {this.state.chkdonationCategory ? (
                      <p className="text-danger">Field is Emply</p>
                    ) : null}
                  </div>

                  {this.state.donationType == "Other Donation" ? (
                    <div className="col-md-6 mt-3 mb-3">
                      <label className="lab text-dark">Amount</label>
                      <input
                        type="text"
                        className="inp"
                        placeholder="Amount"
                        min="1"
                        value={amount}
                        onChange={(e) => {
                          this.setFieldVal(e.target.value, "amount");
                          this.setState({ chkamount: false });
                        }}
                      />
                    </div>
                  ) : (
                    <div className="col-md-6 mt-3 mb-3">
                      <label className="lab text-dark">Quantity</label>
                      <input
                        type="number"
                        className="inp"
                        placeholder="Number"
                        min="1"
                        value={quan}
                        onChange={(e) => {
                          this.setFieldVal(e.target.value, "quan");
                          this.setState({ chkamount: false });
                        }}
                      />
                    </div>
                  )}
                  {this.state.chkamount ? (
                    <p className="text-danger">Field is Emply</p>
                  ) : null}
                  <br />

                  <div className="col-md-6 mt-3 mb-3">
                    <label className="lab text-dark">Amount Payable</label>
                    <input
                      type="number"
                      className="inp"
                      placeholder="Total Amount Payable"
                      disabled={true}
                      value={amountPayable}
                    />
                    <p>Bank Charges is : {perc === "NaN" ? 0 : perc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    DonaListGets: state.reducerDonation.DonaListGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    DonaListGet: () => {
      dispatch(DonaListGet());
    },
  };
}
export default withRouter(
  connect(mapStateToProp, mapDispatchToProp)(DonationForm)
);
