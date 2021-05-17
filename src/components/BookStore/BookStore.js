

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import bookStore from "../../images/bookStore.jpg";
import "./BookStore.css";
import { connect } from "react-redux";
import { bookAllCat, bookAllSpec } from "../../Redux/action/homeAction";

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
    const { catType } = this.state;
    return (
      <div>
        <img src={bookStore} width="100%" alt="Bara Maah k Aurad-O-Wazaif" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 mt-5">
              <div className="Heading">
                <h3 className="color"><b><u>CATEGORY</u></b></h3>
              </div>
              <ul className="sidelist">
                <li style={{ backgroundColor: catType == "" ? "#034f9c" : 'white', color: catType == "" ? "white" : '#034f9c', }} onClick={() => this.setState({ catType: "" })}>
                  All Books
                </li>
                <li style={{ backgroundColor: catType == "hazrat" ? "#034f9c" : 'white', color: catType == "hazrat" ? "white" : '#034f9c', }} onClick={() => this.setState({ catType: "hazrat" })}>
                  Hazrat Basheer Farooqui
                </li>
                <li style={{ backgroundColor: catType == "Rohani" ? "#034f9c" : 'white', color: catType == "Rohani" ? "white" : '#034f9c', }} onClick={() => this.setState({ catType: "Rohani" })}>
                  Rohani Wazaef
                </li>
              </ul>

              <div className="Heading">
                <h3 className="color"><b><u>SPECIAL</u></b></h3>
                {this.props.bookAllSpe.map((filteredName) => {
                  return (
                    <div className="col-md-10 my-3">
                      <div className="singleBook">
                        <img src={filteredName.imgCollection} width="100%" height="400px" />
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
                        <div className="col-md-3 my-3 " >
                          <div className="singleBook" >
                            <img
                              src={filteredName.imgCollection}
                              width="100%"
                              height="400px"
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
