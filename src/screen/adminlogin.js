import { extend } from "jquery";
import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Loader from "../smallcomponents/loader";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      forgotPassword: "",
      errorText: "",
      loader: false,
    };
  }
  login(e) {
    e.preventDefault();
    const { email, password, errorText } = this.state;
    let obj = {
      email,
      password,
    };
    console.log(obj);
  }
  render() {
    const { email, password, errorText } = this.state;
    return (
      <div className="loginScreen">
        <div className="loginDiv">
          <div className="text-center py-4">
            <img alt="saylani welfare admin" src={logo} width="200px" />
          </div>
          <div>
            <h3 className="pb-1 pt-3 mb-2 color text-center">Admin Login</h3>

            <form onSubmit={(e) => this.login(e)}>
              <div className="py-3">
                {/* <label className="color">Email</label> */}
                <input
                  onChange={(e) => this.setState({ email: e.target.value })}
                  value={email}
                  type="email"
                  placeholder="email"
                  className="jobInput"
                />
              </div>
              <div className="py-3">
                {/* <label className="color">Password</label> */}
                <input
                  onChange={(e) => this.setState({ password: e.target.value })}
                  value={password}
                  type="password"
                  placeholder="Password"
                  className="jobInput"
                />
              </div>
              <div className="py-2">
                <Link>Forgot Password</Link>
              </div>
              <div>
                <p className="text-danger text-center font-weight-bold">
                  {errorText}
                </p>
              </div>
              <div className="py-2">
                <button className="prevbtn shadow rounded-pill btn-block">
                  Login
                </button>
              </div>
              {this.state.loader ? <Loader /> : null}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
