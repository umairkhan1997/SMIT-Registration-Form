import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import $ from 'jquery';
export default class UpcProAndNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    $("#myMarquee").mouseover(function(){
      document.getElementById("myMarquee").stop();
    });
    $("#myMarquee").mouseout(function(){
      document.getElementById("myMarquee").start();
    });
  }

  render() {
    return (
<div className="container">
<div className='p-3'>
          <h1 className="Heading">Upcoming Events</h1>
          </div>
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-6 pt-3 pb-3">
                  <div className="p-4 bg-light border rounded text-left">
                    Hepatitis
                  </div>
                </div>
                <div className="col-md-6 pt-3 pb-3">
                  <div className="p-4 bg-light border rounded text-left">
                    Housing Society
                  </div>
                </div>
                <div className="col-md-6 pt-3 pb-3">
                  <div className="p-4 bg-light border rounded text-left">
                    IT Literacy
                  </div>
                </div>
                <div className="col-md-6 pt-3 pb-3">
                  <div className="p-4 bg-light border rounded text-left">
                    Tharparkar
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <marquee
              id="myMarquee"
                behavior="scroll"
                direction="up"
             //   onmouseover="this.stop();" onmouseout="this.start();"
              >
                Go on... hover over me!  Go on... hover over me!  Go on... hover over me!  Go on... hover over me!  Go on... hover over me!  Go on... hover over me!
                Go on... hover over me!  Go on... hover over me!  Go on... hover over me!  Go on... hover over me!  Go on... hover over me!  Go on... hover over me!
              </marquee>
            </div>
          </div>
        </div>

);
}
}
