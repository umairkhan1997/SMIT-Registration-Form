import React from "react";

export default class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityDetails: {
        karachi: {
          video:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F2748380051930656&show_text=true&width=552&appId=799665263742122&height=425",
        },
        hyderabad: {
          video:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F3106826156086042&show_text=true&width=552&appId=799665263742122&height=495",
        },
        faisalabad: {
          video:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F3106826156086042&show_text=true&width=552&appId=799665263742122&height=495",
        },
        islamabad: {
          video:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F3106826156086042&show_text=true&width=552&appId=799665263742122&height=495",
        },
      },
    };
  }
  render() {
    const { city } = this.props;
    const { cityDetails } = this.state;
    return (
      <div style={{ backgroundColor: "#f5f8ff" }} className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <table className="showtable">
                <tr>
                  <td>Vision</td>
                  <td>.1 Million Developers</td>
                </tr>
                <tr>
                  <td>Number of trained Students</td>
                  <td>125000+</td>
                </tr>
                <tr>
                  <td>Number of Enrolled Students</td>
                  <td>55000+</td>
                </tr>
                <tr>
                  <td>Number of Courses</td>
                  <td>20+</td>
                </tr>
              </table>
            </div>
            <div className="col-md-6 p-2">
              <iframe
                className="video"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/cH-VAV9ELto"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
