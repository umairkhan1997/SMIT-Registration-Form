import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import ImgSlider from "../components/ImgSlider";
import ProjectsSlider from "../components/ProjectsSlider";
import ServiceCounter from "../components/ServiceCounter";
import NewUpdates from "../components/NewUpdates";
import Introduction from "../components/Introduction";
import MainHeader from "../components/MainHeader";
import WhatweDo from '../components/WhatweDo'
import UpcProAndNews from '../components/UpcProAndNews';
import logo from "../images/logo.png";
import BottomSide from '../components/BottomSide'
import LinkLine from '../components/LinkLine'


export default class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {
    return (
      <div>

          {/* LinkLine Start*/}
     <LinkLine />
{/* LinkLine End*/}

        {/* MainHeader Start*/}
        <MainHeader />
        {/* MainHeader End*/}

        {/* Image Slider Start*/}
        <ImgSlider />
        {/* Image Slider END*/}

        {/* Project Detail Card Start*/}
        {/* <ProjectsSlider /> */}
        {/* Project Detail Card End*/}

        {/* Introduction Start*/}
        <Introduction />
        {/* Introduction End*/}

        {/* ServiceCounter Start*/}
        <ServiceCounter />
        {/* ServiceCounter End*/}

        {/* ServiceCounter Start*/}
        <NewUpdates />
        {/* ServiceCounter End*/}

        {/* WhatweDo Start*/}
        <WhatweDo />
        {/* WhatweDo end*/}

  {/* UpcProAndNews Start*/}
  <UpcProAndNews />
        {/* UpcProAndNews end*/}
        
 <BottomSide />
      </div>
    );
  }
}




