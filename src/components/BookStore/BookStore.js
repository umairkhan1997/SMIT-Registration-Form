// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-slideshow-image/dist/styles.css";
// import bookStore from '../../images/bookStore.jpg'
// import bookOne from '../../images/MAH-K-ORAD-O-WAZAIF.jpg'
// import bookTwo from '../../images/adab-e-maiyat.jpg'
// import ehkam from '../../images/ehkam.jpg';
// import './BookStore.css'
// import { connect } from "react-redux";
// import { bookAllCat } from "../../Redux/action/homeAction";

// const names = [{ namess: 'umair', age: 23 }, { namess: 'ali', age: 23 }, { namess: 'basit', age: 23 },];
// class BookStore extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             allBooks: [],
//             catType: ''
//         };
//     }

//     componentDidMount() {
//         this.props.bookAllCat();
//     }
//     render() {
//         return (
//             <div>

//                 <img src={bookStore} width='100%' />
//                 <div className='container-fluid'>
//                     <div className='row'>
//                         <div className='col-md-3 mt-5'>
//                             <h4 style={{ color: "#1371b8", fontweight: "500" }}>CATEGORIES</h4>
//                             <ul>
//                                 <li className='text-muted bookCatPoint'>All Books</li>
//                                 <li className='text-muted bookCatPoint'>Hazrat Basheer Farooqui</li>
//                                 <li className='text-muted bookCatPoint'>Rohani Wazaef</li>
//                             </ul>

//                             <div className='mt-5'>
//                                 <h4 style={{ color: "#1371b8", }}>SPECIALS</h4>
//                                 <div className='col-md-10 my-3'>
//                                     <div className='singleBook'>
//                                         <img src={bookOne} width='100%' />
//                                         <div className='p-3 bookDetails'>
//                                             <h4>Adab-E-Maiyat</h4>
//                                             <p>Language: <span>Urdu</span></p>
//                                             <p>Author: <span>Hazrat Basheer Farooqui</span></p>
//                                             <p>Publisher: <span>Azad Publisher</span></p>
//                                         </div>
//                                         <button type="button" className="btn-block btn download">Download</button>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                         </div>
//                         <div className='col-md-9 py-5 border'>
//                             <div className='container '>
//                                 <div className='row'>
//                                     {this.props.bookAllCats.filter(name => { return name.bookName.toLowerCase().indexOf(this.state.catType.toLowerCase()) >= 0 }).map(filteredName => {
//                                         return (
//                                             <div className='col-md-3 my-3'>
//                                                 <div className='singleBook'>

//                                                     <img src={filteredName.bookImgUrl} width='100%' height='400px' />
//                                                     <div className='p-3 bookDetails'>
//                                                         <h4>{filteredName.bookName}</h4>
//                                                         <p>Language: <span>{filteredName.bookLang}</span></p>
//                                                         <p>Author: <span>{filteredName.bookAuthor}</span></p>
//                                                         <p>Publisher: <span>{filteredName.bookPublisher}</span></p>
//                                                     </div>
//                                                     <button type="button" className="btn-block btn download">Download</button>
//                                                 </div>
//                                             </div>
//                                         )
//                                     })}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//         )
//     }
// }

// function mapStateToProp(state) {
//     return {
//         bookAllCats: state.root.bookAllCats,
//     };
// }
// function mapDispatchToProp(dispatch) {
//     return {
//         bookAllCat: () => {
//             dispatch(bookAllCat());
//         },
//     };
// }
// export default connect(mapStateToProp, mapDispatchToProp)(BookStore);

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import bookStore from "../../images/bookStore.jpg";
import bookOne from "../../images/MAH-K-ORAD-O-WAZAIF.jpg";
import bookTwo from "../../images/adab-e-maiyat.jpg";
import ehkam from "../../images/ehkam.jpg";
import "./BookStore.css";
import { connect } from "react-redux";
import { bookAllCat, bookAllSpec } from "../../Redux/action/homeAction";
import { Link } from "react-router-dom";

const names = [
  { namess: "umair", age: 23 },
  { namess: "ali", age: 23 },
  { namess: "basit", age: 23 },
];
class BookStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBooks: [],
      catType: "",
    };
  }

  componentDidMount() {
    this.props.bookAllCat();
    this.props.bookAllSpec();
  }
  render() {
    return (
      <div>
        <img src={bookStore} width="100%" />
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-5">
              <div className="Heading">
                <h4>Category</h4>
              </div>
              <ul className="sidelist">
                <li onClick={() => this.setState({ catType: "" })}>
                  All Books
                </li>
                <li onClick={() => this.setState({ catType: "hazrat" })}>
                  Hazrat Basheer Farooqui
                </li>
                <li onClick={() => this.setState({ catType: "Rohani" })}>
                  Rohani Wazaef
                </li>
              </ul>

              <div className="Heading">
                <h4>Special</h4>
                {this.props.bookAllSpe.map((filteredName) => {
                  return (
                    <div className="col-md-10 my-3">
                      <div className="singleBook">
                        <img src={filteredName.imgCollection} width="100%" />
                        <div className="p-3 bookDetails">
                          <h4>{filteredName.bookName}</h4>
                          <p>
                            Language: <span>{filteredName.bookLang}</span>
                          </p>
                          <p>
                            Author: <span>{filteredName.bookAuthor}</span>
                          </p>
                          <p>
                            Publisher: <span>{filteredName.bookPublisher}</span>
                          </p>
                        </div>
                        <a
                          className="btn-block btn download"
                          href={filteredName.bookDnldUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div></div>
            <div className="col-md-9 py-5 border">
              <div className="container ">
                <div className="row">
                  {this.props.bookAllCats
                    .filter((name) => {
                      return (
                        name.bookAuthor
                          .toLowerCase()
                          .indexOf(this.state.catType.toLowerCase()) >= 0
                      );
                    })
                    .map((filteredName) => {
                      return (
                        <div className="col-md-3 my-3">
                          <div className="singleBook">
                            <img
                              src={filteredName.imgCollection}
                              width="100%"
                            />
                            <div className="p-3 bookDetails">
                              <h4>{filteredName.bookName}</h4>
                              <p>
                                Language: <span>{filteredName.bookLang}</span>
                              </p>
                              <p>
                                Author: <span>{filteredName.bookAuthor}</span>
                              </p>
                              <p>
                                Publisher:{" "}
                                <span>{filteredName.bookPublisher}</span>
                              </p>
                            </div>
                            {/* <button type="button" className="btn-block btn download" ><Link to={filteredName.bookDnldUrl} target="_blank" download>Download</Link></button> */}
                            <a
                              className="btn-block btn download"
                              href={filteredName.bookDnldUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              download
                            >
                              {/* <button> */}
                              Download
                              {/* </button> */}
                            </a>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    bookAllCats: state.root.bookAllCats,
    bookAllSpe: state.root.bookAllSpe,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    bookAllCat: () => {
      dispatch(bookAllCat());
    },
    bookAllSpec: () => {
      dispatch(bookAllSpec());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(BookStore);
