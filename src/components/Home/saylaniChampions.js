import React from "react";
import Champ from "../../images/homeimages/champ.png";
import { Link } from "react-router-dom";
import champ1 from "../../images/homeimages/champ1.png";

export default class SaylaniChampions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="mt-1">
        {/* <div>
          <div className="displayheading">
            <h3>Saylani Champions</h3>
          </div>
          <p>
            people who change their life through Saylani Welfare International
            Trust Services.
          </p>
        </div> */}
        <div>
          <div className="row">
            <div className="col-md-8 pt-3 pb-3 champGrid">
              <img className="champLogo" src={Champ} />
              <p style={{ fontWeight: "bold" }}>
                people who change their life through Saylani Welfare
                International Trust Services.
              </p>
            </div>
            <div className="col-md-4 pt-3 pb-3 champGrid">
              <img className="rounded-pill " width="100%" src={champ1} />
            </div>
          </div>
          <div>
            <p style={{ fontSize: "0.9em", fontWeight: 'bold' }} className="text-muted text-bold">
              Connect with our Corporate Relations Officer for more information
              on how to support Saylani Welfare International Trust.
            </p>
            <Link to="Donation" class="btn btn-primary" style={{ fontSize: ".9em", backgroundColor: "#084E97", margin: "10px 0" }}>
              SUPPORT US NOW
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
