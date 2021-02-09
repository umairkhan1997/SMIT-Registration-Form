import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../../images/logo.png";
import "./Home.css";
import { NavLink } from "react-router-dom";
export default class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="bg-light border-bottom sticky-top">
        <div className="backgroundLight shadow">
          <div className="">
            <nav className="navbar navbar-expand-lg d-flex py-0 px-5 justify-content-between navbar-light">
              <div>
                <NavLink className="navbar-brand" to="/">
                  <img src={logo} width="180px" />
                </NavLink>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="activeLink"
                        className="nav-link"
                        exact
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="activeLink"
                        className="nav-link"
                        to="/projects"
                      >
                        PROJECTS
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="activeLink"
                        className="nav-link"
                        to="/media"
                      >
                        MEDIA
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="activeLink"
                        className="nav-link"
                        to="/contact"
                      >
                        CONTACT
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="activeLink"
                        className="nav-link"
                        to="/news"
                      >
                        NEWS
                      </NavLink>
                    </li>

                    <li className="nav-item backgroundDark">
                      <NavLink
                        className="nav-link text-white"
                        activeClassName="activeLink"
                        to="Donation"
                      >
                        DONATION
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>{" "}
          </div>
        </div>
      </header>
    );
  }
}
