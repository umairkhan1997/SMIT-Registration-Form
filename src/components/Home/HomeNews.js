import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";
import img1 from "../../images/gray-background.jpg";
import img6 from "../../images/president.jpeg";
import img2 from "../../images/govern.jpg";
export default class HomeNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{ backgroundColor: "rgb(245, 248, 255)" }}
        className="container-fluid pt-3 pb-3"
      >
        <div className="container">
          <h1 className="Heading" style={{ color: "#316DC3", marginLeft: -8 }}>
            News
          </h1>

          <div className="row">
            <div className="col-md-6">
              <div className="news row mt-2 mb-2 bg-white">
                <div className="col-md-5 col-sm-3 pt-3 pb-3">
                  <img src={img2} width="100%" />
                </div>
                <div className="col-md-7 col-sm-3 text-left">
                  <p>Mr. Mohammad Sarwar Governer of Punjab </p>
                  <p className="text-muted">
                    On 21 Sep,2020 Hazrat Moulana Bashir Sahab Visit Punjab ...
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="news row mt-2 mb-2 bg-white">
                <div className="col-md-5 col-sm-3 pt-3 pb-3">
                  <img src={img6} width="100%" />
                </div>
                <div className="col-md-7 col-sm-3 text-left">
                  <p> Dr. Arif Alvi (President of Pakistan)</p>
                  <p className="text-muted">
                    On 23 Feb,2020 Dr. Arif Alvi (President of Pakistan) Visit
                    ...
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="news row mt-2 mb-2 bg-white">
                <div className="col-md-5 col-sm-3 pt-3 pb-3">
                  <img src={img2} width="100%" />
                </div>
                <div className="col-md-7 col-sm-3 text-left">
                  <p> Mr. Mohammad Sarwar Governer of Punjab</p>
                  <p className="text-muted">
                    On 21 Sep,2020 Hazrat Moulana Bashir Sahab Visit Punjab ...
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-2">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/Jkg1W4SdAO4"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
