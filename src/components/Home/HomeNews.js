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
          <div className="displayheading Heading">
            <h3 className="color" style={{ marginLeft: -10 }}><b><u>NEWS</u></b></h3>
          </div>
          {this.props.SaylaniHomeNewsGets &&
            this.props.SaylaniHomeNewsGets.length > 0 &&
            this.props.SaylaniHomeNewsGets.slice(0, 3).map((data) => {
              return (
                <div className="row bg-light shadow rounded my-2 ">
                  <div style={{ height: "100%" }} className="col-md-3">
                    {data.multiple_image.slice(0, 1).map((each, index) => (
                      <img key={index} alt="" src={each} width="100%" />
                    ))}
                  </div>
                  <div className="col-md-9 text-left p-2">
                    <p className="text-black">{data.name}</p>
                    {/* <p className="text-muted homeNewsDetail">
                      {data.description.slice(0, 100) + "..."}
                    </p> */}
                    <p style={{ fontSize: ".7em" }} className="text-right">
                      <Link className="text-black" to="/news">
                        Read More
                      </Link>
                    </p>
                  </div>
                </div>
              );
            })}
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
