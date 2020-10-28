import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";
import piaic from "../../images/piaic.png";
import city from "../../images/cityandguild.png";
import cisco from "../../images/ciscoLogo.png";
import intel from "../../images/intel.png";
import sindhBoard from "../../images/sindboard.png";
import sdc from "../../images/sdc.png";
import microsoft from "../../images/microsoft.png";
import kamiyab from "../../images/kamiyabJawab.jpeg";
import Zoom from "react-reveal";

export default class Collaboration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="container">
            <div className="p-5">
              <h2 className='Heading'>Collaboration and Partners</h2>
            </div>
            <div className="row">
              <div className="p-5 col-md-3 col-sm-6">
                <Zoom>
                  <div className="collaborationPartner p-4">
                    <img width="100%" src={piaic} />
                  </div>
                </Zoom>
              </div>
              <div className="p-5 col-md-3 col-sm-6">
                <Zoom>
                  <div className="collaborationPartner p-4">
                    <img width="100%" src={city} />
                  </div>
                </Zoom>
              </div>
              <div className="p-5 col-md-3 col-sm-6">
                <Zoom>
                  <div className="collaborationPartner p-4">
                    <img width="100%" src={cisco} />
                  </div>
                </Zoom>
              </div>
              <div className="p-5 col-md-3 col-sm-6">
                <Zoom>
                  <div className="collaborationPartner p-4">
                    <img width="100%" src={intel} />
                  </div>
                </Zoom>
              </div>
              <div className="p-5 col-md-3 col-sm-6">
                <Zoom>
                  <div className="collaborationPartner p-4">
                    <img width="100%" src={sindhBoard} />
                  </div>
                </Zoom>
              </div>
              <div className="p-5 col-md-3 col-sm-6">
                <Zoom>
                  <div className="collaborationPartner p-4">
                    <img width="100%" src={sdc} />
                  </div>
                </Zoom>
              </div>
              <div className="p-5 col-md-3 col-sm-6">
                <Zoom>
                  <div className="collaborationPartner p-4">
                    <img width="100%" src={microsoft} />
                  </div>
                </Zoom>
              </div>
              <div className="p-5 col-md-3 col-sm-6">
                <Zoom>
                  <div className="collaborationPartner p-4">
                    <img width="100%" src={kamiyab} />
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