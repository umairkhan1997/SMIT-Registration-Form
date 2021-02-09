import React from "react";
import "./medical.css";
import Modal from "react-awesome-modal";
import { connect } from "react-redux";
import { opdNameGet, opdListGet } from "../../Redux/action/medicalAction";
class MedicalOPD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opdName: "General OPD",
      visible: false,
      currentOPDDetails: [
        {
          opd: "General Physician",
          day: "Mon to Sat",
          time: "9:00am to 4:00pm",
          doctor: "Dr Farhad Mashriqi",
        },
        {
          opd: "General Physician",
          day: "Mon, Wed, Fri and Sat",
          time: "9:00am to 4:00pm",
          doctor: "Dr Muhammad Amin",
        },
        {
          opd: "General Physician (Female)",
          day: "Mon to Sat",
          time: "9:00am to 12:45pm",
          doctor: "Dr Razia Ali",
        },
      ],
      homeo: false,
      hikmat: false,
      hijama: false,
    };
  }
  componentDidMount() {
    this.props.opdNameGet();
    this.props.opdListGet();
  }
  render() {
    console.log(this.state.opdName, "opdNameGets");
    return (
      <div id="MedicalOPD">
        <div className="container pt-5 pb-5">
          <div className="Heading">
            <h1>Consultant OPD</h1>
          </div>
          <div className="row">
            {this.props.opdNameGets &&
              this.props.opdNameGets.map((e) => {
                return (
                  <div className="col-md-3">
                    <button
                      onClick={() =>
                        this.setState({
                          opdName: e.opdName,
                        })
                      }
                      className="opdBtn"
                    >
                      {e.opdName}
                    </button>
                  </div>
                );
              })}
          </div>

          <div className="row border-top my-5 py-4">
            {this.props.opdListGets
              .filter((name) => {
                console.log(name, "nasdhaskdh");
                return (
                  name.opdName
                    .toLowerCase()
                    .indexOf(this.state.opdName.toLowerCase()) >= 0
                );
              })
              .map((e, i) => {
                return (
                  <div className="col-md-3" key={i}>
                    <div
                      style={{ height: "100%" }}
                      className="clinicCard shadow p-4"
                    >
                      <h4>{e.desig}</h4>
                      <p className="color">{e.name}</p>
                      <p>{e.day}</p>
                      <p>{e.time}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div id="medicalHijama" className="container text-white pt-5 pb-5">
          <div className="row text-white pt-5 pb-5">
            <div
              style={{ backgroundColor: "rgba(0, 102, 179,.5)" }}
              className="col-md-4"
            >
              <div className="p-4">
                <p style={{ fontSize: "2.5em" }}>
                  <i class="fas fa-tint"></i>
                </p>
                <h4>Hijama</h4>
                <h5>Mon To Sat</h5>
                <div className="py-3">
                  <button
                    onClick={() =>
                      this.setState({ visible: true, hijama: true })
                    }
                    className="btn btn-outline-light rounded-pill px-4"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "rgba(0, 102, 179,.7)" }}
              className="col-md-4"
            >
              <div className="p-4">
                <p style={{ fontSize: "2.5em" }}>
                  <i class="fas fa-mortar-pestle"></i>
                </p>
                <h4>Homeaopathic</h4>
                <h5>Mon To Sat</h5>
                <div className="py-3">
                  <button
                    onClick={() =>
                      this.setState({ visible: true, homeo: true })
                    }
                    className="btn btn-outline-light rounded-pill px-4"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "rgba(0, 102, 179,1)" }}
              className="col-md-4"
            >
              <div className="p-4">
                <p style={{ fontSize: "2.5em" }}>
                  <i class="fab fa-pagelines"></i>
                </p>
                <h4>Hikmat</h4>
                <h5>Mon To Sat</h5>
                <div className="py-3">
                  <button
                    onClick={() =>
                      this.setState({ visible: true, hikmat: true })
                    }
                    className="btn btn-outline-light rounded-pill px-4"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          visible={this.state.visible}
          width="90%"
          effect="fadeInUp"
          onClickAway={() =>
            this.setState({
              visible: false,
              hikmat: false,
              hijama: false,
              homeo: false,
            })
          }
        >
          <button
            style={{ position: "absolute", top: "-50px", right: "0" }}
            className="prevbtn"
            onClick={() =>
              this.setState({
                visible: false,
                hikmat: false,
                hijama: false,
                homeo: false,
              })
            }
          >
            <i class="fas fa-times"></i>
          </button>
          <div className="rounded">
            <div className="p-4 backgroundDark text-white">
              {this.state.hijama ? (
                <h3>Hijama Clinic</h3>
              ) : this.state.hikmat ? (
                <h3>Hikmat Clinic</h3>
              ) : this.state.homeo ? (
                <h3>Homeopathic Clinic</h3>
              ) : (
                false
              )}
            </div>
            {this.state.hijama ? (
              <div className="p-4">
                <h4 className="color">Timing (For Gents)</h4>
                <p>Mon, Tue, Thu, Sat</p>
                <p>9:00am to 5:00pm</p>
                <p>Wed, Fri</p>
                <p>9:00am to 1:00pm</p>
                <p style={{ fontStyle: "italic" }} className="color">
                  Mansoor Turabi
                </p>
                <hr />
                <h4 className="color">Timing (For Ladies)</h4>
                <p>Mon to Sat</p>
                <p>9:00am to 1:00pm</p>
              </div>
            ) : null}
            {this.state.homeo ? (
              <div className="p-4">
                <h4 className="color">Timing</h4>
                <p>Mon, Sat</p>
                <p>9:30am to 12:30pm</p>
                <hr />
                <p style={{ fontStyle: "italic" }} className="color">
                  Dr Sadiq
                </p>
              </div>
            ) : null}
            {this.state.hikmat ? (
              <div className="p-4">
                <h4 className="color">Timing</h4>
                <p>Mon, Sat</p>
                <p>9:30am to 12:30pm</p>
                <hr />
                <p style={{ fontStyle: "italic" }} className="color">
                  Hakeem Noor Muhammad
                </p>
              </div>
            ) : null}
            <div className="backgroundLight p-3 text-center">
              <a
                target="_blank"
                className="color bg-white p-2 shadow rounded-pill"
                href="https://goo.gl/maps/SLok2JDKw3P2ciADA"
              >
                Click to see location <i class="fas fa-map-marker-alt"></i>
              </a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
function mapStateToProp(state) {
  return {
    opdNameGets: state.reducerMedical.opdNameGets,
    opdListGets: state.reducerMedical.opdListGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    opdNameGet: () => {
      dispatch(opdNameGet());
    },
    opdListGet: () => {
      dispatch(opdListGet());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(MedicalOPD);
