import React from "react";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";

export default class Donation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sadqa:true,aqiqa:false,otherDonation:false,coronaEffec:false
    };
    // this.donationType = this.donationType.bind
  }


  donationType=(e)=>{
    console.log(e.target.value,'asdsa')
  }
  render() {
    return <div>
        <MainHeader />

        <h1 style={{color:'dodgerblue',marginTop:30,marginBottom:30,fontWeight:'bold'}}>Donation</h1>
        <p>For Sadqa , Aqiqa , Corona Effecties or other Donation select Donation Form and for Bank Details select Bank Details option.</p>
        <div className='container-fluid mt-5'>
            <div className='d-flex justify-content-center'>
        <button type="button" class="btn btn-primary mr-5 btn-lg">Donation Form </button>
        <button type="button" class="btn btn-secondary ml-5 btn-lg">Bank Details</button>
        </div>

            <div className='container mt-5'>
                <div className='row'>
                <div className='col-6'>
                <input type="text" class="form-control" placeholder='Name' />
                </div>
                <div className='col-6'>
                <input type="text" class="form-control" placeholder='Email' />
                </div>
                </div>
                <div className='row mt-3'>
                <div className='col-6'>
                <input type="text" class="form-control" placeholder='Number' />
                </div>
                {/* <div className='col-6'>
                <input type="text" class="form-control" placeholder='Credit Card/ Visa Card' />
                </div> */}
                  <div class="form-group col-6" >
    {/* <label for="exampleFormControlSelect1">Example select</label> */}
    <select class="form-control text-muted" id="exampleFormControlSelect1">
      <option >Payment Method</option>
      <option>Credit Card</option>
    </select>
  </div>
                </div>
                <div className='row mt-3'>
                <select class="form-control text-muted" id="exampleFormControlSelect1" onChange={(e)=>this.donationType(e)}>
      <option >Donation Type</option>
      <option>Sadqa</option>
      <option>Aqiqa</option>
      <option>Other Donation</option>
      <option>Corona Effecties</option>
    </select>
                <select class="form-control text-muted" id="exampleFormControlSelect1">
      <option >Payment Method</option>
      <option>Credit Card</option>
    </select>
                </div>
            </div>



        {/* <table class="table mt-5">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Bank Name</th>
      <th scope="col">Swift Code</th>
      <th scope="col">Currency</th>
      <th scope="col">IBAN</th>
      <th scope="col">Account Number</th>
      <th scope="col">Account Title</th>
      <th scope="col">Branch Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
    </tr>
  </tbody>
</table> */}


            </div>
        <Footer />
    </div>;
  }
}
