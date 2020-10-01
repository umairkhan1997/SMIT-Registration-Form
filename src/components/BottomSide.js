import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import '../App.css'
import logo from "../images/logo.png";
export default class BottomSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div className="container-fluid text-white " style={{backgroundColor:'#1e1e1e'}}>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-4">
              <img width="100%" src={logo} />
            </div>
          </div>

          <div className="container-fluid bottomStl">
        <div className="container p-5">
          <div className="row pt-5 pb-5">
            <div className="col-md-4 bottomDiv">
                <p className="bottomTxt">About Us</p>
                <ul className="bottomUl">
                    <li className="li">asdas</li>
                    <li className="li">asdas</li>
                    <li className="li">asdas</li>
                </ul>
            </div>
            <div className="col-md-4 bottomDivTw0">
                <p className="bottomTxt">News</p>
                <ul className="bottomUl">
                    <li className="li">asdas</li>
                    <li className="li">asdas</li>
                    <li className="li">asdas</li>
                </ul>
            </div>
            <div className="col-md-4 bottomDivThre">
                <p className="bottomTxt">Leader Ship</p>
                <ul className="bottomUl">
                    <li className="li">asdas</li>
                    <li className="li">asdas</li>
                    <li className="li">asdas</li>
                </ul>
            </div>
            <div className="col-md-4 bottomDiv " style={{marginTop:30}}>
                <p className="bottomTxt">About Us</p>
                <ul className="bottomUl">
                    <li className="li">asdas</li>
                    <li className="li">asdas</li>
                    <li className="li">asdas</li>
                </ul>
            </div>
            <div className="col-md-4 bottomDivTw0" style={{marginTop:30}}>
                <p className="bottomTxt">News</p>
                <ul className="bottomUl">
                    <li className="li">asdas</li>
                    <li className="li">asdas</li>
                    <li className="li">asdas</li>
                </ul>
            </div>
            <div className="col-md-4 bottomDivThre" style={{marginTop:30}}>
                <p className="bottomTxt">Leader Ship</p>
                <ul className="bottomUl">
                    <li className="li">asdas</li>
                    <li className="li">asdas</li>
                    <li className="li">asdas</li>
                </ul>
            </div>


            </div>
            </div>
            </div>
        </div>
      </div>


        );
    }
  }
  