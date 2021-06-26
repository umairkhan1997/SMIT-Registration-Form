import React from "react";
export default class LinkLine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (

      <div
        style={{ backgroundColor: "rgb(50,50,50)" }}
        className="container-fluid"
      >
        <div className="container">

          <div className="col-md-12 p-2 text-light">
            Millions of people's life has changed, millions more awaiting
            your donation
    </div>
        </div>
        {/* </div> */}
      </div>

    );
  }
}
