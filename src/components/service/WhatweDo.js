import React from "react";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import HajjPdf from "../HajjPdf/HAJJ.pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "./service.css";
import { connect } from "react-redux";
import { projectCat } from "../../Redux/action/homeAction";

const history = createBrowserHistory();
class WhatweDo extends React.Component {
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
      // searchItem: [],
      searchItem: "",
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

  componentDidMount() {
    this.props.projectCat();
  }

  render() {
    return (
      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row py-2">
            <div className="col-md-6 ">
              <h2 className="text-left">
                Current and Upcomming projects of Saylani
              </h2>
            </div>
            <div className="col-md-6 text-right ">
              <input
                className="search"
                onChange={(e) => this.setState({ searchItem: e.target.value })}
                placeholder="Search Services Here..."
              />
            </div>
          </div>

          {/* <ul className="list my-4">
            {this.state.searchItem ? (
              <div className="row">
                {this.state.searchItem.map((item, i) => {
                  return (
                    <div className="col-md-6 p-3">
                      <Zoom>
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
                      </Zoom>
                    </div>
                  );
                })}
              </div>
            ) : (
                false
              )}
          </ul> */}
        </div>

        <div className="container">
          {/* <div className="p-3">
            <h1 className="Heading">What We Do</h1>
          </div> */}
          <div className="row">
            {this.props.projectCats
              .filter((name) => {
                return (
                  name.proName
                    .toLowerCase()
                    .indexOf(this.state.searchItem.toLowerCase()) >= 0
                );
              })
              .map((filteredName) => {
                return filteredName.view ? (
                  <div className="col-md-3 col-sm-6 col-sm-6 p-3">
                    <Zoom>
                      <Link to={filteredName.proHrefVal}>
                        <div className="small text-center">
                          <div className="p-3">
                            <p style={{ fontSize: "3.5em" }}>
                              <i class={filteredName.proIcon}></i>
                            </p>
                          </div>
                          <p className="proName"> {filteredName.proName}</p>
                        </div>
                      </Link>
                    </Zoom>
                  </div>
                ) : null;
              })}
            {/* <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Zoom>
                <Link to="/welfare">
                  <div className="small text-center">
                    <div className="p-3">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-people-arrows"></i>
                      </p>
                    </div>
                    <p className="proName">Welfare</p>
                  </div>
                </Link>
              </Zoom>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Zoom>
                <Link to="/news">
                  <div className="small text-center">
                    <div className="p-3">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="far fa-newspaper"></i>
                      </p>
                    </div>
                    <p className="proName">NEWS</p>
                  </div>
                </Link>
              </Zoom>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Zoom>
                <Link to="/education">
                  <div className="small text-center">
                    <div className="p-3">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-book-open"></i>
                      </p>
                    </div>
                    <p className="proName">Green House Schools</p>
                  </div>
                </Link>
              </Zoom>
            </div>

            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Zoom>
                <Link to="/incubation">
                  <div className="small text-center">
                    <div className="p-3">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-school"></i>
                      </p>
                    </div>
                    <p className="proName">Incubation</p>
                  </div>
                </Link>
              </Zoom>
            </div>

            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Zoom>
                <Link to="/donation">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-donate"></i>
                    </p>
                    <h3 className="text-muted">Online Sadqa</h3>
                  </div>
                </Link>
              </Zoom>
            </div>

            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Zoom>
                <Link to="/medical">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-hand-holding-medical"></i>
                    </p>
                    <h3 className="text-muted">Medical</h3>
                  </div>
                </Link>
              </Zoom>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Zoom>
                <Link to="/bloodbank">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-tint"></i>
                    </p>
                    <h3 className="text-muted">Blood Bank</h3>
                  </div>
                </Link>
              </Zoom>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Zoom>
                <Link to="/onlineM">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-mosque"></i>
                    </p>
                    <h3 className="text-muted">Masajid Reg</h3>
                  </div>
                </Link>
              </Zoom>
            </div>

            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Zoom>
                <Link to="/dastarkhwan">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-utensils"></i>
                    </p>
                    <h3 className="text-muted">Dastarkhwan</h3>
                  </div>
                </Link>
              </Zoom>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Zoom>
                <Link to="/roplant">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-faucet"></i>
                    </p>
                    <h3 className="text-muted">RO Plant</h3>
                  </div>
                </Link>
              </Zoom>
            </div>

            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Zoom>
                <Link to="/jobBank">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-user-tie"></i>
                    </p>
                    <h3 className="text-muted">Job Bank</h3>
                  </div>
                </Link>
              </Zoom>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Zoom>
                <Link to="/bookStore">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-pen-nib"></i>
                    </p>
                    <h3 className="text-muted">Saylani Books</h3>
                  </div>
                </Link>
              </Zoom>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Zoom>
                <Link to="/istikhara">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-pen-nib"></i>
                    </p>
                    <h3 className="text-muted">Online Istikhara</h3>
                  </div>
                </Link>
              </Zoom>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Zoom>
                <Link to={HajjPdf} download>
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-kaaba"></i>
                    </p>
                    <h3 className="text-muted">Hajj Application</h3>
                  </div>
                </Link>
              </Zoom>
            </div>
            <div className="col-md-3 col-sm-6 col-sm-6 p-3">
              <Zoom>
                <Link to="/quranApp">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-quran"></i>
                    </p>
                    <h3 className="text-muted">Quran App (Taftessh)</h3>
                  </div>
                </Link>
              </Zoom>
            </div>
            <div className="col-md-3 p-3">
              <Zoom>
                <Link to="/onlineQ">
                  <div className="small p-3 text-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-quran"></i>
                    </p>
                    <h3 className="text-muted">Quran Pak Registeration</h3>
                  </div>
                </Link>
              </Zoom>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    projectCats: state.root.projectCat,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    projectCat: () => {
      dispatch(projectCat());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(WhatweDo);
