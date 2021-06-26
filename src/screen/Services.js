import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatweDo from "../components/service/WhatweDo";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import Navbar from "../smallcomponents/navbar";

export default class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <Navbar />
        <WhatweDo />
        <Footer />
      </div>
    );
  }
}
