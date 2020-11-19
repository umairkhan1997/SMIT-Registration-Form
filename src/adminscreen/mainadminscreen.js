import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import "./admin.css";
import logo from "../images/logo.png";

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dept: [
        { displayName: "smit", route: "adminsmit" },
        { displayName: "home", route: "adminHome" },
        { displayName: "service", route: "adminServices" },
        { displayName: "blood bank", route: "adminbloodbank" },
        { displayName: "contact us", route: "admincontact" },
        { displayName: "chaireman message", route: "adminchairmenmessage" },
        { displayName: "dastarkhwan", route: "admindasterkhwan" },
        { displayName: "job bank", route: "adminjobbank" },
        { displayName: "medical", route: "adminmedical" },
        { displayName: "media", route: "adminmedia" },
        { displayName: "news", route: "adminnews" },
        { displayName: "online istikhara", route: "administikhara" },
        { displayName: "online quran", route: "adminquran" },
        { displayName: "ro plant", route: "adminro" },
        { displayName: "welfare", route: "adminwelfare" },
        { displayName: "education", route: "admineducation" },
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
    const { dept } = this.state;
    return (
      <div>
        <div className="bg-light border-bottom">
          <div className="container">
            <div className="row p-4">
              <div className="col-md-3">
                <img width="100%" src={logo} />
              </div>
              <div className="col-md-8 border-left text-left p-3">
                <h2>Saylani Website Admin</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="p-5">
                <input
                  onChange={(e) => this.search(e)}
                  placeholder="Search Bar"
                />
              </div>
              {this.state.searchItem ? (
                <ul className="list">
                  {this.state.searchItem.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link
                          style={{ textTransform: "capitalize" }}
                          to={item.route}
                        >
                          {item.displayName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                false
              )}
              <hr />
              {this.state.dept ? (
                <ul className="list">
                  {dept.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link
                          style={{ textTransform: "capitalize" }}
                          to={item.route}
                        >
                          {item.displayName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                false
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
