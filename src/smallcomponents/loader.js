import React from "react";
import shortlogo from "../images/shortlogo.png";
import restlogo from "../images/restLogo.png";

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="loaderParent">
        <div>
          <div
            style={{
              backgroundImage: `url(${shortlogo})`,
              backgroundSize: "cover",
              width: "4rem",
              height: "4rem",
            }}
            className="spinner-grow"
            role="status"
          >
            <span className="visually-hidden"></span>
          </div>
          <img width="200px" src={restlogo} />
        </div>
      </div>
    );
  }
}
