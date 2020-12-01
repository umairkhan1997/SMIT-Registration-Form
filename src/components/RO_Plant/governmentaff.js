import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import CountUp from "react-countup";
import "./ro.css";
import Zoom from "react-reveal/Zoom";
import ROback from "../../images/ROback.jpg";
import rangers from "../../images/rangers.png";
import capital from "../../images/capital.png";
import govt from "../../images/govt.png";
import sindhpolice from "../../images/sindhpolice.png";
import metro from "../../images/metro.png";

export default class GovtAff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="container">
            <div className="pt-5 pl-5 pr-5 pb-2">
              <h2 className="Heading font-weight-bold" >Government Affiliations</h2>
            </div>
            <div className="row">
              <div className="p-5 col-md-3 col-sm-6">
                <Zoom>
                  <div className="collaborationPartner p-4">
                    <img width="100%" src={rangers} />
                  </div>
                </Zoom>
              </div>
              <div className="p-5 col-md-3 col-sm-6">
                <Zoom>
                  <div className="collaborationPartner p-4">
                    <img width="100%" src={capital} />
                  </div>
                </Zoom>
              </div>
              <div className="p-5 col-md-3 col-sm-6">
                <Zoom>
                  <div className="collaborationPartner p-4">
                    <img width="100%" src={metro} />
                  </div>
                </Zoom>
              </div>

              <div className="p-5 col-md-3 col-sm-6">
                <Zoom>
                  <div className="collaborationPartner p-4">
                    <img width="100%" src={sindhpolice} />
                  </div>
                </Zoom>
              </div>
              <div className="p-5 col-md-3 col-sm-6">
                <Zoom>
                  <div className="collaborationPartner p-4">
                    <img width="100%" src={govt} />
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
