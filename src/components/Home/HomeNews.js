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
      <div
        id="homeNews"
        style={{ backgroundColor: "rgb(245, 248, 255)" }}
        className="pt-3 pb-3"
      >
        <div className="container">
          <div className="displayheading">
            <h1>Latest News</h1>
          </div>
          <div className="row">
            <div className="col-md-6 px-4">
              {this.props.SaylaniHomeNewsGets &&
                this.props.SaylaniHomeNewsGets.length > 0 &&
                this.props.SaylaniHomeNewsGets.slice(1, 4).map((data) => {
                  return (
                    <div className="news row mt-2 mb-2 bg-white">
                      <div className="col-md-5 col-sm-3">
                        {data.multiple_image.slice(0, 1).map((each, index) => (
                          <img key={index} alt="" src={each} width="100%" />
                        ))}
                      </div>
                      <div className="col-md-7 col-sm-3 text-left">
                        <p>{data.name}</p>
                        <p className="text-muted homeNewsDetail">
                          {data.description.slice(0, 50)}...
                        </p>
                        <Link to="/news">Read More</Link>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="col-md-6 px-4">
              {this.props.SaylaniHomeNewsGets &&
                this.props.SaylaniHomeNewsGets.length > 0 &&
                this.props.SaylaniHomeNewsGets.slice(0, 1).map((data) => {
                  return (
                    <div
                      style={{ height: "97%" }}
                      className="row mt-2 mb-2 bg-white mainCoverNews"
                    >
                      {data.multiple_image.slice(0, 1).map((each, index) => (
                        <img
                          key={index}
                          alt=""
                          src={each}
                          height="auto"
                          width="100%"
                        />
                      ))}
                      <div className="col-md-7 col-sm-3 text-left">
                        <p>{data.name}</p>
                        <Link to="/news">Read More</Link>
                      </div>
                    </div>
                  );
                })}
            </div>
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
