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
            <div className="col-md-4 p-3">
              <Fade left>
                <Link to="">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-donate"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Online Sadqa</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade left>
                <Link to="/smit">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-laptop-code"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Saylani Mass IT</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="/welfare">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-people-arrows"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Welfare</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade right>
                <Link to="/medical">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-hand-holding-medical"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Medical</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-tint"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Blood Donation</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-school"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Incubation center</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-store-alt"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Books Store</p>
                  </div>
                </Link>
              </Fade>
            </div>
     
            <div className="col-md-4 p-3">
              <Fade left>
                <Link to="">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-utensils"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Dasterkhwan</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-faucet"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>RO Plant</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade right>
                <Link to="">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-book-open"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Education</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade left>
                <Link to="">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-user-tie"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Job Bank</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-pen-nib"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Books</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade right>
                <Link to="">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-kaaba"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Hajj Application</p>
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
