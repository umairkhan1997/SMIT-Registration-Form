import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./contact.css";
import logo from '../../images/logo.png'

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container-fluid bg-light pt-5 pb-5">
          <div className='p-5 bg-primary text-white rounded'>
            <h2>Get In Touch</h2>
          </div>
          <div style={{marginTop:'-20px'}} className="container pl-5 pr-5">
            <div className="row shadow">
              <div className="col-md-8 bg-white p-5">
                <h2>Send us a message</h2>
                <form>
                  <div className="container">
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
                        <textarea
                          id="message"
                          className="inp"
                          rows="8"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-4 bg-dark">
                <div className='p-5'>
                  <img src={logo} width='180px' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
