import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";

import img1 from "../../images/roplants.jpg";
export default class Campus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container mainDiv mt-5" >
        <h1>Campus</h1>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 p-2">
              <div data-toggle="modal" data-target="#schoolCampus1" className='locationCard'>
                <h4>
                  Green House Academy Baldia Campus
                </h4>
                <p><i class="fas fa-map-marker-alt"></i> Address: Rasheedabad Saeedabad, Karachi, Karachi City, Sindh, Pakistan.</p>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div data-toggle="modal" data-target="#schoolCampus1" className='locationCard'>
                <h4>
                  Green House Academy Rehmania Campus
                </h4>
                <p><i class="fas fa-map-marker-alt"></i> Address: Chanesar Goth Chanesar Halt, Karachi, Karachi City, Sindh, Pakistan.</p>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div data-toggle="modal" data-target="#schoolCampus1" className='locationCard'>
                <h4>
                  Green House Academy Gulzar e Hijri campus
                </h4>
                <p><i class="fas fa-map-marker-alt"></i> Address: Sector 11 A Gulzar E Hijri Scheme 33, Karachi, Karachi City, Sindh, Pakistan.</p>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div data-toggle="modal" data-target="#schoolCampus1" className='locationCard'>
                <h4>
                  Green House Academy Kemari Campus
                </h4>
                <p><i class="fas fa-map-marker-alt"></i> Address: عثمان غنی روڈ، Goth Shaikhan Bhutta Village, Karachi, Karachi City, Sindh, Pakistan.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="schoolCampus1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Campus Location
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14474.646868652992!2d66.9680024!3d24.909518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x98728fc73e0ca82b!2sGreen%20House%20Academy%20Baldia%20campus!5e0!3m2!1sen!2s!4v1608624556123!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
