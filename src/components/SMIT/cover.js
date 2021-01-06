import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";
import cover from "../../images/itback.png";
import { Link, withRouter } from "react-router-dom";
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
    };
  }
  componentDidMount() {
    this.props.smitNotificationGet()
  }
  render() {

    const { city, smitNotificationGets } = this.props;
    const { cityDetails } = this.state;
    console.log(smitNotificationGets, 'smitNotificationGets')
    return (
      <div>
        <div style={{ backgroundImage: `url(${cover})` }} className="back">
          <div>
            <div>
              {smitNotificationGets
                .filter((name) => {
                  return (
                    name.cityName
                      .toLowerCase()
                      .indexOf(city.toLowerCase()) >= 0
                  );
                })
                .map((filteredName) => {
                  return filteredName.viewForm ? (<div className="coverText row">
                    <div className="col-md-6">
                      <img
                        src={filteredName.multiple_image[0]}
                        width="100%"
                      />
                    </div>
                    <div className="col-md-6">
                      <h1 style={{ fontSize: "3em" }}>{filteredName.cityName}</h1>
                      <div className="text-white" onClick={() => { this.props.history.push("/apply", { filteredName }) }}>
                        <CustomBtn value="Apply" />
                      </div>
                    </div>
                  </div>
                  ) : <div className="coverText row " style={{
                    backgroundImage:
                      `url(${smitbackcover})`,
                    backgroundSize: 'cover', height: '500px'

                  }}>
                    </div>;
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
