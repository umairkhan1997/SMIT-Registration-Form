import React from "react";
import CountUp from "react-countup";

export default class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityDetails: {
        karachi: {
          video:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F2748380051930656&show_text=true&width=552&appId=799665263742122&height=425",
        },
        hyderabad: {
          video:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F3106826156086042&show_text=true&width=552&appId=799665263742122&height=495",
        },
        faisalabad: {
          video:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F3106826156086042&show_text=true&width=552&appId=799665263742122&height=495",
        },
        islamabad: {
          video:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F3106826156086042&show_text=true&width=552&appId=799665263742122&height=495",
        },
      },
    };
  }
  render() {
    const { city } = this.props;
    const { cityDetails } = this.state;
    return (
      <div>
        <div style={{ backgroundColor: "#0267b4" }}>
          <div className="container py-5">
            <div className="row py-5 d-flex justify-content-center">
              <div className="col-md-4 my-4">
                <div
                  style={{ height: "100%" }}
                  className="bg-white shadow text-center p-5 rounded"
                >
                  <span
                    style={{ backgroundColor: "#f0f4ff", color: "#0267b4" }}
                    className="qtyn icoPosition"
                  >
                    <i className="fas fa-bullseye"></i>
                  </span>
                  <h2>Vision</h2>
                  <p style={{ fontSize: "2em", color: "#0267b4" }}>
                    <CountUp start={1000} end={100000} duration={4} />+{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 my-4">
                <div
                  style={{ height: "100%" }}
                  className="bg-white shadow text-center p-5 rounded"
                >
                  <span
                    style={{ backgroundColor: "#f0f4ff", color: "#0267b4" }}
                    className="qtyn icoPosition"
                  >
                    <i className="fas fa-user-graduate"></i>
                  </span>
                  <h2>Trained Students</h2>
                  <p style={{ fontSize: "2em", color: "#0267b4" }}>
                    <CountUp start={1000} end={100000} duration={4} />+
                  </p>
                </div>
              </div>
              <div className="col-md-4 my-4">
                <div
                  style={{ height: "100%" }}
                  className="bg-white shadow text-center p-5 rounded"
                >
                  <span
                    style={{ backgroundColor: "#f0f4ff", color: "#0267b4" }}
                    className="qtyn icoPosition"
                  >
                    <i className="fas fa-book-open"></i>
                  </span>
                  <h2>Enrolled Students</h2>
                  <p style={{ fontSize: "2em", color: "#0267b4" }}>
                    {" "}
                    <CountUp start={10000} end={55000} duration={4} />+
                  </p>
                </div>
              </div>
              <div className="col-md-4 my-4">
                <div
                  style={{ height: "100%" }}
                  className="bg-white shadow text-center p-5 rounded"
                >
                  <span
                    style={{ backgroundColor: "#f0f4ff", color: "#0267b4" }}
                    className="qtyn icoPosition"
                  >
                    <i className="fas fa-laptop"></i>
                  </span>
                  <h2>IT Courses</h2>
                  <p style={{ fontSize: "2em", color: "#0267b4" }}>
                    <CountUp start={1} end={15} duration={4} />+
                  </p>
                </div>
              </div>
              <div className="col-md-4 my-4">
                <div
                  style={{ height: "100%" }}
                  className="bg-white shadow text-center p-5 rounded"
                >
                  <span
                    style={{ backgroundColor: "#f0f4ff", color: "#0267b4" }}
                    className="qtyn icoPosition"
                  >
                    <i className="fas fa-cogs"></i>
                  </span>
                  <h2>Vocational Training</h2>
                  <p style={{ fontSize: "2em", color: "#0267b4" }}>
                    <CountUp start={1} end={4} duration={4} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#f5f8ff" }} className="py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 p-2">
                <div className="py-5 px-4 bg-white shadow rounded introCard">
                  <h2>Introduction</h2>
                  <p className="color">
                    Living in an era driven by information technology makes
                    investing in our youth through computer programing education
                    necessary. Our vision is to make Pakistan a Global Software
                    Development Hub with the brightest IT minds. We want to
                    empower our youth to think, create and change the software
                    world. To achieve this goal, Saylani launched its Saylani
                    Mass I.T (SMIT) Program.
                  </p>
                </div>
              </div>
              <div className="col-md-6 p-2">
                <iframe
                  className="video"
                  width="100%"
                  src="https://www.youtube.com/embed/El6Ed7l-WeQ"
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
