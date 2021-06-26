import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import image from "../../images/Dr.jpg";
import slide1 from "../../images/slider2.png";
import slide2 from "../../images/EhsaanSaylani.jpeg";
import hazrat from "../../images/hazrat.jpg";
export default class HomeAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3 bg-light text-primary shadow p-5">
            <div className="p-4">
              <img src={logo} width="100%" />
            </div>
            <div className='p-5'>
              <h2>Home</h2>
            </div>
            <div className="p-4">
              <ul>
                <li>Slider</li>
                <li>Introduction</li>
              </ul>
            </div>
          </div>
          <div
            style={{ height: "100vh", overflow: "scroll" }}
            className="col-md-9"
          >
            <div className="container">
            <div className="container p-5">
          <h2 className="text-left">Slider Image</h2>
          <div className="row">
            <div className="col-md-4 py-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
                <img className="shadow" src={slide1} width="100%" />
              </div>
            </div>
            <div className="col-md-4 py-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
                <img className="shadow" src={slide2} width="100%" />
              </div>
            </div>
            <div className="col-md-4 py-3">
              <div className="bg-light shadow">
                <h2>Upload Image</h2>
                <label className="whiteLable" for="uploadSlider">
                  <i class="fas fa-file-upload"></i>
                </label>
                <input className="uploadImg" id="uploadSlider" type="file" />
              </div>
            </div>
          </div>
        </div>
        <div className="container p-5">
          <h2 className="text-left">Introduction</h2>
          <div className="row">
            <div className="col-md-4 py-3">
              <div className="content">
                <div className="delete">
                  <button>
                  <i class="fas fa-pen"></i>
                  </button>
                </div>
                <img className="shadow" src={hazrat} width="100%" />
              </div>
            </div>
            <div className="col-md-8 py-3 text-left">
              <div className="content">
                <div className="delete">
                  <button>
                  <i class="fas fa-pen"></i>
                  </button>
                </div>
                <p>
                  Established in May 1999 by famous spiritual and religious
                  scholar Maulana Bashir Ahmed Farooqui, Saylani Welfare
                  International Trust was built on the fundamentals of breaking
                  the cycle of poverty, alleviating the financial troubles of
                  the poor, giving people a chance to live a dignified life and
                  spreading happiness.
                </p>
                <p>
                  We are an organization that believes in lighting up the lives
                  of underprivileged people across the world. We endeavor to
                  provide the best quality services in areas including food,
                  education, medical and social welfare free of cost to people
                  living in the dark. With over 60 different sectors, we feed
                  thousands of hungry people each day, hundreds more are given
                  the hope of life through medical health care, many are
                  educated to become leaders of tomorrow and several are given
                  the opportunity to stand on their feet financially.
                </p>
              </div>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}







