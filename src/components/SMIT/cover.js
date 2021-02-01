import React from "react";
import "./SmitStyle.css";
import cover from "../../images/itback.png";
import { withRouter } from "react-router-dom";
import CustomBtn from "../../smallcomponents/mybtn";
import Announcement from "../../images/announcement.jpg";
import hyd from "../../images/hyderabadannouncment.jpg";
import smitbackcover from "../../images/smit-backcover.jpg";
import { connect } from "react-redux";
import { smitNotificationGet } from "../../Redux/action/smitAction";

class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Karachi",
      cityDetails: {
        karachi: {
          announcement: Announcement,
          alt: "",
        },
        hyderabad: {
          announcement: hyd,
        },
        faisalabad: {
          announcement: hyd,
        },
        islamabad: {
          announcement: hyd,
        },
      },
      currentDetails: {
        cityName: this.props.city,
        duration: "",
        timing: "",
      },
    };
  }
  componentDidMount() {
    this.props.smitNotificationGet();
  }
  render() {
    const { city, smitNotificationGets } = this.props;
    const { cityDetails } = this.state;
    // console.log(smitNotificationGets, "smitNotificationGets");
    return (
      <div>
        <div style={{ backgroundImage: `url(${cover})` }} className="back">
          <div>
            <div>
              <div className="coverText row">
                {smitNotificationGets
                  .filter((name) => {
                    return (
                      name.cityName.toLowerCase().indexOf(city.toLowerCase()) >= 0
                    );
                  })
                  .slice(0, 1).map((filteredName, i) => {
                    return filteredName.viewForm ? (
                      <div className="col-md-6">
                        <img
                          src={filteredName.multiple_image[0]}
                          width="100%"
                        />
                      </div>
                    ) : (
                        null
                      )
                  })}
                <div className="col-md-6 my-2">
                  {smitNotificationGets
                    .filter((name) => {
                      return (
                        name.cityName.toLowerCase().indexOf(city.toLowerCase()) >= 0
                      );
                    })
                    .map((filteredName, i) => {
                      return filteredName.viewForm ? (

                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.5)",
                            boxShadow: "0 8px 12px rgba(0,0,0,.3)",
                            borderRadius: "8px",
                          }}
                          className="py-4 my-3"
                        >
                          <h2 className=" border-bottom px-4">
                            {filteredName.cityName}
                          </h2>
                          <h5 className="my-3 px-4">Course : {filteredName.courseName + " " + filteredName.batchName}</h5>
                          <h5 className="my-3 px-4">Duration: 6 Months</h5>
                          <h5 className="my-3 px-4">Admission last date : 16 Dec 2020</h5>
                          <div className="row">
                            <div className="col-md-6 mx-auto">
                              <div>
                                <button
                                  onClick={() => {
                                    this.props.history.push("/apply", {
                                      filteredName
                                    });
                                  }}
                                  className="btn btn-outline-light rounded-pill px-5 my-3 btn-block"
                                >
                                  Apply
                                </button>
                              </div>
                            </div>
                            {/* <div className="col-md-6">
                              <p className="my-3">
                                <a
                                  className="btn btn-outline-light rounded-pill px-5 btn-block"
                                  target="_blank"
                                  href="https://www.facebook.com/SaylaniWelfareInternationalTrust/videos/368957824405514"
                                >
                                  View Details{" "}
                                  <i class="fas fa-arrow-right"></i>
                                </a>
                              </p>
                            </div> */}
                          </div>

                        </div>
                      ) : (
                          <div className="coverText ">
                            <img
                              width="205%"
                              alt="Saylani welfare Mass IT Training and Job Creation Programms"
                              className="coverImage"
                              src={smitbackcover}
                            />
                          </div>
                        );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    smitNotificationGets: state.reducerSmit.smitNotificationGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    smitNotificationGet: () => {
      dispatch(smitNotificationGet());
    },
  };
}
export default withRouter(connect(mapStateToProp, mapDispatchToProp)(Cover));
