import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";

import ali from "../../images/aliMughal.png";
export default class Faculty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Faculty</h1>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 p-3">
              <div
                style={{ backgroundImage: `url(${ali})` }}
                className="facultyCard"
              >
                {/* <img src={ali} width="100%" /> */}
                <div className="p-5 facultyDetail">
                  <h2 className='py-4'>Muhammad ALi Mughal</h2>
                  <h3 className='py-4'>Manager SMIT</h3>
                  <p>
                    Descriptionk s kjsdk sdk f ksdfkjds fkjsd fk skdf sdf k
                    ghdsf gdf d fkgdh kfgdk g kfdjgkjdjfhgkjdfh gkjdfhgkjdfh
                    gkjdfg hklds
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div
                style={{ backgroundImage: `url(${ali})` }}
                className="facultyCard"
              >
                {/* <img src={ali} width="100%" /> */}
                <div className="p-5 facultyDetail">
                  <h2 className='py-4'>Muhammad Ali Mughal</h2>
                  <h3 className='py-4'>Manager SMIT</h3>
                  <p>
                    Descriptionk s kjsdk sdk f ksdfkjds fkjsd fk skdf sdf k
                    ghdsf gdf d fkgdh kfgdk g kfdjgkjdjfhgkjdfh gkjdfhgkjdfh
                    gkjdfg hklds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
