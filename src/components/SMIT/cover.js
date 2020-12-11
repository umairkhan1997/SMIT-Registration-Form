import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";
import cover from "../../images/itback.png";
import { Link } from "react-router-dom";
import CustomBtn from "../../smallcomponents/mybtn";
import Announcement from "../../images/announcement.jpg";

export default class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Karachi",
      cityDetails: {
        karachi: {
          announcement: Announcement,
        },
      },
    };
  }
  render() {
    return (
      <div>
        <div style={{ backgroundImage: `url(${cover})` }} className="back p-5">
          <div className="container py-5">
            <div className="my-5 p-5 coverText">
              <img width="500px" src={Announcement} />
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
