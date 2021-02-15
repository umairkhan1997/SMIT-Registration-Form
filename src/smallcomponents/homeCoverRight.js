import React from "react";
import smitcover from "../../images/homeimages/smitcover.png";

class HomeCover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { coverHeading } = this.props;
    return (
      <div className="m-5 py-5">
        <div className="my-5">
          <div className="row text-right">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <h2 className="coverHeading">
                Saylani <br /> MASS I.T. Training program
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-right donateImage">
              <img
                style={{ position: "absolute", right: "0" }}
                width="90%"
                src={smitcover}
              />
            </div>
            <div>
              <div className="donateCard text-center p-5">
                <h3 className="coverCardHeadingLarge">SMIT</h3>
                <h3 className="coverCardHeadingSmall">PROGRAM</h3>
                <p
                  style={{ fontSize: "1.3em" }}
                  className="font-weight-bold py-4"
                >
                  Providing Latest I.T. Education free for Pakistan's Youth
                </p>
                <p className="color font-weight-bold py-1">
                  SUPPORT US TO EDUCATE YOUTH
                </p>
                <button className="donateButton btn-block">Donate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeCover;
