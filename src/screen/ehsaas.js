import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import Prime from "../components/ehsaas/primeminister";

export default class EhsaasLangarKhana extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Prime />
        <Footer />
      </div>
    );
  }
}
