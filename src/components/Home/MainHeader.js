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
      <header className="bg-white border-bottom sticky-top">
        <div className="shadow">
          <div className="p-2">
            <nav className="navbar navbar-expand-lg d-flex py-0 px-5 justify-content-between navbar-light">
              <div>
                <NavLink className="navbar-brand" to="/">
                  <img src={logo} width="200px" />
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
                  <ul
                    style={{ backgroundColor: "white" }}
                    className="navbar-nav mr-auto"
                  >
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
                    <li class="nav-item dropdown">
                      <NavLink
                        class="nav-link dropdown-toggle"
                        to="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        activeClassName="activeLink"
                      >
                        About Us
                      </NavLink>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link class="dropdown-item" href="#">
                            Founder Message
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" href="#">
                            Vision & Mission
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" href="#">
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" href="#">
                            Audit Report
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" href="#">
                            NTN Certificate
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" href="#">
                            Locations
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="activeLink"
                        className="nav-link"
                        to="/projects"
                      >
                        What We Do
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="activeLink"
                        className="nav-link"
                        to="/projects"
                      >
                        Where We Work
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="activeLink"
                        className="nav-link"
                        to="/projects"
                      >
                        Our Champions
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="activeLink"
                        className="nav-link"
                        to="/media"
                      >
                        Media
                      </NavLink>
                    </li>
                    {/* <li className="nav-item">
                      <NavLink
                        activeClassName="activeLink"
                        className="nav-link"
                        to="/contact"
                      >
                        CONTACT
                      </NavLink>
                    </li> */}
                    {/* <li className="nav-item">
                      <NavLink
                        activeClassName="activeLink"
                        className="nav-link"
                        to="/news"
                      >
                        NEWS
                      </NavLink>
                    </li> */}

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
