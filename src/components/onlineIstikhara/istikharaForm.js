import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./istikhara.css";
import istikhara from "../../images/istikhara.jpg";
import { connect } from "react-redux";
import { istikharaAdd } from "../../Redux/action/Istikhara";


class IstikharaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      istType: "",
      maleName: "",
      maleMotName: "",
      thisfemName: "",
      femMotName: "",
      contact: "",
      istDetail: "",
      checkistType: false,
      checkmaleName: false,
      checkmaleMotName: false,
      checkthisfemName: false,
      checkfemMotName: false,
      checkcontact: false,
      checkistDetail: false
    };
  }

  checkField = (val) => {
    if (!val) {
      return true
    }
    return false
  }

  submitIst = () => {
    const { istType, maleName, maleMotName,
      thisfemName,
      femMotName,
      contact, istDetail } = this.state;
    const obj = {
      istType, maleName, maleMotName,
      thisfemName,
      femMotName,
      contact, istDetail
    };
    if (this.checkField(istType)) {
      this.setState({
        checkistType: true
      })
    }
    else if (this.checkField(maleName)) {
      this.setState({
        checkmaleName: true
      })
    }
    else if (this.checkField(maleMotName)) {
      this.setState({
        checkmaleMotName: true
      })
    }
    else if (this.checkField(thisfemName)) {
      this.setState({
        checkthisfemName: true
      })
    }
    else if (this.checkField(femMotName)) {
      this.setState({
        checkfemMotName: true
      })
    }
    else if (this.checkField(contact)) {
      this.setState({
        checkcontact: true
      })
    }
    else if (this.checkField(istDetail)) {
      this.setState({
        checkistDetail: true
      })
    }
    else {
      alert('Submited')
      this.props.istikharaAdd(obj);
      this.setState({
        istType: null, maleName: "", maleMotName: "",
        thisfemName: "",
        femMotName: "",
        contact: "", istDetail: ""
      })
      console.log('done asdhaskj')
    }
  }

  render() {
    const {
      istType,
      maleName,
      maleMotName,
      thisfemName,
      femMotName,
      contact,
      istDetail,
      checkistType,
      checkmaleName,
      checkmaleMotName,
      checkthisfemName,
      checkfemMotName,
      checkcontact,
      checkistDetail
    } = this.state;
    console.log(istType, 'istTypeistTypeistType')
    return (
      <div>
        <div className="back" style={{ backgroundImage: `url(${istikhara})` }}>
          <div style={{ backgroundColor: "rgba(0,0,0,.5)", padding: 80 }}>
            <h1 className="text-white p-3 text-center">Online Istikhara</h1>
          </div>
        </div>
        <div className="container">

          <div className="row">
            <div className="col-md-8">
              <label className="inpLab font-weight-bold" style={{ color: "#1371b8", fontSize: 18 }}>Select Istikhara Type</label>
              <select className="inp" onChange={e => this.setState({ istType: e.target.value })}>
                <option selected>Select Istikhara Type</option>
                <option value="Shadi">Shadi</option>
                <option value="Karobar">Karobar</option>
                <option value="Jadu">Jadu</option>
                <option value="Jadu">Safar</option>
                <option value="Jadu">Jadu</option>
              </select>
            </div>
            {
              checkistType ?
                <div class="col-md-8">
                  <h6 style={{ color: 'red', fontweight: '500', fontSize: 14, marginTop: 2 }}>*Kindly select type of istikhara</h6>
                </div>
                : null
            }
            <div className="col-md-6 pt-3 pb-3">
              <label for="maleName" className="inpLab font-weight-bold" style={{ color: "#1371b8", fontSize: 18 }}>
                Enter Male Name
                </label>
              <input
                id="maleName"
                className="inp"
                placeholder="Enter Male Name"
                value={maleName}
                onChange={e => this.setState({ maleName: e.target.value })}
              />
            </div>
            {
              checkmaleName ?
                <div class="col-md-8">
                  <h6 style={{ color: 'red', fontweight: '500', fontSize: 14, marginTop: 2 }}>*Kindly enter male name</h6>
                </div>
                : null
            }
            <div className="col-md-6 pt-3 pb-3">
              <label for="maleMotherName" className="inpLab font-weight-bold" style={{ color: "#1371b8", fontSize: 18 }}>
                Enter Male Mother Name
                </label>
              <input
                id="maleMotherName"
                className="inp"
                placeholder="Enter Male Mother Name"
                value={maleMotName}
                onChange={e => this.setState({ maleMotName: e.target.value })}
              />
            </div>
          </div>
          {
            checkmaleMotName ?
              <div class="col-md-8">
                <h6 style={{ color: 'red', fontweight: '500', fontSize: 14, marginTop: 2 }}>*Kindly enter mother name of male</h6>
              </div>
              : null
          }
          <div className="row">
            <div className="col-md-6 pt-3 pb-3">
              <label for="femaleName" className="inpLab font-weight-bold" style={{ color: "#1371b8", fontSize: 18 }}>
                Enter Female Name
                </label>
              <input
                id="femaleName"
                className="inp"
                placeholder="Enter Female Name"
                value={thisfemName}
                onChange={e => this.setState({ thisfemName: e.target.value })}
              />
            </div>
            {
              checkthisfemName ?
                <div class="col-md-8">
                  <h6 style={{ color: 'red', fontweight: '500', fontSize: 14, marginTop: 2 }}>*Kindly enter female name</h6>
                </div>
                : null
            }
            <div className="col-md-6 pt-3 pb-3">
              <label for="femaleMotherName" className="inpLab font-weight-bold" style={{ color: "#1371b8", fontSize: 18 }}>
                Enter Female Mother Name
                </label>
              <input
                id="femaleMotherName"
                className="inp"
                placeholder="Enter Female Mother Name"
                value={femMotName}
                onChange={e => this.setState({ femMotName: e.target.value })}
              />
            </div>
          </div>
          {
            checkfemMotName ?
              <div class="col-md-8">
                <h6 style={{ color: 'red', fontweight: '500', fontSize: 14, marginTop: 2 }}>*Kindly enter mother name of female</h6>
              </div>
              : null
          }
          <div className="row">
            <div className="col-md-6 pt-3 pb-3">
              <label for="contact" className="inpLab font-weight-bold" style={{ color: "#1371b8", fontSize: 18 }}>
                Contact
                </label>
              <input type="number" id="contact" className="inp inputNumber" placeholder="Contact"
                value={contact}
                onChange={e => this.setState({ contact: e.target.value })}
              />
            </div>
            {
              checkcontact ?
                <div class="col-md-8">
                  <h6 style={{ color: 'red', fontweight: '500', fontSize: 14, marginTop: 2 }}>*Kindly enter contact number</h6>
                </div>
                : null
            }
            <div className="col-md-6 pt-3 pb-3">
              <label for="contact" className="inpLab font-weight-bold" style={{ color: "#1371b8", fontSize: 18 }}>
                Enter Istikhara Details
                </label>
              <textarea
                placeholder="Enter Istikhara Details"
                rows="8"
                className="inp"
                value={istDetail}
                onChange={e => this.setState({ istDetail: e.target.value })}
              ></textarea>
            </div>
            {
              checkistDetail ?
                <div class="col-md-8">
                  <h6 style={{ color: 'red', fontweight: '500', fontSize: 14, marginTop: 2 }}>*Kindly enter contact number</h6>
                </div>
                : null
            }
            <div className="col-md-12 p-5">
              <button className="btn btn-block btn-primary" onClick={this.submitIst}>Submit</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
  };
}
function mapDispatchToProp(dispatch) {
  return {
    istikharaAdd: (a) => {
      dispatch(istikharaAdd(a));
    }
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(IstikharaForm);