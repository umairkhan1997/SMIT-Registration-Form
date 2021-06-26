import React from "react";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import Modal from "react-awesome-modal";
import Mybtn from "../smallcomponents/mybtn";

export default class OverView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  render() {
    return (
      <div>
        <Modal
          visible={this.state.visible}
          width="50%"
          effect="fadeInUp"
          onClickAway={() => this.setState({ visible: false })}
        >
          <div className="container p-5">
            <div>
              <h2>Become a Donor</h2>
            </div>
            <div className="py-3">
              <label>Name</label>
              <input className="inp" placeholder="Enter Name" />
            </div>
            <div className="py-3">
              <label>Email</label>
              <input className="inp" placeholder="Enter Email" />
            </div>
            <div className="py-3">
              <label>Contact No</label>
              <input className="inp" placeholder="Enter Contact Number" />
            </div>
            <div className="py-3">
              <h4>
                Become a{" "}
                <select
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                    fontWeight: "bold",
                    color: "#0267b4",
                    textAlign: "center",
                    outline: "none",
                  }}
                >
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>{" "}
                Donor
              </h4>
            </div>
            <div className="py-3">
              <Mybtn value="Submit" />
            </div>
          </div>
          <button
            style={{ position: "absolute", top: "-50px", right: "0" }}
            className="prevbtn"
            onClick={() => this.setState({ visible: false })}
          >
            <i class="fas fa-times"></i>
          </button>
        </Modal>
        <button
          onClick={() => this.setState({ visible: true })}
          style={{
            position: "fixed",
            bottom: "40%",
            left: "0",
            backgroundColor: "#0066b3",
            color: "white",
            borderRadius: "0 10px 10px 0",
            padding: "10px",
            border: "none",
            zIndex: "1",
          }}
        >
          Donate
        </button>
        <MainHeader />
        <div></div>

        <div style={{ backgroundColor: "#cfc7c5" }}>
          <div
            style={{
              backgroundImage:
                'url("https://www.saylaniwelfare.com/public_html/images/saylani/gallery/hazrat2.jpg")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="container py-5">
              <div className="row">
                <div className="col-md-4 bg-white shadow">
                  <div className="p-3">
                    <h2 className="color">Support Saylani Work</h2>
                  </div>
                  <div className="p-3">
                    <label style={{ color: "#0066b3" }} className="lab">
                      First Name
                    </label>
                    <input className="inp" placeholder="First Name" />
                  </div>
                  <div className="p-3">
                    <label style={{ color: "#0066b3" }} className="lab">
                      Last Name
                    </label>
                    <input className="inp" placeholder="Last Name" />
                  </div>
                  <div className="p-3">
                    <label style={{ color: "#0066b3" }} className="lab">
                      Email
                    </label>
                    <input className="inp" placeholder="Email" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 p-3">
                <img
                  style={{ border: "2px solid #444243" }}
                  width="100%"
                  src="https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2FWhatsApp%20Image%202020-10-07%20at%2011.34.11%20AM.jpeg?alt=media&token=fceb5d65-668f-4ddf-87a8-4b09b77ef5d5"
                />
              </div>
              <div className="col-md-6 p-3">
                <img
                  style={{ border: "2px solid #444243" }}
                  width="100%"
                  src="https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2FWhatsApp%20Image%202020-10-07%20at%2011.34.09%20AM.jpeg?alt=media&token=22d5c573-8edd-498a-ba8b-c84cfb341d02"
                />
              </div>
              <div className="col-md-6 p-3">
                <img
                  style={{ border: "2px solid #444243" }}
                  width="100%"
                  src="https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2FWhatsApp%20Image%202020-10-07%20at%2011.34.08%20AM.jpeg?alt=media&token=4c4944dc-2217-418c-a251-d1d31f31522f"
                />
              </div>
              <div className="col-md-6 p-3">
                <img
                  style={{ border: "2px solid #444243" }}
                  width="100%"
                  src="https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2FWhatsApp%20Image%202020-10-07%20at%2011.34.08%20AM%20(2).jpeg?alt=media&token=8feafbea-6fb1-460f-99d3-8d0ba1926012"
                />
              </div>
              <div className="col-md-6 p-3">
                <img
                  style={{ border: "2px solid #444243" }}
                  width="100%"
                  src="https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2FWhatsApp%20Image%202020-10-07%20at%2011.34.08%20AM%20(1).jpeg?alt=media&token=8cb7b5ad-861f-45b0-8f4c-1360a73e6ef1"
                />
              </div>
              <div className="col-md-6 p-3">
                <img
                  style={{ border: "2px solid #444243" }}
                  width="100%"
                  src="https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2FWhatsApp%20Image%202020-10-07%20at%2011.34.07%20AM.jpeg?alt=media&token=662a1943-2355-461f-9cf6-8f220e0586c1"
                />
              </div>
              <div className="col-md-6 p-3">
                <img
                  style={{ border: "2px solid #444243" }}
                  width="100%"
                  src="https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2FWhatsApp%20Image%202020-10-07%20at%2011.34.06%20AM.jpeg?alt=media&token=e72456df-137f-49df-8efa-c56b0c006072"
                />
              </div>
              <div className="col-md-6 p-3">
                <img
                  style={{ border: "2px solid #444243" }}
                  width="100%"
                  src="https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2FWhatsApp%20Image%202020-10-07%20at%2011.34.07%20AM%20(1).jpeg?alt=media&token=b2f56171-d711-42ec-a8bb-47cec9d86c90"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
