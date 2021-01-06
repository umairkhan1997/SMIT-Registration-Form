import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import cover from "../images/media.jpg";
import "../components/media/media.css";
import Fade from "react-reveal/Fade";
import Video from "../components/media/video";

export default class Media extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <div style={{ backgroundColor: "purple" }} className="bg-image">
          <div className="container p-5">
            <Fade down>
              {/* <input
                type="search"
                placeholder="Search your Media ..."
                className="mt-5 mb-5 searchMedia"
              /> */}
              {/* <div className="form-group" >
<p className="text-left " style={{fontSize:18,color:'white'}}>Search Your Playlist</p>
      <select className="form-control text-muted " id="exampleFormControlSelect1" style={{height:50,marginTop:-10,backgroundColor:'#e9ebec'}} >
      <option >NEKI KI BAAT ( ROZA 4)</option>
      <option >NEKI KI BAAT ( ROZA 2)</option>
      <option >Saylani Kifalat</option>
      <option >Saylani Medical</option>
      <option >Saylani Medical</option>
      <option>Saylani Documentary 2019</option>
      <option>Saylani Symposium 2019</option>
      <option>Ramzan-o-Eid Pakage</option>
    </select>
    </div> */}
            </Fade>
          </div>
        </div>
        <Video />
      </div>
    );
  }
}
