import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./service.css";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import HajjPdf from "../HajjPdf/HAJJ.pdf";
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
          <p
            className="text-center m-5"
            style={{ fontSize: 26, color: "dodgerblue" }}
          >
            Saylani Welfare International Trust
          </p>
          <input
            className="search"
            onChange={(e) => this.search(e)}
            placeholder="Search Services Here..."
          />
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
                    // <li key={i}>
                    //   <Link
                    //     style={{ textTransform: "capitalize" }}
                    //     to={item.route}
                    //   >
                    //     {item.displayName}
                    //   </Link>
                    // </li>
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
            <div className="col-md-6 p-3">
              <Fade top>
                <Link to="/smit">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-desktop"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Saylani Mass Training</h3>
                      <p className="text-muted">
                        Best free IT Education In Pakistan
                      </p>
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
                        <i class="fas fa-people-arrows"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Welfare</h3>
                      <p className="text-muted">Help for Needy Person</p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade right>
                <Link to="/news">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="far fa-newspaper"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">NEWS</h3>
                      <p className="text-muted">Saylani News And Media</p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade bottom>
                <Link to="/education">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-book-open"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Saylani Schools</h3>
                      <p className="text-muted">
                        Schooling Education for Needy Person
                      </p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>

            <div className="col-md-6 p-3">
              <Fade top>
                <Link to="/incubation">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-school"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Incubation center</h3>
                      <p className="text-muted">
                        Your Idea or Startup is our Priority
                      </p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>

            <div className="col-md-6 p-3">
              <Fade right>
                <Link to="/donation">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-donate"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Online Sadqa</h3>
                      <p className="text-muted">
                        Your Sadqa from anywhere online
                      </p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>

            <div className="col-md-6 p-3">
              <Fade left>
                <Link to="/medical">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-hand-holding-medical"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Medical</h3>
                      <p className="text-muted">
                        Medical Help for Needy patient
                      </p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade bottom>
                <Link to="/bloodbank">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-tint"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Blood Bank</h3>
                      <p className="text-muted">
                        Blood Transfusion service in all over Pakistan
                      </p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade top>
                <Link to="/onlineM">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-mosque"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">
                        Saylani Online Masajid Registeration
                      </h3>
                      <p className="text-muted">
                        Blood Transfusion service in all over Pakistan
                      </p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade right>
                <Link to="/onlineQ">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-quran"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Quran Pak Registeration</h3>
                      <p className="text-muted">
                        Blood Transfusion service in all over Pakistan
                      </p>
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
                      <p className="text-muted">
                        Food for needy people and for wayfarer
                      </p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade bottom>
                <Link to="/roplant">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-faucet"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">RO Plant</h3>
                      <p className="text-muted">
                        Clean water for every people.
                      </p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            {/* <div className="col-md-4 p-3">
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
            </div> */}

            <div className="col-md-6 p-3">
              <Fade top>
                <Link to="/jobBank">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-user-tie"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Job Bank</h3>
                      <p className="text-muted">
                        Remove unemployment in Pakistan
                      </p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade right>
                <Link to="/bookStore">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-pen-nib"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Books</h3>
                      <p className="text-muted">Islamic Books PDF</p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade left>
                <Link to="/istikhara">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-pen-nib"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Online Istikhara</h3>
                      <p className="text-muted">Online Istikhara </p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade bottom>
                <Link to={HajjPdf} download>
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-kaaba"></i>
                      </p>
                    </div>
                    <div className="col-md-8 p-5 text-left">
                      <h3 className="text-muted">Hajj Application</h3>
                      <p className="text-muted">
                        Collection of Hajj application
                      </p>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade top>
                <Link to="/quranApp">
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-quran"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Quran App (Taftessh)</h3>
                      <p className="text-muted">
                        Quran Application Esaal-e-Sawaab
                      </p>
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
