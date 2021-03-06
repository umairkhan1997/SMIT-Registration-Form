import React from "react";
import "../../App.css";
export default class Prime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="py-5" style={{ backgroundColor: "#f5f8ff" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 p-3">
              <iframe
                className="video"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/RqYg42JJNsY"
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
              <h3 className="color font-weight-bold">
                Target For Langar Khana 112 Langar Khana in{" "}
                <span
                  style={{
                    backgroundColor: "white",
                    padding: "7px",
                    margin: "7px",
                    display: "inline-block",
                    color: "#016838",
                    borderLeft: "5px solid #016838",
                    boxShadow: "0 3px 5px rgba(0,0,0,.3)",
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
