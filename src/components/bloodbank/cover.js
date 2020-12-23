import { extend } from "jquery";
import React from "react";

export default class Cover extends React.Component {
  render() {
    return (
      <div>
        <div
          className="py-5 back"
          style={{
            backgroundImage:
              'url("https://assets.lybrate.com/q_auto:eco,f_auto,w_450/eagle/uploads/2205d15fe15d38f26e2fd5a86aae7697/eac636.jpg")',
          }}
        >
          <div className="container py-5">
            <h1 style={{ fontSize: "4em" }}>
              Your Blood can bring smile in other person face
            </h1>
            <button className="donorbtn">Become a Donor</button>
          </div>
        </div>
      </div>
    );
  }
}
