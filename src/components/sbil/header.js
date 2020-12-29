import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import "./home.css";
import { HashLink } from "react-router-hash-link";

export default class MainHeader extends React.Component {
  render() {
    return (
      <div>
        <div className="sticky-top border-bottom bg-white">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  <img width="120px" src={logo} />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <HashLink className="nav-link" smooth to="/#course">
                        Course
                      </HashLink>
                    </li>
                    <li className="nav-item">
                      <HashLink className="nav-link" smooth to="/#teachers">
                        Teachers
                      </HashLink>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/apply">
                        Registration
                      </Link>
                    </li>
                    <li className="nav-item">
                      <HashLink className="nav-link" smooth to="/#contact">
                        Contact
                      </HashLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
