import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="sticky-top bg-white shadow">
        <nav className="navbar navbar-expand-lg d-flex py-0 justify-content-center flex-row navbar-light">
          <div></div>
          <button
            className="navbar-toggler border-0"
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
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/aboutus#ourMission"
                      >
                        Over Mission
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/aboutus#ourVision"
                      >
                        Over Vision
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/aboutus#chairmanMessage"
                      >
                        Chairman Message
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/aboutus#ourHistory"
                      >
                        Our History
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        className="dropdown-item"
                        to="/aboutus#thematicArea"
                      >
                        Thematic Area
                      </HashLink>
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
                    to="/location"
                  >
                    Where We Work
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="activeLink"
                    className="nav-link"
                    to="/champion"
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
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
