import React from "react";

export default class Campus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: [
        {
          name: " Green House Academy Baldia Campus",
          address:
            "Rasheedabad Saeedabad, Karachi, Karachi City, Sindh, Pakistan.",
          geoLocation:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14474.646868652992!2d66.9680024!3d24.909518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x98728fc73e0ca82b!2sGreen%20House%20Academy%20Baldia%20campus!5e0!3m2!1sen!2s!4v1608624556123!5m2!1sen!2s",
        },
        {
          name: " Green House Academy Rehmania Campus",
          address:
            "Chanesar Goth Chanesar Halt, Karachi, Karachi City, Sindh, Pakistan.",
          geoLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3891018947006!2d67.06043125026311!3d24.850556883980328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d8a2d197a7d%3A0x5c1f7bcf0f56f822!2sGreen%20House%20Academy%20Rehmania%20campus!5e0!3m2!1sen!2s!4v1608624719344!5m2!1sen!2s",
        },
        {
          name: " Green House Academy Gulzar e Hijri campus",
          address:
            "Sector 11 A Gulzar E Hijri Scheme 33, Karachi, Karachi City, Sindh, Pakistan.",
          geoLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.55270578171!2d67.09666215026604!3d24.981328583918526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb347f6abde92cb%3A0x933d5904f0a2767b!2sGreen%20House%20Academy%20Gulzar%20e%20Hijri%20campus!5e0!3m2!1sen!2s!4v1608624796411!5m2!1sen!2s",
        },
        {
          name: " Green House Academy Kemari Campus",
          address:
            "عثمان غنی روڈ، Goth Shaikhan Bhutta Village, Karachi,  Sindh, Pakistan.",
          geoLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.1707055452093!2d66.98886445026243!3d24.82383518399299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb317cb8d0ef44d%3A0x920dbe647ef69e03!2sGreen%20House%20Academy%20Kemari%20Campus!5e0!3m2!1sen!2s!4v1608624853773!5m2!1sen!2s",
        },
      ],
      currentMap: {},
    };
  }

  render() {
    return (
      <div className="container mainDiv mt-5">
        <h2>Campus</h2>
        <div className="container mt-5">
          <div className="row">
            {this.state.campuses.map((e, i) => {
              return (
                <div key={i} className="col-md-3 p-2">
                  <div
                    data-toggle="modal"
                    data-target="#schoolCampus1"
                    className="locationCard"
                    onClick={() => this.setState({ currentMap: e })}
                  >
                    <h4>{e.name}</h4>
                    <br />
                    <p>{e.address}</p>
                  </div>
                </div>
              );
            })}
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
                  {this.state.currentMap.name}
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
                  src={this.state.currentMap.geoLocation}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
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
