import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import logo from "../images/logo.png";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ backgroundColor: "#292825" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-left p-5">
              <img width="180px" src={logo} />
              <div className="pt-3 text-white">
                <p>A-25, Bahadurabad Chowrangi Karachi, Pakistan</p>
                <p>UAN: 111-729-526</p>
              </div>
            </div>

            <div className="col-md-4 text-left p-5">
              <ul>
                <li className="footerList">
                  <a href="/">Home</a>
                </li>
                <li className="footerList">
                  <a href="/contact">Contact</a>
                </li>
                <li className="footerList">
                  <a href="/media">Media</a>
                </li>
                <li className="footerList">
                  <a href="/projects">Projects</a>
                </li>
                <li className="footerList">
                  <a href="/welfare">Welfare</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-left p-5">
              <iframe
                style={{ borderRadius: "8px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.447066649314!2d67.06596461432055!3d24.882727750494166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eebb56aaaab%3A0x27ab04809ef5020a!2sSaylani%20Welfare%20Head%20Office.!5e0!3m2!1sen!2s!4v1602339523746!5m2!1sen!2s"
                width="100%"
                height="250"
                frameBorder="0"
                allowFullScreen="allowfullscreen"
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div
          className="p-2 text-center"
          style={{ backgroundColor: "rgb(29 28 26)" }}
        >
          <p className="text-white">Copyright © 2020 Saylani Welfare</p>
        </div>
      </div>
    );
  }
}
