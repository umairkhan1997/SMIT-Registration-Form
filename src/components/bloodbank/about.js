import React from "react";
import "./blood.css";

export default class AboutBloodBank extends React.Component {
  render() {
    return (
      <div
        id="bloodBankIntro"
        style={{ backgroundColor: "#f7edee" }}
        className="py-5"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-2">
              <div className="py-5 px-4 bg-white shadow rounded introCard">
                <h2 className="dataHeading">About Blood Bank</h2>
                <p>
                  The recently established, state of the art Saylani Blood Bank
                  and Thalassemia Centre is furnished with modern equipment,
                  well trained technicians, leading Hematologists,
                  Pediatricians, and General Physicians, and offers free of cost
                  supply of blood and blood components to the poor and the
                  needy. Free and effective screening, counseling and continuous
                  medical care is provided to the deserving patients with
                  Thalassemia and other haemoglobinopathies.
                </p>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div>
                <iframe
                  className="video"
                  width="100%"
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
