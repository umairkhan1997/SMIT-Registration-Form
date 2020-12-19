import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./news.css";
// import FbImageLibrary from "react-fb-image-grid";
import Gallery from "react-grid-gallery";
import Slide from '../../images/govern.jpg'
import Footer from "../Footer";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { connect } from "react-redux";
import { getAllNews, getAllNewsSorted, fieldEmpty } from "../../Redux/action/homeAction";
//import DatePicker from 'react-date-picker';
import { Zoom } from "react-slideshow-image";



class NewsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //  SaylaniNewsGet: this.props.SaylaniNewsGet.length === 0 ? [] : this.props.SaylaniNewsGet
      newDate: new Date(),
      firstNews: [],
      dateState: true,
      page: 1,
      limit: 5
    };
  }

  handleScroll = () => {
    // const { page, limit } = this.state
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    // console.log('hello news', windowBottom, docHeight)

    if ((Math.ceil(windowBottom) >= docHeight) && this.props.SaylaniNewsNext != undefined && this.props.SaylaniNewsNext.page) {
      console.log(this.props.SaylaniNewsGet, "asdsads", this.state.page);
      this.props.getAllNews(this.props.SaylaniNewsNext.page, this.state.limit, 'undefined');
      document.removeEventListener('scroll', this.handleScroll);
      // this.setState({ page: this.state.page + 1 })
    }

  }

  componentDidMount() {
    console.log('componentDidMount')
    const { page, limit } = this.state
    this.props.getAllNews(page, limit, 'undefined');
    document.addEventListener('scroll', this.handleScroll);
    //  return () => document.removeEventListener('scroll', this.handleScroll);
  }


  dateGet = (e) => {
    // console.log(e.value);
    let dateSet = e.value.slice(5) + "-" + e.value.slice(0, 4);
    this.setState({ newDate: e.value, dateState: true })
    this.props.fieldEmpty()
    this.props.getAllNewsSorted(dateSet);
  }
  resetDate = () => {
    this.props.fieldEmpty()
    this.props.getAllNews(1, 8, 'undefined');
    this.setState({ newDate: '' })
  }

  render() {
    console.log(this.props.SaylaniNewsGet, 'SaylaniNewsGet', this.props.SaylaniNewsNext)
    const { newDate, dateState } = this.state
    return (
      <div>
        <div className='row'>
          <div style={{ backgroundColor: 'rgb(240, 240, 240)' }} className='col-md-3'>
            <div style={{ backgroundColor: '#0267b3', padding: '27px' }} className='mt-5'>
              <h1 className='py-4 text-white'>Saylani NEWS</h1>
            </div>
            <h3 className="text-center mt-4">Select date for specific day news of Saylani</h3>
            <input type="date" data-date-inline-picker="true" value={newDate} onChange={(e) => this.dateGet(e.target)} className="ml-5 mt-3" />
            <div className="m-4">
              <button type="button" class="btn btn-outline-primary" onClick={this.resetDate}>Reset date</button>
            </div>
            {/* <div >
              <DatePicker
                onChange={(e) => this.dateGet(e)}
                value={newDate}
                isOpen={dateState}

              />
            </div> */}
          </div>
          <div className='col-md-9'>
            <div style={{ backgroundColor: '#0267b3' }} className='mt-5'>
              <div className='text-right row'>
                <div className='shortCount'>
                  <h5 style={{ color: 'white' }}>Saylani Welfare Nov 2020</h5>
                  <span className='large'>Report</span>
                </div>
                {/*   <div className='shortCount'>
                  Saylani Welfare November 2020 <br />
                  <span className='large'>Report</span>
                </div> */}
                <div className='shortCount'>
                  Number Of Patients Treated <br />
                  <span className='large'>53749</span>
                </div>
                <div className='shortCount'>
                  Number Of Students Trained <br />
                  <span className='large'>125000</span>
                </div>
                <div className='shortCount'>
                  Number Of Family Welfare <br />
                  <span className='large'>8500</span>
                </div>
                <div className='shortCount'>
                  Number Of Students educate <br />
                  <span className='large'>180000</span>
                </div>
                <div className='shortCount'>
                  Number Of Dasterkhwan opened<br />
                  <span className='large'>180000</span>
                </div>
              </div>
            </div>
            <div className='container'>
              {this.props.SaylaniNewsGet && this.props.SaylaniNewsGet.length > 0 && this.props.SaylaniNewsGet.slice(0, 1).map(data => {
                //  console.log(data, 'first ')
                return (
                  <div className='row p-5'>




                    <div className='col-md-6'>
                      <div className="date">
                        <p style={{ fontSize: "2em" }}>{data.newsdate.slice(0, 2)}</p>
                        <p>{data.newsdate.slice(3)}</p>
                      </div>

                      <div className="slide-container">
                        <Zoom scale={0.4}>
                          {data.multiple_image.map((each, index) => (
                            <img key={index} style={{ width: "100%" }} src={each} />
                          ))}
                        </Zoom>
                      </div>

                    </div>

                    <div className='col-md-6'>
                      <h2>{data.name}</h2>
                      <p>{data.description}</p>
                    </div>
                  </div>
                )
              })
              }

              <div className="row my-4">
                {this.props.SaylaniNewsGet && this.props.SaylaniNewsGet.length > 0 && this.props.SaylaniNewsGet.slice(1).map(data => {
                  // console.log(data, 'adsad')
                  return (
                    <div className='col-md-6 pb-3'>
                      <div className="date">
                        <p style={{ fontSize: "2em" }}>{data.newsdate.slice(0, 2)}</p>
                        <p>{data.newsdate.slice(3)}</p>
                      </div>
                      <div className="slide-container">
                        <Zoom scale={0.4}>
                          {data.multiple_image.map((each, index) => (
                            <img key={index} style={{ width: "100%" }} src={each} />
                          ))}
                        </Zoom>
                      </div>
                    </div>
                  )
                })
                }
              </div>

            </div>
          </div>
        </div>
        <Footer />
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
      console.log('dispatch is calling')
      dispatch(getAllNews(a, b, e));
    },
    getAllNewsSorted: (e) => {

      dispatch(getAllNewsSorted(e));
    },
    fieldEmpty: () => {
      dispatch(fieldEmpty());
    }
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(NewsSection);
