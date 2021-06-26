import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import image from "../../images/Dr.jpg";
export default class MediaAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3 bg-light text-primary shadow p-5">
            <div className="p-4">
              <img src={logo} width="100%" />
            </div>
            <div className='p-5'>
              <h2>Media</h2>
            </div>
            <div className="p-4">
              <ul>
                <li>Services</li>
                <li>Objectives</li>
              </ul>
            </div>
          </div>
          <div
            style={{ height: "100vh", overflow: "scroll" }}
            className="col-md-9"
          >
            <div className="container"></div>
          </div>
        </div>
      </div>
    )
  }
}