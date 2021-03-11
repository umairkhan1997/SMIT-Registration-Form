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
      <div id="saylanidepart">
        <div class="container-fluid">
          <div id="carouselContent" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
              {/* SMIT */}
              <div class="carousel-item active text-center p-4">
                <div className="container">
                  <div
                    className="rounded"
                    style={{
                      backgroundImage: `url(${smitcover})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="row p-0 m-0">
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,0.3)",
                          color: "white",
                        }}
                        className="col-md-5"
                      >
                        <h2 className="slideCardHeading">
                          Saylani MASS I.T. Training program
                        </h2>
                        <div className="text-center p-3">
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
                          <hr className="bg-white" />
                          <h3 className="coverCardHeadingSmall">
                            Students Enrolled
                          </h3>
                          <p
                            style={{ fontSize: "1.2em" }}
                            className="slideCardText"
                          >
                            Providing Latest I.T. Education free for Pakistan's
                            Youth
                          </p>
                          <p className="font-weight-bold py-1">
                            SUPPORT US TO EDUCATE YOUTH
                          </p>
                          <button className="donateButton btn-block">
                            Donate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Medical */}
              <div class="carousel-item text-center p-4">
                <div className="container">
                  <div
                    className="rounded"
                    style={{
                      backgroundImage: `url(${medicalcover})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="row p-0 m-0">
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,0.4)",
                          color: "white",
                        }}
                        className="col-md-5"
                      >
                        <h2 className="slideCardHeading">
                          Saylani Medical & Diagnostic Center
                        </h2>
                        <div className="text-center p-3">
                          <h3 className="coverCardHeadingLarge">
                            <CountUp
                              start={100000}
                              end={950000}
                              separator=","
                              duration={6}
                            />
                            +
                          </h3>
                          <hr className="bg-white" />
                          <h3 className="coverCardHeadingSmall">
                            Patient Treated
                          </h3>
                          <p
                            style={{ fontSize: "1.2em" }}
                            className="slideCardText"
                          >
                            Best quality Treatment for underpreviledge
                          </p>
                          <p className="font-weight-bold py-1">
                            SUPPORT US TO EDUCATE YOUTH
                          </p>
                          <button className="donateButton btn-block">
                            Donate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Social Welfare */}
              <div class="carousel-item text-center p-4">
                <div className="container">
                  <div
                    className="rounded"
                    style={{
                      backgroundImage: `url(${welfarecover})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="row p-0 m-0">
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,0.4)",
                          color: "white",
                        }}
                        className="col-md-5"
                      >
                        <h2 className="slideCardHeading">
                          Saylani Social welfare Program
                        </h2>
                        <div className="text-center p-3">
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
                          <hr className="bg-white" />
                          <h3 className="coverCardHeadingSmall">
                            Distressed Families Adobted
                          </h3>
                          <p
                            style={{ fontSize: "1.2em" }}
                            className="slideCardText"
                          >
                            Providing Financial assistance for distressed &
                            widow families
                          </p>
                          <p className="font-weight-bold py-1">
                            SUPPORT US to help more
                          </p>
                          <button className="donateButton btn-block">
                            Donate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Blood Bank */}
              <div class="carousel-item text-center p-4">
                <div className="container">
                  <div
                    className="rounded"
                    style={{
                      backgroundImage: `url(${bloodbankcover})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="row p-0 m-0">
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,0.4)",
                          color: "white",
                        }}
                        className="col-md-5"
                      >
                        <h2 className="slideCardHeading">
                          {" "}
                          Saylani Blood Bank & Thalassemia Center
                        </h2>
                        <div className="text-center p-3">
                          <h3 className="coverCardHeadingLarge">
                            <CountUp
                              start={1000}
                              end={5000}
                              separator=","
                              duration={6}
                            />
                            +
                          </h3>
                          <hr className="bg-white" />
                          <h3 className="coverCardHeadingSmall">
                            Treated Thalassemia Patients
                          </h3>
                          <p
                            style={{ fontSize: "1.2em" }}
                            className="slideCardText"
                          >
                            Let's make thalassemia free Pakistan
                          </p>
                          <p className="font-weight-bold py-1">
                            SUPPORT US to help more
                          </p>
                          <button className="donateButton btn-block">
                            Donate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* RO Plant */}
              <div class="carousel-item text-center p-4">
                <div className="container">
                  <div
                    className="rounded"
                    style={{
                      backgroundImage: `url(${roplantcover})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="row p-0 m-0">
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,0.4)",
                          color: "white",
                        }}
                        className="col-md-5"
                      >
                        <h2 className="slideCardHeading">
                          {" "}
                          Saylani Clean Drinking Water Programm
                        </h2>
                        <div className="text-center p-3">
                          <h3 className="coverCardHeadingLarge">
                            {" "}
                            <CountUp
                              start={50}
                              end={150}
                              separator=","
                              duration={6}
                            />
                            +
                          </h3>
                          <hr className="bg-white" />
                          <h3 className="coverCardHeadingSmall">
                            RO Plants planted
                          </h3>
                          <p
                            style={{ fontSize: "1.2em" }}
                            className="slideCardText"
                          >
                            Providing free & clean drinking water in slums areas
                            of pakistan
                          </p>
                          <p className="font-weight-bold py-1">
                            SUPPORT US to help more
                          </p>
                          <button className="donateButton btn-block">
                            Donate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              style={{ left: 0, top: "43%", color: "black" }}
              href="#carouselContent"
              role="button"
              data-slide="prev"
              className="slideBtn"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </button>
            <button
              style={{ right: 0, top: "43%", color: "black" }}
              href="#carouselContent"
              role="button"
              data-slide="next"
              className="slideBtn"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeCover;
