import { extend } from "jquery";
import React from "react";

export default class DoorStepCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personName: "",
      personContact: "",
      area: "",
      location: "",
    };
  }
  sendDoorStepRequest() {
    const { personName, personContact, area, location } = this.state;
    let obj = { personName, personContact, area, location };
    console.log(obj);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 py-3">
            <input
              className="inp"
              placeholder="Enter Name"
              value={this.state.personName}
              onChange={(e) => this.setState({ personName: e.target.value })}
            />
          </div>
          <div className="col-md-6 py-3">
            <input
              className="inp"
              placeholder="Enter Contact Number"
              value={this.state.personContact}
              onChange={(e) => this.setState({ personContact: e.target.value })}
            />
          </div>
          <div className="col-md-6 py-3">
            <input
              className="inp"
              placeholder="Enter Area"
              value={this.state.area}
              onChange={(e) => this.setState({ area: e.target.value })}
            />
          </div>
          <div className="col-md-6 py-3">
            <input
              className="inp"
              placeholder="Enter Location"
              value={this.state.location}
              onChange={(e) => this.setState({ location: e.target.value })}
            />
          </div>
          <div className="col-md-12 py-3">
            <button
              onClick={() => this.sendDoorStepRequest()}
              className="prevbtn btn-block"
            >
              Send Request
            </button>
          </div>
        </div>
      </div>
    );
  }
}
