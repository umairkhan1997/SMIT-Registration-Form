import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";
import cover from "../../images/itback.png";
import { Link } from "react-router-dom";

export default class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div style={{ backgroundImage: `url(${cover})` }} className="back p-5">
          <div className="container py-5">
            <div
             
              className="my-5 p-5 coverText"
            >
              <h1 style={{ fontSize: "3em" }}>4000 Students, Counting 1 Goal 10 billion Dollar IT Export</h1>
              <button className="prevbtn">
                <Link className="text-white" to="/apply">
                  Apply
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
