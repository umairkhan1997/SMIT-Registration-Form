import React from "react";
import "./welfare.css";
import { Link } from "react-router-dom";

export default class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      srvices: [
        {
          name: "Wedding Jahaiz",
          ico: "fas fa-couch",
          cash: "1231123",
          unit: "12*",
        },
        {
          name: "Wedding Furniture",
          ico: "fas fa-couch",
          cash: "98,000,000",
          unit: "7,140",
        },
        {
          name: "Wedding Food",
          ico: "fas fa-utensils",
          cash: "7,420,775",
          unit: "55,458",
        },
        {
          name: "Wedding Cash",
          ico: "fas fa-money-bill-wave",
          cash: "21,420,850",
          unit: "2,826",
        },
        {
          name: "Rozgar",
          ico: "fas fa-user-tie",
          cash: "36,915,470",
          unit: "2,603",
        },
        {
          name: "Education",
          ico: "fas fa-graduation-cap",
          cash: "173,224,833",
          unit: "149,978",
        },
        {
          name: "Constructions",
          ico: "fas fa-hammer",
          cash: "130,931,117",
          unit: "588",
        },
        {
          name: "House Rent",
          ico: "fas fa-money-bill-wave",
          cash: "1231231",
          unit: "123*",
        },
        {
          name: "House Advance",
          ico: "fas fa-money-bill-wave",
          cash: "316,000",
          unit: "23",
        },
        {
          name: "Qarz Ki Adaigi",
          ico: "fas fa-money-bill-wave",
          cash: "191,080",
          unit: "9",
        },
        {
          name: "Qarz-E-Hasna",
          ico: "fas fa-money-bill-wave",
          cash: "45,087,786",
          unit: "2,448",
        },
        {
          name: "Sood Ki Adaigi",
          ico: "fas fa-money-bill-wave",
          cash: "1231321*",
          unit: "123",
        },
        {
          name: "Gharelu Ikhrajat",
          ico: "fas fa-home",
          cash: "13,920",
          unit: "23",
        },
        {
          name: "Traveling Expense",
          ico: "fas fa-shuttle-van",
          cash: "43,600",
          unit: "3",
        },
        {
          name: "Medical ",
          ico: "fas fa-briefcase-medical",
          cash: "60,500",
          unit: "7",
        },
        {
          name: "Utility Bills",
          ico: "fas fa-file-invoice",
          cash: "12,336,387",
          unit: "815",
        },
        {
          name: "Special Ration",
          ico: "fas fa-bread-slice",
          cash: "17,500",
          unit: "6,866",
        },
      ],
    };
  }
  render() {
    return (
      <div id="welfareServices">
        <div className="container py-5">
          <div className="Heading">
            <h2>Services</h2>
          </div>
          <div className="row">
            {this.state.srvices.map((e, i) => {
              return (
                <div key={i} className="col-md-4 serviceCardMain">
                  <div className="serviceCard welfareServiceCard backgroundLight text-center m-2 color">
                    <div className="innerServices1">
                      <p style={{ fontSize: "2.5em" }}>
                        <i class={e.ico}></i>
                      </p>

                      <Link to="/Donation">
                        <p className="text bg-light shadow color py-1">
                          Donate
                          <span>
                            <i class="fas fa-donate"></i>
                          </span>
                        </p>
                      </Link>
                    </div>
                    <div className="innerServices2">
                      <p className="serviceText">
                        <span>
                          <i class={e.ico}></i>
                        </span>{" "}
                        {e.name}
                      </p>
                      <p style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                        Unit : {e.unit}
                      </p>
                      <p style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                        PKR {e.cash}/-
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
