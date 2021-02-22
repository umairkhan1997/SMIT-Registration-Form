import React from "react";
import smitcover from "../../images/homeimages/smitcover.png";
import medicalcover from "../../images/homeimages/medicalcover.png";
import welfarecover from "../../images/homeimages/welfarecover.png";
import bloodbankcover from "../../images/homeimages/bloodbankcover.png";
import roplantcover from "../../images/homeimages/roplantcover.png";
import CountUp from "react-countup";

class HomeCover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { coverHeading } = this.props;
    return (
      <div id="saylanidepart" className="m-5 p-5">
        <div>
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
            <div style={{ width: "1000px" }} className="text-left">
              <div className="donateCard text-center p-5">
                <h3 className="coverCardHeadingLarge">
                  {" "}
                  <CountUp
                    start={10000}
                    end={75000}
                    separator=","
                    duration={6}
                  />
                  +
                </h3>
                <h3 className="coverCardHeadingSmall">Students Enrolled</h3>
                <p
                  style={{ fontSize: "1.2em" }}
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
        {/* Medical */}
        <div className="my-5">
          <div className="row text-left">
            <div className="col-md-8">
              <h2 className="coverHeading">
                Saylani <br />
                MEDICAL & DIAGNOSTIC CENTER
              </h2>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div>
            <div className="text-left donateImageleft">
              <img
                style={{ position: "absolute", left: "0", top: "0" }}
                width="90%"
                src={medicalcover}
              />
            </div>
            <div className="text-right d-flex justify-content-end">
              <div className="donateCard text-center p-5">
                <h3 className="coverCardHeadingLarge">
                  {" "}
                  <CountUp
                    start={100000}
                    end={950000}
                    separator=","
                    duration={6}
                  />
                  +
                </h3>
                <h3 className="coverCardHeadingSmall">Patient Treated</h3>
                <p
                  style={{ fontSize: "1.2em" }}
                  className="font-weight-bold py-4"
                >
                  Best quality Treatment for underpreviledge
                </p>
                <p className="color font-weight-bold py-1">
                  SUPPORT US to help more
                </p>
                <button className="donateButton btn-block">Donate</button>
              </div>
            </div>
          </div>
        </div>
        {/* Social Welfare */}
        <div className="my-5">
          <div className="row text-right">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <h2 className="coverHeading">
                Saylani <br />
                Social welfare Program
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-right donateImage">
              <img
                style={{ position: "absolute", right: "0" }}
                width="90%"
                src={welfarecover}
              />
            </div>
            <div className="text-left">
              <div className="donateCard text-center p-5">
                <h3 className="coverCardHeadingLarge">
                  {" "}
                  <CountUp
                    start={1000}
                    end={10000}
                    separator=","
                    duration={6}
                  />
                  +
                </h3>
                <h3 className="coverCardHeadingSmall">
                  Distressed Families Adobted
                </h3>
                <p
                  style={{ fontSize: "1.2em" }}
                  className="font-weight-bold py-4"
                >
                  Providing Financial assistance for distressed & widow families
                </p>
                <p className="color font-weight-bold py-1">
                  SUPPORT US to help more
                </p>
                <button className="donateButton btn-block">Donate</button>
              </div>
            </div>
          </div>
        </div>
        {/* Medical */}
        <div className="my-5">
          <div className="row text-left">
            <div className="col-md-8">
              <h2 className="coverHeading">
                Saylani <br />
                Blood Bank & Thalassemia Center
              </h2>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div>
            <div className="text-left donateImageleft">
              <img
                style={{ position: "absolute", left: "0", top: "0" }}
                width="90%"
                src={bloodbankcover}
              />
            </div>
            <div className="text-right d-flex justify-content-end">
              <div className="donateCard text-center p-5">
                <h3 className="coverCardHeadingLarge">
                  {" "}
                  <CountUp start={1000} end={5000} separator="," duration={6} />
                  +
                </h3>
                <h3 className="coverCardHeadingSmall">
                  Treated Thalassemia Patients
                </h3>
                <p
                  style={{ fontSize: "1.2em" }}
                  className="font-weight-bold py-4"
                >
                  Let's make thalassemia free Pakistan
                </p>
                <p className="color font-weight-bold py-1">
                  SUPPORT US to help more
                </p>
                <button className="donateButton btn-block">Donate</button>
              </div>
            </div>
          </div>
        </div>

        {/* RO Plant */}
        <div className="my-5">
          <div className="row text-right">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <h2 className="coverHeading">
                Saylani <br />
                CLEAN DRINKING WATER PROGRAM
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-right donateImage">
              <img
                style={{ position: "absolute", right: "0" }}
                width="90%"
                src={roplantcover}
              />
            </div>
            <div className="text-left">
              <div className="donateCard text-center p-5">
                <h3 className="coverCardHeadingLarge">
                  {" "}
                  <CountUp start={50} end={150} separator="," duration={6} />+
                </h3>
                <h3 className="coverCardHeadingSmall">RO Plants planted</h3>
                <p
                  style={{ fontSize: "1.2em" }}
                  className="font-weight-bold py-4"
                >
                  Providing free & clean drinking water in slums areas of
                  pakistan
                </p>
                <p className="color font-weight-bold py-1">
                  SUPPORT US to help more
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
