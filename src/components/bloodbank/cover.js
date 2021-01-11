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
              'url("https://www.choc.org/wp/wp-content/uploads/2014/09/blooddonorservices.png")',
          }}
        >
          <div className="container my-5 py-5">
            <h1 className="custom-underline">
              Your Blood can bring smile in other person face
            </h1>
            <button className="donorbtn">Become a Donor</button>
          </div>
        </div>
      </div>
    );
  }
}
