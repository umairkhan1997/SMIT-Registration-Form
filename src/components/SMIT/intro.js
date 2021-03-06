import React from "react";

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        id="smitIntro"
        style={{ backgroundColor: "#f5f8ff" }}
        className=""
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 p-2">
              <div className="py-4 px-4 bg-white shadow rounded introCard">
                <h3 className="color"><b><u>INTRODUCTION</u></b></h3>
                <p className="color mt-4 text-muted font-weight-bold">
                  Living in an era driven by information technology makes
                  investing in our youth through computer programing education
                  necessary. Our vision is to make Pakistan a Global Software
                  Development Hub with the brightest IT minds. We want to
                  empower our youth to think, create and change the software
                  world. To achieve this goal, Saylani launched its Saylani Mass
                  I.T (SMIT) Program.
                </p>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <iframe
                className="video"
                width="100%"
                src="https://www.youtube.com/embed/El6Ed7l-WeQ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
