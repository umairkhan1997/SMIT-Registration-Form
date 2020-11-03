import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainHeader from "../components/Home/MainHeader";
import IstikharaForm from "../components/onlineIstikhara/istikharaForm";
import NewsSection from '../components/news/newssection'

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
        <MainHeader />
        <div>News</div>
        <NewsSection />

    </div>;
  }
}
