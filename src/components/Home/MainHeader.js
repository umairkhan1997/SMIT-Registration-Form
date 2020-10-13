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
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
              <div>
                <a class="navbar-brand" href="#">
                  <img
                    className="d-inline-block align-top"
                    src={logo}
                    width="180px"
                  />
                </a>
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
              <form>
                <div
                  className="collapse  navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>

                    {/* <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Projects - Services
                      </a>
                      <Fade>
                        <div
                          className="dropdown-menu headingList"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="services">
                            Services
                          </a>
                          <a className="dropdown-item" href="Smit">
                            Education
                          </a>
                          <a className="dropdown-item" href="/welfare">
                            Welfare
                          </a>
                          <a className="dropdown-item" href="/medical">
                            Medical
                          </a>
                        </div>
                      </Fade>
                    </li> */}
                         <li className="nav-item">
                      <a className="nav-link" href="services">
                      Projects - Services
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
                    
                    <li className="nav-item bg-primary rounded">
                      <a
                        className="nav-link"
                        href="Donation"
                        tabindex="-1"
                        aria-disabled="true"
                        style={{color:'white'}}
                      >
                        Donate
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
