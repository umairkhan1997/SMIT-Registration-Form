import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { schoolCampusGet } from "../../Redux/action/schoolGreen";
class Campus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      currentMap: {},
    };
  }

  componentDidMount() {
    this.props.schoolCampusGet();
  }

  render() {
    return (
      <div className="container mainDiv mt-5">
        <h2>Campus</h2>
        <div className="container mt-5">
          <div className="row">
            {this.props.schoolCampusGets && this.props.schoolCampusGets.map((e, i) => {
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

function mapStateToProp(state) {
  return {
    schoolCampusGets: state.reducerSchoolGreen.schoolCampusGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    schoolCampusGet: () => {
      dispatch(schoolCampusGet());
    },
  };
}
export default withRouter(connect(mapStateToProp, mapDispatchToProp)(Campus));
