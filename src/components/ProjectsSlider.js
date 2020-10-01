import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";

export default class ProjectsSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid bg-light">
        <div className="container p-5">
          <div className="row pt-5 pb-5">
            <div className="col-md-3">
              <div className="smallCard m-2 bg-white shadow">
                <div className="round-icon">
                  <i class="fas fa-award"></i>
                </div>
                <div>
                  <h2 className="p-3">Mission</h2>
                  <p className="text-muted p-3">
                    Accusantium quam, ultricies eget tempor id, aliquam eget
                    nibh et. Maecen aliquam, risus at semper ullamcorper, magna
                  </p>
                </div>
                <div className="p-2 pb-5">
                  <button className="read">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="smallCard m-2 bg-white shadow">
                <div className="round-icon">
                  <i class="fas fa-headset"></i>
                </div>
                <div>
                  <h2 className="p-3">Support</h2>
                  <p className="text-muted p-3">
                    Accusantium quam, ultricies eget tempor id, aliquam eget
                    nibh et. Maecen aliquam, risus at semper ullamcorper, magna
                  </p>
                </div>
                <div className="p-2 pb-5">
                  <button className="read">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="smallCard m-2 bg-white shadow">
                <div className="round-icon">
                  <i class="fas fa-user-friends"></i>
                </div>
                <div>
                  <h2 className="p-3">Events</h2>
                  <p className="text-muted p-3">
                    Accusantium quam, ultricies eget tempor id, aliquam eget
                    nibh et. Maecen aliquam, risus at semper ullamcorper, magna
                  </p>
                </div>
                <div className="p-2 pb-5">
                  <button className="read">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="smallCard m-2 bg-white shadow">
                <div className="round-icon">
                  <i class="fas fa-user-plus"></i>
                </div>
                <div>
                  <h2 className="p-3">Volunteer</h2>
                  <p className="text-muted p-3">
                    Accusantium quam, ultricies eget tempor id, aliquam eget
                    nibh et. Maecen aliquam, risus at semper ullamcorper, magna
                  </p>
                </div>
                <div className="p-2 pb-5">
                  <button className="read">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
