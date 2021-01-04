import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ehsaas.css";

export default class Prime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ backgroundColor: "#f5f8ff" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 p-3">
              <iframe
                className="video"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/8H4n9B4jAcE"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
            <div className="col-md-6 p-3">
              <h2>
                Honorable Prime Minister Imran Khan, inaugurated the Islamabad
                Langar Khana
              </h2>
              <hr className="my-5" />
              <h3 style={{ color: "#0066b3" }}>
                Target For Langar Khana 112 Langar Khana in{" "}
                <span
                  style={{
                    backgroundColor: "#0066b3",
                    padding: "10px",
                    display: "inline-block",
                    color: "white",
                    borderRadius: "5px",
                    boxShadow: "0 4px 10px rgba(0,0,0,.4)",
                  }}
                >
                  Pakistan
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
