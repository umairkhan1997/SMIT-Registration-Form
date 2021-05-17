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
      <div className="container-fluid mb-5">
        <div className="displayheading Heading">
          <h3 className=" color" style={{ marginLeft: -10 }}><b><u>EVENTS</u></b></h3>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-3">
            <img width="100%" src={event01} />
            <div className="">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2em",
                  color: "#014D99", margin: 0
                }}
              >
                Road Safety Awareness Seminar
              </p>
              <p style={{ fontWeight: "bold", fontSize: "1em", margin: 0 }}>
                Saylani Welfare International Trust
              </p>
              <p style={{ fontWeight: "bold", fontSize: ".7em", margin: 0 }}>
                Date: 13-March-2021 | Saturday
              </p>
              <p style={{ fontWeight: "bold", fontSize: ".7em", margin: 0 }}>
                Time: 10am to 12pm
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <img width="100%" src={event02} />
            <div className="">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2em",
                  color: "#014D99", margin: 0
                }}
              >
                Hearing Aid Distribution Program
              </p>
              <p style={{ fontWeight: "bold", fontSize: "1em", margin: 0 }}>
                Saylani Welfare International Trust
              </p>
              <p style={{ fontWeight: "bold", fontSize: ".7em", margin: 0 }}>
                Date: 12-March-2021 | Friday
              </p>
              <p style={{ fontWeight: "bold", fontSize: ".7em", margin: 0 }}>
                Time: 03pm to 05pm
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <img width="100%" src={event02} />
            <div className="">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2em",
                  color: "#014D99", margin: 0
                }}
              >
                Hearing Aid Distribution Program
              </p>
              <p style={{ fontWeight: "bold", fontSize: "1em", margin: 0 }}>
                Saylani Welfare International Trust
              </p>
              <p style={{ fontWeight: "bold", fontSize: ".7em", margin: 0 }}>
                Date: 12-March-2021 | Friday
              </p>
              <p style={{ fontWeight: "bold", fontSize: ".7em", margin: 0 }}>
                Time: 03pm to 05pm
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <img width="100%" src={event02} />
            <div className="">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2em",
                  color: "#014D99", margin: 0
                }}
              >
                Hearing Aid Distribution Program
              </p>
              <p style={{ fontWeight: "bold", fontSize: "1em", margin: 0 }}>
                Saylani Welfare International Trust
              </p>
              <p style={{ fontWeight: "bold", fontSize: ".7em", margin: 0 }}>
                Date: 12-March-2021 | Friday
              </p>
              <p style={{ fontWeight: "bold", fontSize: ".7em", margin: 0 }}>
                Time: 03pm to 05pm
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
