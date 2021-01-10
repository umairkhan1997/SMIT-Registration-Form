import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainHeader from "../components/Home/MainHeader";
import NewsSection from '../components/news/newssection'

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
        <MainHeader />
        <NewsSection />
    </div>;
  }
}
