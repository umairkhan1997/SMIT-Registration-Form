import React from "react";
import "./Home.css";
import img6 from "../../images/president.jpeg";
import img2 from "../../images/govern.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getAllHomeNews,
} from "../../Redux/action/homeAction";
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
    console.log(this.props.SaylaniHomeNewsGets,'SaylaniHomeNewsGets')
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
            <div className="col-md-6 px-4">

              {this.props.SaylaniHomeNewsGets &&
                this.props.SaylaniHomeNewsGets.length > 0 &&
                this.props.SaylaniHomeNewsGets.slice(0, 3).map((data) => {
                  //  console.log(data, 'first ')
                  return (
                    <div className="news row mt-2 mb-2 bg-white">
                      <div className="col-md-5 col-sm-3 py-3">
                        {data.multiple_image.slice(0, 1).map((each, index) => (

                          <img key={index} src={each} width="100%" />
                        ))}
                      </div>
                      <div className="col-md-7 col-sm-3 text-left">
                        <p>{data.name}</p>
                        <p className="text-muted">
                          {data.description}
                        </p>
                        <Link to="/news">Read More</Link>
                      </div>
                    </div>
                  );
                })}

              {/* <div className="news row mt-2 mb-2 bg-white">
                <div className="col-md-5 col-sm-3 pt-3 pb-3">
                  <img src={img6} width="100%" />
                </div>
                <div className="col-md-7 col-sm-3 text-left">
                  <p> Dr. Arif Alvi (President of Pakistan)</p>
                  <p className="text-muted">
                    On 23 Feb,2020 Dr. Arif Alvi (President of Pakistan) Visit
                    ...
                  </p>
                  <Link to="/news">Read More</Link>
                </div>
              </div>
              <div className="news row mt-2 mb-2 bg-white">
                <div className="col-md-5 col-sm-3 pt-3 pb-3">
                  <img src={img2} width="100%" />
                </div>
                <div className="col-md-7 col-sm-3 text-left">
                  <p> Mr. Mohammad Sarwar Governer of Punjab</p>
                  <p className="text-muted">
                    On 21 Sep,2020 Hazrat Moulana Bashir Sahab Visit Punjab ...
                  </p>
                  <Link to="/news">Read More</Link>
                </div>
              </div> */}
            </div>
            <div className="col-md-6 p-2">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/Jkg1W4SdAO4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowfullscreen"
              ></iframe>
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
      console.log("dispatch is calling");
      dispatch(getAllHomeNews(a, b, e));
    },
    
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(HomeNews);
