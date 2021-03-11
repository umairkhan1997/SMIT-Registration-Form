import React from "react";
import event01 from "../../images/homeimages/event01.png";
import event02 from "../../images/homeimages/event02.png";

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="displayheading">
          <h3>Events</h3>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-5">
            <img width="100%" src={event01} />
            <div className="py-3">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2em",
                  color: "#014D99",
                }}
              >
                Road Safety Awareness Seminar
              </p>
              <p style={{ fontWeight: "bold", fontSize: "1em" }}>
                Saylani Welfare International Trust
              </p>
              <p style={{ fontWeight: "bold", fontSize: ".7em" }}>
                Date: 13-March-2021 | Saturday
              </p>
              <p style={{ fontWeight: "bold", fontSize: ".7em" }}>
                Time: 10am to 12pm
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <img width="100%" src={event02} />
            <div className="py-3">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2em",
                  color: "#014D99",
                }}
              >
                Hearing Aid Distribution Program
              </p>
              <p style={{ fontWeight: "bold", fontSize: "1em" }}>
                Saylani Welfare International Trust
              </p>
              <p style={{ fontWeight: "bold", fontSize: ".7em" }}>
                Date: 12-March-2021 | Friday
              </p>
              <p style={{ fontWeight: "bold", fontSize: ".7em" }}>
                Time: 03pm to 05pm
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
