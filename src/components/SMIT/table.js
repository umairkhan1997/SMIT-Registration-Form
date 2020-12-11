import React from "react";

export default class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <table className="showtable">
              <tr>
                <td>Vision</td>
                <td>1000000</td>
              </tr>
              <tr>
                <td>Number of trained Students</td>
                <td>125000</td>
              </tr>
              <tr>
                <td>Number of Inrolled Students</td>
                <td>55000</td>
              </tr>
              <tr>
                <td>Number of Courses</td>
                <td>20</td>
              </tr>
            </table>
          </div>
          <div className="col-md-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/S6ufGBF7Q_c"
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
