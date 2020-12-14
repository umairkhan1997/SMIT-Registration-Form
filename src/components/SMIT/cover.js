import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";
import cover from "../../images/itback.png";
import { Link } from "react-router-dom";
import CustomBtn from "../../smallcomponents/mybtn";
import Announcement from "../../images/announcement.jpg";
import hyd from "../../images/hyderabadannouncment.jpg";

export default class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Karachi",
      cityDetails: {
        karachi: {
          announcement: Announcement,
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
  render() {
    const { city } = this.props;
    const { cityDetails } = this.state;
    return (
      <div>
        <div style={{ backgroundImage: `url(${cover})` }} className="back p-5">
          <div className="container py-5">
            <div className="coverText row">
              <div className="col-md-6">
                <img
                  src={
                    city == "Hyderabad"
                      ? cityDetails.hyderabad.announcement
                      : cityDetails.karachi.announcement
                  }
                  width="100%"
                />
              </div>
              <h1 style={{ fontSize: "3em" }}>{this.props.city}</h1>
              <Link className="text-white" to="/apply">
                <CustomBtn value="Apply" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
