import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../../images/logo.png";
import "./Home.css";
import { NavLink, Link } from "react-router-dom";

export default class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="bg-white border-bottom">
        <div className="shadow">
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 py-3">
                  <div>
                    <NavLink className="navbar-brand" to="/">
                      <img src={logo} width="200px" />
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 py-3 text-center">
                  <button
                    style={{ backgroundColor: "#62BA47" }}
                    className="btntop"
                  >
                    SWIT UK
                  </button>
                  <button
                    style={{ backgroundColor: "#62BA47" }}
                    className="btntop"
                  >
                    SWIT USA
                  </button>
                  <button
                    style={{ backgroundColor: "#084E97" }}
                    className="btntop"
                  >
                    <NavLink className="text-white" to="Donation">
                      DONATE US
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
