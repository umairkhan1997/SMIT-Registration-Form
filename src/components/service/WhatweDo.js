import React from "react";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import HajjPdf from "../HajjPdf/HAJJ.pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "./service.css";
const history = createBrowserHistory();
export default class WhatweDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dept: [
        { displayName: "smit", route: "smit" },
        { displayName: "blood bank", route: "bloodbank" },
        { displayName: "dastarkhwan", route: "dastarkhwan" },
        { displayName: "job bank", route: "jobBank" },
        { displayName: "medical", route: "medical" },
        { displayName: "media", route: "media" },
        { displayName: "news", route: "news" },
        { displayName: "online istikhara", route: "istikhara" },
        { displayName: "online quran", route: "onlineQ" },
        { displayName: "ro plant", route: "roplant" },
        { displayName: "welfare", route: "welfare" },
        { displayName: "incubation", route: "incubation" },
        { displayName: "online sadqa", route: "donation" },
        { displayName: "saylani school", route: "education" },
      ],
      searchItem: [],
    };
  }
  search(e) {
    console.log(e.target.value);
    let result = this.state.dept.filter((word) =>
      word.displayName.includes(e.target.value)
    );
    console.log(result);
    this.setState({ searchItem: result });
  }

  render() {
    return (
      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row py-2">
            <div className="col-md-6">
              <h2 className="text-center">
                Saylani Welfare Services
              </h2>
            </div>
            <div className="col-md-6 text-right">
              <input
                className="search"
                onChange={(e) => this.search(e)}
                placeholder="Search Services Here..."
              />
            </div>
          </div>

          <ul className="list my-4">
            {this.state.searchItem ? (
              <div className="row">
                {this.state.searchItem.map((item, i) => {
                  return (
                    <div className="col-md-6 p-3">
                      <Fade top>
                        <Link to={item.route}>
                          <div className="row small">
                            <div className="col-md-9 p-5 text-left">
                              <h3
                                style={{ textTransform: "capitalize" }}
                                className="text-muted"
                              >
                                {item.displayName}
                              </h3>
                            </div>
                          </div>
                        </Link>
                      </Fade>
                    </div>
                  );
                })}
              </div>
            ) : (
              false
            )}
          </ul>
        </div>

        <div className="container">
          {/* <div className="p-3">
            <h1 className="Heading">What We Do</h1>
          </div> */}
          <div className="row">
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade top>
                <Link to="/smit">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-desktop"></i>
                    </p>
                    <h3 className="text-muted">IT Training</h3>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade left>
                <Link to="/welfare">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-people-arrows"></i>
                    </p>
                    <h3 className="text-muted">Welfare</h3>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade right>
                <Link to="/news">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="far fa-newspaper"></i>
                    </p>
                    <h3 className="text-muted">NEWS</h3>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade bottom>
                <Link to="/education">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-book-open"></i>
                    </p>
                    <h3 className="text-muted">Schools</h3>
                  </div>
                </Link>
              </Fade>
            </div>

            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade top>
                <Link to="/incubation">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-school"></i>
                    </p>
                    <h3 className="text-muted">Incubation</h3>
                  </div>
                </Link>
              </Fade>
            </div>

            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade right>
                <Link to="/donation">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-donate"></i>
                    </p>
                    <h3 className="text-muted">Online Sadqa</h3>
                  </div>
                </Link>
              </Fade>
            </div>

            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade left>
                <Link to="/medical">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-hand-holding-medical"></i>
                    </p>
                    <h3 className="text-muted">Medical</h3>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade bottom>
                <Link to="/bloodbank">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-tint"></i>
                    </p>
                    <h3 className="text-muted">Blood Bank</h3>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade top>
                <Link to="/onlineM">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-mosque"></i>
                    </p>
                    <h3 className="text-muted">Masajid Reg</h3>
                  </div>
                </Link>
              </Fade>
            </div>

            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade left>
                <Link to="/dastarkhwan">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-utensils"></i>
                    </p>
                    <h3 className="text-muted">Dastarkhwan</h3>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade bottom>
                <Link to="/roplant">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-faucet"></i>
                    </p>
                    <h3 className="text-muted">RO Plant</h3>
                  </div>
                </Link>
              </Fade>
            </div>

            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade top>
                <Link to="/jobBank">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-user-tie"></i>
                    </p>
                    <h3 className="text-muted">Job Bank</h3>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade right>
                <Link to="/bookStore">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-pen-nib"></i>
                    </p>
                    <h3 className="text-muted">Saylani Books</h3>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade left>
                <Link to="/istikhara">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-pen-nib"></i>
                    </p>
                    <h3 className="text-muted">Online Istikhara</h3>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade bottom>
                <Link to={HajjPdf} download>
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-kaaba"></i>
                    </p>
                    <h3 className="text-muted">Hajj Application</h3>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Fade top>
                <Link to="/quranApp">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-quran"></i>
                    </p>
                    <h3 className="text-muted">Quran App (Taftessh)</h3>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-3 p-3">
              <Fade right>
                <Link to="/onlineQ">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-quran"></i>
                    </p>
                    <h3 className="text-muted">Quran Pak Registeration</h3>
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
