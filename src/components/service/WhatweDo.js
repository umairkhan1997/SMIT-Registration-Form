import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./service.css";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import Fade from "react-reveal";
const history = createBrowserHistory();

export default class WhatweDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goto = () => {
    history.push("/welfare");
  };
  render() {
    return (
      <div className="container-fluid bg-light">
        <div className="container">
          {/* <div className="p-3">
            <h1 className="Heading">What We Do</h1>
          </div> */}
          <div className="row">
            <div className="col-md-6 p-3">
              <Fade right>
                <Link to="/smit">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-desktop"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Saylani Mass Training</h3>
                      <p className='text-muted'>Best free IT Education In Pakistan</p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade up>
                <Link to="/welfare">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-people-arrows"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Welfare</h3>
                      <p className='text-muted'>Help for Needy Person</p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade up>
                <Link to="/welfare">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-book-open"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Education</h3>
                      <p className='text-muted'>Schooling Education for Needy Person</p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade left>
                <Link to="/donation">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-donate"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Online Sadqa</h3>
                      <p className='text-muted'>Your Sadqa from anywhere online</p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>

            <div className="col-md-6 p-3">
              <Fade right>
                <Link to="/medical">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-hand-holding-medical"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Medical</h3>
                      <p className='text-muted'>Medical Help for Needy patient</p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade right>
                <Link to="/bloodbank">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-tint"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Blood Bank</h3>
                      <p className='text-muted'>Blood Transfusion service in all over Pakistan</p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade left>
                <Link to="/dastarkhwan">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-utensils"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Dastarkhwan</h3>
                      <p className='text-muted'>Food for needy people and for wayfarer</p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade up>
                <Link to="/roplant">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-faucet"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">RO Plant</h3>
                      <p className='text-muted'>Clean water for every people.</p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>

            <div className="col-md-6 p-3">
              <Fade left>
                <Link to="/welfare">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-user-tie"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Job Bank</h3>
                      <p className='text-muted'>Remove unemployment in Pakistan</p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade up>
                <Link to="/welfare">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-pen-nib"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Books</h3>
                      <p className='text-muted'>Islamic Books PDF</p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade right>
                <Link to="/welfare">
                  <div className="row small">
                    <div className="col-md-4 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-kaaba"></i>
                      </p>
                    </div>
                    <div className="col-md-8 p-5 text-left">
                      <h3 className="text-muted">Hajj Application</h3>
                      <p className='text-muted'>Collection of Hajj application</p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
