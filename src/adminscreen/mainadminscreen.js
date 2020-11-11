import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import "./admin.css";
export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dept: [
        "Home",
        "Services",
        "Blood Bank",
        "Chaireman Message",
        "Contact Us",
        "Dastarkhwan",
        "Job Bank",
        "Medical",
        "Media",
        "NEWS",
        "Online Istikhara",
        "Online Quran",
        "Ro Plant",
        "Services",
        "SMIT",
        "Welfare",
      ],
    };
  }
  search(e) {
    console.log(e.target.value);
    this.state.dept.filter((a = e.target.value) => {
      let b = a ? e.target.value:false;
      console.log(b)
    });
  }
  render() {
    const { dept } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="p-5">
                <input
                  onChange={(e) => this.search(e)}
                  placeholder="Search Bar"
                />
              </div>
              <ul className="list">
                {dept.map((item) => {
                  return (
                    <li>
                      <Link to="adminHome">{item}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
