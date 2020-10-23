import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import MainHeader from '../components/Home/MainHeader';
import Footer from '../components/Footer'
import OnlineQ from '../components/OnlineQ/OnlineQ';


export default class OnlineQu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <OnlineQ />
        <Footer />
      </div>
    );
  }
}
