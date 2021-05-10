import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainHeader from "../components/Home/MainHeader";
import IstikharaForm from '../components/onlineIstikhara/istikharaForm'
import Navbar from "../smallcomponents/navbar";
export default class Istikhara extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
      <MainHeader />
      <Navbar />
      <IstikharaForm />
    </div>;
  }
}

