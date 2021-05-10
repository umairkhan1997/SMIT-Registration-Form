import React from "react";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import Navbar from "../smallcomponents/navbar";
import FoodDetails from "../components/food/fooddetails";
import DastarkhwanLocation from "../components/food/locations";

export default class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainHeader />
        <Navbar />
        <FoodDetails />
        <DastarkhwanLocation />
        <Footer />
      </div>
    );
  }
}
