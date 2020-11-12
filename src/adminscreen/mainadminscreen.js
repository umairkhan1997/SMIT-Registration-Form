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
        {displayName:'SMIT',route:'adminsmit'},
        {displayName:'Home',route:'adminHome'},
        {displayName:'Service',route:'adminServices'},
        {displayName:'Blood Bank',route:'adminbloodbank'},
        {displayName:'Contact Us',route:'admincontact'},
        {displayName:'Chaireman Message',route:'adminchairmenmessage'},
        {displayName:'Dastarkhwan',route:'admindasterkhwan'},
        {displayName:'Job Bank',route:'adminjobbank'},
        {displayName:'Medical',route:'adminmedical'},
        {displayName:'Media',route:'adminmedia'},
        {displayName:'NEWS',route:'adminnews'},
        {displayName:'Online Istikhara',route:'administikhara'},
        {displayName:'Online Quran',route:'adminquran'},
        {displayName:'RO Plant',route:'adminro'},
        {displayName:'Welfare',route:'adminwelfare'},
      ],
    };
  }
  search(e) {
    console.log(e.target.value);
    this.state.dept.filter((a) => {
      let b = a.displayName == e.target.value ? e.target.value:true;
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
                {dept.map((item,i) => {
                  return (
                    <li key={i}>
                      <Link to={item.route}>{item.displayName}</Link>
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
