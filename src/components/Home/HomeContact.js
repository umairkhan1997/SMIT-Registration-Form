import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import './Home.css'
import logo from "../../images/logo.png";

export default class HomeContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
<>

<div className="container-fluid" style={{backgroundColor:'white',marginBottom:40}}>
<h1 className="pt-4 " style={{}}><strong>Contact us</strong></h1>

<div className="container-fluid" style={{marginTop:40}}>
    <div className="row">


{/* HEAD OFFICE INFO  */}
<div className="col-md-4" style={{}}>
  <div >

  <h6 className="addBorder">Head Office</h6>
  <div>
  <h6 style={{width:300,marginLeft:10}}>A-25, Bahadurabad Chowrangi Karachi, Pakistan</h6>
  <div className='row' style={{marginLeft:10}}>
  <p style={{ fontSize: "1em" }}>
                  <i class="fas fa-phone-alt"></i>
                </p>
 <h6  style={{width:300,marginLeft:10}}>UAN: 111-729-526</h6>
  </div>
  <div className='row' style={{marginLeft:10}}>
  <p style={{ fontSize: "1em" }}>
                  <i class="fas fa-mobile"></i>
                </p>
 <h6  style={{width:300,marginLeft:10}}>CELL: 92-311-1729526</h6>
  </div>
  <div className='row' style={{marginLeft:10}}>
  <p style={{ fontSize: "1em" }}>
                  <i class="fas fa-globe"></i>
                </p>
 <h6  style={{width:300,marginLeft:10}}>(+0092-213) 4130786-90</h6>
  </div>
  </div>
  </div>
</div>


{/* UK OFFICE */}
<div className="col-md-4" style={{}}>
<div >
  <h6 className="addBorderUsa">USA Office</h6>
  <div>
  <h6 style={{width:300,marginLeft:10}}>A-25, Bahadurabad Chowrangi Karachi, Pakistan</h6>
  <div className='row' style={{marginLeft:10}}>
  <p style={{ fontSize: "1em" }}>
                  <i class="fas fa-phone-alt"></i>
                </p>
 <h6  style={{width:300,marginLeft:10}}>NO +1(716)941 7792</h6>
  </div>
  </div>
  </div>
</div>

{/* UK OFFICE */}
<div className="col-md-4 " style={{}}>
<div >
  <h6 className="addBorderUK">UK Office</h6>
  <div>
  <h6 style={{width:300,marginLeft:10}}>A-25, Bahadurabad Chowrangi Karachi, Pakistan</h6>
  <div className='row' style={{marginLeft:10}}>
  <p style={{ fontSize: "1em" }}>
                  <i class="fas fa-phone-alt"></i>
                </p>
 <h6  style={{width:300,marginLeft:10}}>NO (+44)115 970 6256</h6>
  </div>
  </div>
</div>

</div>
    </div>
    </div>

{/* QUERIES BOX */}
<div className="container-fluid" style={{marginTop: 20}}>
<h3 style={{textAlign:'left',marginTop:10}}>For any query :</h3>

<div className="row" style={{marginTop:20}}>
<div className=" col-md-4 form-group ">
              <p className="text-left">Your Name ( required )</p>
              <input type="text" id="author" class="form-control"  name="author"  size="45" />
            </div>
            <div className="col-md-4 form-group ">
              <p className="text-left">Your Email ( required )</p>
              <input type="text" id="author" class="form-control"  name="author"  size="45" />
            </div>
            <div className="col-md-4 form-group ">
              <p className="text-left">Subject ( required )</p>
              <input type="text" id="author" class="form-control"  name="author"  size="45" />
            </div>
          
              </div>
         

            <div className="col-md-6 form-group ">
            <p className="text-left">Your Message</p>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows='8'></textarea>
              </div>
            
   <div className="col-md-4">
<button type="button" class="btn btn-primary btn-lg btn-block" >Submit</button>
</div>
</div>     
           



</div>
</>
);
}
}
