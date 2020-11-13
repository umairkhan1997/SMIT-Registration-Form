import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'
export default class ServicesAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
       <div className="bg-light">
          <div className="container">
            <div className="row p-4">
              <div className="col-md-3">
                <img width="100%" src={logo} />
              </div>
              <div className="col-md-8 border-left text-left p-3">
                <h2>Services Admin Panel</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}