import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./ro.css";
import { connect } from "react-redux";
import { RoPlantLocationGet } from "../../Redux/action/RoPlantAction";

class ROLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        name: "City court 2",
        area: "Adhumal Oodharam Quarter, Karachi",
        mapLocation:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.274774601776!2d67.00441281500271!3d24.85446328405677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzE2LjEiTiA2N8KwMDAnMjMuOCJF!5e0!3m2!1sen!2s!4v1607671913089!5m2!1sen!2s",
      },
    };
  }

  componentDidMount() {
    this.props.RoPlantLocationGet();
  }
  render() {
    return (
      <div >
        <div
          style={{
            backgroundColor: "#d8dfe6",
          }}
          className="bg-image"
        >
          <div
            // style={{ borderBottom: "1.5px solid dodgerblue" }}
            className="container-fluid"
          >
            <div className="container p-4">
              <h3 className="color"><b>RO PLANT LOCATION IN PAKISTAN</b></h3>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#d8dfe6",
          }}
          className="bg-image "
        >
          <div className="container">
            <div className="row">
              {this.props.RoPlantLocationGets &&
                this.props.RoPlantLocationGets.map((item, i) => {
                  return (
                    <div className="col-md-3 p-3 RoCard">
                      <div
                        style={{
                          height: "200px",
                          backgroundColor: item.underConstruction
                            ? "rgb(230,230,230)"
                            : "white",
                        }}
                        className="p-3 bg-white shadow rounded location"
                        data-toggle={item.underConstruction ? null : "modal"}
                        data-target={
                          item.underConstruction ? null : "#exampleModalCenter"
                        }
                        onClick={() => this.setState({ currentLocation: item })}
                      >
                        <h4 className="text-center color"><u><b>{item.name}</b></u></h4>
                        <p className="text-muted text-center">{item.area}</p>

                        {item.underConstruction ? (
                          <div
                            style={{
                              // color: "#0066b3",
                              position: "absolute",
                              top: 15,
                              left: 20,
                              color: "grey",
                              fontSize: "1.5em",
                            }}
                          >
                            <i class="fas fa-tools"></i>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    {this.state.currentLocation.name}
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
                    src={this.state.currentLocation.mapLocation}
                    width="100%"
                    height="450"
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
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    RoPlantLocationGets: state.reducerRoPlant.RoPlantLocationGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    RoPlantLocationGet: () => {
      dispatch(RoPlantLocationGet());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(ROLocation);
