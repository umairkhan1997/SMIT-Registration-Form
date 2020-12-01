import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./medical.css";
import back from "../../images/medicalBack.jpg";

export default class MedicalContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div style={{ backgroundImage: `url(${back})` }} className="medicalBack bg-image">
          <div style={{ backgroundColor: 'rgba(12,56,100,.5)' }} className="pt-5 pb-5">
            <h1 className="text-white p-5 ml-5">Contact Us</h1>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <form>
                    <div className="row">
                      <div className="col-md-6 pt-3 pb-3">
                        <label className="lab">Enter Name</label>
                        <input placeholder="Name" className="inp" />
                      </div>
                      <div className="col-md-6 pt-3 pb-3">
                        <label className="lab">Enter Contact</label>
                        <input placeholder="Contact" className="inp" />
                      </div>
                      <div className="col-md-12 pt-3 pb-3">
                        <label className="lab">Enter Email</label>
                        <input placeholder="Contact" className="inp" />
                      </div>
                      <div className="col-md-12 pt-3 pb-3">
                        <label className="lab">Enter Message</label>
                        <textarea
                          placeholder="Enter Message Here..."
                          rows="7"
                          className="inp"
                        ></textarea>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-8">
                  <button style={{
                    width: "100%", color: 'white', backgroundColor: "#1371b8", borderradius: 10,
                    borderWidth: 0, height: 40, fontweight: "bold"
                  }} >
                    Submit
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
