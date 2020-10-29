import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../../images/logo.png";
import Zoom from "react-reveal/Zoom";
import "./donate.css";
import {Link} from 'react-router-dom'

export default class DonateBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="donateBtn">
        <Link to="/donation">
          Donate{" "}
          <span className="p-2">
            <i class="fas fa-donate"></i>
          </span>
         </Link>
        </div>
      </div>
    );
  }
}
