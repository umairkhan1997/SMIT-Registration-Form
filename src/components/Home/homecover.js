import React from "react";

class HomeCover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="backgroundLight my-5 py-5">
        <div className="container my-5">
          <div className="donateImage">
            <div>
              <div className="donateCard">
                <h3>Saylani Is Serving 1500000 people Daily</h3>
                <p>
                  lorehgj hasjhd gshag djas gdsjah gdsajh dasjh dsja dsja dsajkd
                  asjd gsjad gjashd gjas
                </p>
                <button className="donateButton btn-block">Donate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeCover;
