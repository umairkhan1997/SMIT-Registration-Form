import React from "react";
import CountUp from "react-countup";
import "./smallComponent.css";

export default class HomeService extends React.Component {
  render() {
    const { imageSrc, countStart, countEnd } = this.props;
    return (
      <div className=" row text-center homeIntroCard">
        <div className="col-md-3">
          <div className="homeIntroCardImageParent">
            <img src={imageSrc} width="40px" alt="Housing Scheme of Saylani" />
          </div>
        </div>
        <div className="col-md-9 homeIntroCardDetails">
          <h2 className="schemeTextHeading">
            <CountUp
              start={countStart}
              end={countEnd}
              separator=","
              duration={5}
            />
            +
          </h2>
        </div>
        <div className="col-md-12 text-left">
          <p style={{ fontSize: ".8em" }}>{this.props.children}</p>
        </div>
      </div>
    );
  }
}
