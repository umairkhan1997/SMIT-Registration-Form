import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import HomeContact from "../components/Home/HomeContact";
import ContactForm from "../components/contact/contactForm";
import Footer from "../components/Footer";

export default class Dasterkhwan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
        <MainHeader />
        <h1>Dastarkhwan</h1>
    </div>;
  }
}
