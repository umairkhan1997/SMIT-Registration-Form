import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import MainHeader from "../components/Home/MainHeader";
import BookStore from "../components/BookStore/BookStore";
import Footer from "../components/Footer";
import Navbar from "../smallcomponents/navbar";
export default class BookStoreScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <Navbar />
        <BookStore />
        <Footer />
      </div>
    );
  }
}
