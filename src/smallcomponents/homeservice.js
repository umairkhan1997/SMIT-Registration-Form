import React from "react";
import CountUp from "react-countup";

export default class HomeService extends React.Component {
  render() {
    const { imageSrc, countStart, countEnd } = this.props;
    return (
      <div className="my-5">
        <div className="p-3">
          <img src={imageSrc} width="40%" alt="Housing Scheme of Saylani" />
        </div>
        <div className="text-white">
          <h2 className="schemeTextHeading">
            <CountUp
              start={countStart}
              end={countEnd}
              separator=","
              duration={6}
            />
            +
          </h2>
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}
