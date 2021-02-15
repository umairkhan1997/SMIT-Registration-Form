import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllHomeNews } from "../../Redux/action/homeAction";

class HomeNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 5,
    };
  }
  componentDidMount() {
    const { page, limit } = this.state;
    this.props.getAllHomeNews(page, limit, "undefined");
  }

  render() {
    return (
      <div id="homeNews" className="pt-3 pb-3">
        <div className="container">
          <div className="displayheading">
            <h1>Latest Events</h1>
          </div>
          <div className="row">
            {this.props.SaylaniHomeNewsGets &&
              this.props.SaylaniHomeNewsGets.length > 0 &&
              this.props.SaylaniHomeNewsGets.slice(0, 3).map((data) => {
                return (
                  <div className="col-md-4 p-2">
                    <div
                      style={{ height: "100%" }}
                      className="mt-2 border mb-2 bg-white"
                    >
                      {data.multiple_image.slice(0, 1).map((each, index) => (
                        <img key={index} alt="" src={each} width="100%" />
                      ))}
                      <div className="text-left p-2">
                        <p>{data.name}</p>
                        <p className="text-muted homeNewsDetail">
                          {data.description}
                        </p>
                        <Link to="/news">Read More</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    SaylaniHomeNewsGets: state.root.SaylaniHomeNewsGets,
    SaylaniNewsNext: state.root.SaylaniNewsNext,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    getAllHomeNews: (a, b, e) => {
      dispatch(getAllHomeNews(a, b, e));
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(HomeNews);
