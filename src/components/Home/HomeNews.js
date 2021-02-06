import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllNews } from "../../Redux/action/homeAction";
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
    this.props.getAllNews(page, limit, "undefined");
  }

  render() {
    return (
      <div
        style={{ backgroundColor: "rgb(245, 248, 255)" }}
        className="pt-3 pb-3"
      >
        <div className="container">
          <div className="displayheading">
            <h1>Latest News</h1>
          </div>
          <div className="row">
            <div className="col-md-6 px-4 d-flex align-items-stretch flex-column">
              {this.props.SaylaniNewsGet &&
                this.props.SaylaniNewsGet.length > 0 &&
                this.props.SaylaniNewsGet.slice(1, 4).map((data) => {
                  //  console.log(data, 'first ')
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
              {this.props.SaylaniNewsGet &&
                this.props.SaylaniNewsGet.length > 0 &&
                this.props.SaylaniNewsGet.slice(0, 1).map((data) => {
                  //  console.log(data, 'first ')
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
    SaylaniNewsGet: state.root.SaylaniNewsGet,
    SaylaniNewsNext: state.root.SaylaniNewsNext,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    getAllNews: (a, b, e) => {
      console.log("dispatch is calling");
      dispatch(getAllNews(a, b, e));
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(HomeNews);
