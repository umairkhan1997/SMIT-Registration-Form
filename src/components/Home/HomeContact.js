import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";
import logo from "../../images/logo.png";

export default class HomeContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h1 className="Heading">Contact us</h1>
        <div className="row">
          {/* <div className="col-md-6">
            <form>
              <div className="row">
                <div className="col-md-6 pt-4">
                  <label for="name" className="labl">
                    Your Name (required)
                  </label>
                  <input id="name" className="inp" />
                </div>
                <div className="col-md-6 pt-4">
                  <label for="Subject" className="labl">
                    Your Subject (required)
                  </label>
                  <input id="Subject" className="inp" />
                </div>
                <div className="col-md-12 pt-4">
                  <label for="email" className="labl">
                    Your Email (required)
                  </label>
                  <input id="email" className="inp" />
                </div>
                <div className="col-md-12 pt-4">
                  <label for="message" className="labl">
                    Your Message
                  </label>
                  <textarea id="message" className="inp" rows="8"></textarea>
                </div>
              </div>
            </form>
          </div> */}
          <div className="row text-left">
            <div className="col-md-6 p-3 border-bottom">
              <p style={{ fontWeight: "bold" }}>Head Office</p>
              <p className="text-muted">
                <i class="fas fa-map-marker-alt"></i> A-25, Bahadurabad
                Chowrangi Karachi, Pakistan
              </p>
              <div>
                <p>
                  <i class="fas fa-phone-alt"></i>{" "}
                  <a href="">UAN: 111-729-526</a>
                </p>
              </div>
              <div>
                <p>
                  <i class="fas fa-mobile"></i>{" "}
                  <a href="">CELL: 92-311-1729526</a>
                </p>
              </div>
              <div>
                <p>
                  <i class="fas fa-globe"></i>{" "}
                  <a href="">(+0092-213) 4130786-90</a>
                </p>
              </div>
            </div>
            <div className="col-md-6 p-3 border-bottom">
              <p style={{ fontWeight: "bold" }}>USA Office</p>
              <p className="text-muted">
                <i class="fas fa-map-marker-alt"></i> A-25, Bahadurabad
                Chowrangi Karachi, Pakistan
              </p>
              <div>
                <p>
                  <i class="fas fa-phone-alt"></i>{" "}
                  <a href="">UAN: +1(716)941 7792</a>
                </p>
              </div>
            </div>
            <div className="col-md-6 p-3 border-bottom">
              <p style={{ fontWeight: "bold" }}>UK Office</p>
              <p className="text-muted">
                <i class="fas fa-map-marker-alt"></i> A-25, Bahadurabad
                Chowrangi Karachi, Pakistan
              </p>
              <div>
                <p>
                  <i class="fas fa-phone-alt"></i>{" "}
                  <a href="">UAN: (+44)115 970 6256</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
