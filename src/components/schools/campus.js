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
      <div>
        <h1>Campus</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-5">
              <div data-toggle="modal" data-target="#schoolCampus1" className='locationCard'>
                <p>
                  <i class="fas fa-map-marker-alt"></i> Campus 1
                </p>
                <p>Address: abc Streat, Karachi, pakistan.</p>
                <p>03072199560</p>
              </div>
            </div>
            <div className="col-md-4 p-5">
              <div data-toggle="modal" data-target="#schoolCampus1" className='locationCard'>
                <p>
                  <i class="fas fa-map-marker-alt"></i> Campus 2
                </p>
                <p>Address: abc Streat, Karachi, pakistan.</p>
                <p>03072199560</p>
              </div>
            </div>
            <div className="col-md-4 p-5">
              <div data-toggle="modal" data-target="#schoolCampus1" className='locationCard'>
                <p>
                  <i class="fas fa-map-marker-alt"></i> Campus 3
                </p>
                <p>Address: abc Streat, Karachi, pakistan.</p>
                <p>03072199560</p>
              </div>
            </div>
            <div className="col-md-4 p-5">
              <div data-toggle="modal" data-target="#schoolCampus1" className='locationCard'>
                <p>
                  <i class="fas fa-map-marker-alt"></i> Campus 4
                </p>
                <p>Address: abc Streat, Karachi, pakistan.</p>
                <p>03072199560</p>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115750.06624050759!2d67.10231020106806!3d24.959664116251762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34155d61278d5%3A0xca2ca18be3a9e8bc!2sSaylani%20Schooling%20System%20Campus%203!5e0!3m2!1sen!2s!4v1605612208548!5m2!1sen!2s"
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
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
