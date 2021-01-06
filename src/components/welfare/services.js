import React from "react";
import "./welfare.css";

export default class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      srvices: [
        {
          name: "Wedding Jahaiz",
          ico: "fas fa-couch",
        },
        {
          name: "Wedding Furniture",
          ico: "fas fa-couch",
        },
        {
          name: "Wedding Food",
          ico: "fas fa-utensils",
        },
        {
          name: "Wedding Cash",
          ico: "fas fa-money-bill-wave",
        },
        {
          name: "Rozgar",
          ico: "fas fa-user-tie",
        },
        {
          name: "Education",
          ico: "fas fa-graduation-cap",
        },
        {
          name: "Constructions",
          ico: "fas fa-hammer",
        },
        {
          name: "House Rent",
          ico: "fas fa-money-bill-wave",
        },
        {
          name: "House Advance",
          ico: "fas fa-money-bill-wave",
        },
        {
          name: "Qarz Ki Adaigi",
          ico: "fas fa-money-bill-wave",
        },
        {
          name: "Qarz-E-Hasna",
          ico: "fas fa-money-bill-wave",
        },
        {
          name: "Sood Ki Adaigi",
          ico: "fas fa-money-bill-wave",
        },
        {
          name: "Gharelu Ikhrajat",
          ico: "fas fa-home",
        },
        {
          name: "Traveling Expense",
          ico: "fas fa-shuttle-van",
        },
        {
          name: "Medical ",
          ico: "fas fa-briefcase-medical",
        },
        {
          name: "Utility Bills",
          ico: "fas fa-file-invoice",
        },
        {
          name: "Special Ration",
          ico: "fas fa-bread-slice",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className="container py-5">
          <div className="Heading">
            <h2>Services</h2>
          </div>
          <div className="row">
            {this.state.srvices.map((e, i) => {
              return (
                <div key={i} className="col-md-3 serviceCardMain">
                  <div
                    style={{
                      color: "#0066b3",
                    }}
                    className="p-3 serviceCard text-center m-2"
                  >
                    <div>
                      <p style={{ fontSize: "2.5em" }}>
                        <i class={e.ico}></i>
                      </p>
                    </div>
                    <p
                      style={{ fontSize: "1.2em", textTransform: "capitalize" }}
                      className="fs-1"
                    >
                      {e.name}
                    </p>
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
