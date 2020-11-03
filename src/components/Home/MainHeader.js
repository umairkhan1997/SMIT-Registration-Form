import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../../images/logo.png";
// import "../App.css";
import "./Home.css";
import Fade from "react-reveal/Fade";
export default class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="bg-light border-bottom sticky-top">
        <div className="container-fluid bg-light">
          <div className="container">
            <nav class="navbar navbar-expand-lg d-flex justify-content-between navbar-light">
              <div>
                <a class="navbar-brand" href="#">
                  <img src={logo} width="180px" />
                </a>
              </div>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="services">
                        Services
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/media"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        Media
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/contact"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        Contact
                      </a>
                    </li>

                    <li className="nav-item">
                      <button className="donate">Donate</button>
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
