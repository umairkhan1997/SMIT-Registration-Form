import React from "react";
import "./blood.css";

export default class AboutBloodBank extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f7edee" }} className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="shadow p-5 bg-white rounded">
                <h2 className="dataHeading">About Blood Bank</h2>
                <p>
                  The recently established, state of the art Saylani Blood Bank
                  and Thalassemia Centre is furnished with modern equipment,
                  well trained technicians, leading Hematologists,
                  Pediatricians, and General Physicians, and offers free of cost
                  supply of blood and blood components to the poor and the
                  needy.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <iframe
                  className="video"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/-WR3_zBAaXs"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="allowfullscreen"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
