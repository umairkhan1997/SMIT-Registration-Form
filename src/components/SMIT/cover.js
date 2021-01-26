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
              {smitNotificationGets
                .filter((name) => {
                  return (
                    name.cityName.toLowerCase().indexOf(city.toLowerCase()) >= 0
                  );
                })
                .map((filteredName, i) => {
                  return filteredName.viewForm ? (
                    <div key={i} className="coverText row">
                      <div className="col-md-6">
                        <img
                          src={filteredName.multiple_image[0]}
                          width="100%"
                        />
                      </div>
                      <div className="col-md-6 p-5">
                        <div
                          style={{
                            backgroundColor: "rgba(0,0,0,.5)",
                            height: "100%",
                            boxShadow: "0 8px 12px rgba(0,0,0,.3)",
                            borderRadius: "8px",
                          }}
                          className="p-5 d-flex justify-content-center flex-column"
                        >
                          <h1 className="my-5 border-bottom">
                            {filteredName.cityName}
                          </h1>
                          <h3 className="my-3">Course: Web & Mobile</h3>
                          <h3 className="my-3">Duration: 6 Months</h3>
                          <h2 className="my-3">Deadline: 16 Dec 2020</h2>
                          <div className="row">
                            <div className="col-md-6">
                              <div>
                                <button
                                  onClick={() => {
                                    this.props.history.push("/apply", {
                                      filteredName,
                                    });
                                  }}
                                  className="btn btn-outline-light rounded-pill px-5 my-3 btn-block"
                                >
                                  Apply
                                </button>
                              </div>
                            </div>
                            <div className="col-md-6">
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                      <div className="coverText row ">
                        <img
                          width="100%"
                          alt="Saylani welfare Mass IT Training and Job Creation Programms"
                          src={smitbackcover}
                        />
                      </div>
                    );
                })}
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
