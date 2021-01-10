import React from "react";
import "./home.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      successMessage: "",
      messagep: false,
    };
  }

  render() {
    return (
      <div id="contact">
        <div style={{ backgroundColor: "#0c4c9e" }} className="py-5 text-white">
          <div className="container py-5">
            <div>
              <h3 className="font-weight-bold">Contact US</h3>
            </div>
            <div className="col-md-6">
              <form>
                <div>
                  <input
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                    className="formInp"
                    placeholder="Enter Name"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <input
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                    type="email"
                    className="formInp"
                    placeholder="Enter Email"
                  />
                </div>
                <div>
                  <textarea
                    required
                    value={this.state.message}
                    onChange={(e) => this.setState({ message: e.target.value })}
                    className="formInp"
                    placeholder="Type Your Message"
                    rows="8"
                  ></textarea>
                </div>
                <div>
                  <button className="sendbtn">Send</button>
                </div>
                <div>
                  {this.state.messagep ? (
                    <p className="font-weight-bold">
                      {this.state.successMessage}
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
