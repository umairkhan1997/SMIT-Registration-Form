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
              <div className="d-flex justify-content-between">
                <div>
                  <div>
                    <NavLink className="navbar-brand" to="/">
                      <img src={logo} width="200px" />
                    </NavLink>
                  </div>
                </div>
                <div className="py-2 donatePanel text-center">
                  <button
                    style={{ backgroundColor: "#62BA47" }}
                    className="btntop"
                  >
                    <a href="https://www.saylaniwelfareuk.com/" target="_blank">
                      SWIT UK
                    </a>
                  </button>
                  <button
                    style={{ backgroundColor: "#62BA47" }}
                    className="btntop"
                  >
                    <a
                      href="https://saylaniwelfare.com/USA-Ramzan"
                      target="_blank"
                    >
                      SWIT USA
                    </a>
                  </button>
                  <button
                    style={{ backgroundColor: "#084E97" }}
                    className="btntop"
                  >
                    <NavLink className="text-white" to="Donation">
                      Donate Now
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
