import React from "react";
import Custombtn from "../../smallcomponents/mybtn";
export default class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <table className="showtable">
              <tr>
                <td>Vision</td>
                <td>1200</td>
              </tr>
              <tr>
                <td>Installed Ro Plants</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Under construction</td>
                <td>18</td>
              </tr>
              <tr>
                <td>Rest</td>
                <td>1122</td>
              </tr>
            </table>
            <div className="p-2">
              <Custombtn otherClass="btn-block" value="donate" />
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/N4DIjxCGWVc"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
