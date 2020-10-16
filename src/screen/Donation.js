import React from "react";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";

export default class Donation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sadqa:true,aqiqa:false,otherDonation:false,coronaEffec:false,DonationForms:true,bgClrBtnOne:'#0069d9',bgClrBtnTwo:'#5a6268'
    };
    // this.donationType = this.donationType.bind
  }


  donationType=(e)=>{
    // console.log(e.target.value,'asdsa')

    if(e.target.value ==='Sadqa') {
      this.setState({
        sadqa:true,aqiqa:false,otherDonation:false,coronaEffec:false
      })
    }
    if(e.target.value ==='Aqiqa') {
      this.setState({
        aqiqa:true,sadqa:false,otherDonation:false,coronaEffec:false
      })
    }
    if(e.target.value ==='Other Donation') 
    {
      this.setState({
        otherDonation:true,aqiqa:false,sadqa:false,coronaEffec:false
      })
    }
    if(e.target.value ==='Corona Effecties') {
      this.setState({
        coronaEffec:true,aqiqa:false,otherDonation:false,sadqa:false
      })
    }
  }
  DonationForm=()=>{
    this.setState({
DonationForms:true,
bgClrBtnOne:'#0069d9',bgClrBtnTwo:'#5a6268'
    })
  }
  BankDetail=()=>{
    this.setState({
      DonationForms:false,
      bgClrBtnOne:'#5a6268',bgClrBtnTwo:'#0069d9'
    })
  }
  render() {
    return <div>
        <MainHeader />

        <h1 style={{color:'dodgerblue',marginTop:30,marginBottom:30,fontWeight:'bold'}}>Donation</h1>
        <p>For Sadqa , Aqiqa , Corona Effecties or other Donation select Donation Form and for Bank Details select Bank Details option.</p>
        <div className='container-fluid mt-5'>
            <div className='d-flex justify-content-center'>
        <button type="button" className="btn  mr-5 btn-lg" style={{backgroundColor:this.state.bgClrBtnOne,color:'white'}} onClick={()=>this.DonationForm()}>Donation Form </button>
        <button type="button" className="btn  ml-5 btn-lg" style={{backgroundColor:this.state.bgClrBtnTwo,color:'white'}} onClick={()=>this.BankDetail()}>Bank Details</button>
        </div>


{
  this.state.DonationForms?

            <div className='container mt-5'>
                <div className='row'>
                <div className='col-6'>
                  <p className="text-left " style={{fontSize:18,color:'dodgerblue'}}>Name </p>
                <input type="text" className="form-control" placeholder='Name' style={{height:50,marginTop:-10,backgroundColor:'#e9ebec'}} />
                </div>
                <div className='col-6'>
                <p className="text-left " style={{fontSize:18,color:'dodgerblue'}}>Email </p>
                <input type="text" className="form-control" placeholder='Email' style={{height:50,marginTop:-10,backgroundColor:'#e9ebec'}}/>
                </div>
                </div>
                <div className='row mt-3'>
                <div className='col-6'>
                <p className="text-left " style={{fontSize:18,color:'dodgerblue'}}>Phone Number </p>
                <input type="text" className="form-control" placeholder='Phone Number' style={{height:50,marginTop:-10,backgroundColor:'#e9ebec'}} />
                </div>
                {/* <div className='col-6'>
                <input type="text" class="form-control" placeholder='Credit Card/ Visa Card' />
                </div> */}
                  <div className="form-group col-6" >
                  <p className="text-left " style={{fontSize:18,color:'dodgerblue'}}>Payment Method </p>
    {/* <label for="exampleFormControlSelect1">Example select</label> */}
    <select className="form-control text-muted" id="exampleFormControlSelect1" style={{height:50,marginTop:-10,backgroundColor:'#e9ebec'}} >
      <option >Payment Method</option>
      <option>Credit Card</option>
    </select>
  </div>
                </div>

                <div className='row '>
                <div className="form-group col-12" >
    {/* <label for="exampleFormControlSelect1">Example select</label> */}
    <p className="text-left " style={{fontSize:18,color:'dodgerblue'}}>Donation Type </p>
    <select className="form-control text-muted" id="exampleFormControlSelect1" onChange={(e)=>this.donationType(e)} style={{height:50,marginTop:-10,backgroundColor:'#e9ebec'}} >
    <option>Sadqa</option>
      <option>Aqiqa</option>
      <option>Other Donation</option>
      <option>Corona Effecties</option>
    </select>
  </div>
  </div>
                {/* <div className='form-group col-6'>
                <select className="form-control text-muted " id="exampleFormControlSelect1" onChange={(e)=>this.donationType(e)}>
      <option>Sadqa</option>
      <option>Aqiqa</option>
      <option>Other Donation</option>
      <option>Corona Effecties</option>
    </select>
    </div> */}



    <div className='row '>

    {
this.state.sadqa ?
<div className="form-group col-6" >
{/* <label for="exampleFormControlSelect1">Example select</label> */}
<p className="text-left " style={{fontSize:18,color:'dodgerblue'}}>Sadqa </p>
<select className="form-control text-muted" id="exampleFormControlSelect1" style={{height:50,marginTop:-10,backgroundColor:'#e9ebec'}} >
<option>Sadqa</option>
<option >Sadqa Goat(5500)</option>
      <option >Sadqa Goat(6000)</option>
      <option >Sadqa Goat(7000)</option>
      <option >Sadqa Goat(8000)</option>
      <option >Sadqa Goat(9000)</option>
      <option >Sadqa Goat(10000)</option>
      <option >Sadqa Goat(12000)</option>
      <option >Sadqa Goat(15000)</option>
      <option >Sadqa Goat(30000)</option>
      <option >Sadqa Goat(35000)</option>
</select>
</div>
    :null
    }
        {
this.state.aqiqa ?
<>
<div className="form-group col-6" >

<p className="text-left " style={{fontSize:18,color:'dodgerblue'}}>Aqiqa </p>
      <select className="form-control text-muted " id="exampleFormControlSelect1" style={{height:50,marginTop:-10,backgroundColor:'#e9ebec'}} >

      <option >Aqiqa Goat(8000)</option>
      <option >Aqiqa Goat(9000)</option>
      <option >Aqiqa Goat(10000)</option>
      <option >Aqiqa Goat(12000)</option>
      <option >Aqiqa Goat(15000)</option>
    
    </select>
</div>
    </>
    :null
    }
            {
this.state.otherDonation ?
<>
<div className="form-group col-6" >
<p className="text-left " style={{fontSize:18,color:'dodgerblue'}}>Other Donation </p>
      <select className="form-control text-muted " id="exampleFormControlSelect1" style={{height:50,marginTop:-10,backgroundColor:'#e9ebec'}} >

      <option >Marriage</option>
      <option >Zakat</option>
      <option >Education</option>
      <option >Water Well</option>
    </select>
    </div>
    </>
    :null
    }
                {
this.state.coronaEffec ?
<>
<div className="form-group col-6" >
<p className="text-left " style={{fontSize:18,color:'dodgerblue'}}>Corona Effecties </p>
      <select className="form-control text-muted " id="exampleFormControlSelect1" style={{height:50,marginTop:-10,backgroundColor:'#e9ebec'}} >

      <option >Corona Effecties Rashan Bag Rs.(1500)</option>
    </select>
    </div>
    </>
    :null
    }
    <div className="col-6">
    <p className="text-left " style={{fontSize:18,color:'dodgerblue'}}>Quantity </p>
<input type="number"  className="form-control" placeholder='Quantity' style={{height:50,marginTop:-10,backgroundColor:'#e9ebec'}} />
</div>
                </div>
<div className='row d-flex'>
<div class="form-group col-6">
<p className="text-left " style={{fontSize:18,color:'dodgerblue'}}>Remarks </p>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" style={{marginTop:-10,backgroundColor:'#e9ebec'}}></textarea>
  </div>
  <div className="mt-auto p-3 col-6">
<button type="button" className="btn btn-primary btn-lg btn-block "  disabled>Submit</button>
  </div>
</div>
            </div>

:
<div className='container-fluid '>
  <div className="row d-flex justify-content-center ">
<div className='col-10'>
    <div className="table-responsive">
<table class="table mt-5 thead-primary" >
  <thead class="thead-light" >
    <tr >
      <th scope="col" className='text-left'>#</th>
      <th scope="col" className='text-left'>Bank Name</th>
      <th scope="col" className='text-left'>Swift Code</th>
      <th scope="col" className='text-left'>Currency</th>
      <th scope="col" className='text-left'>IBAN</th>
      <th scope="col" className='text-left'>Account Number</th>
      <th scope="col" className='text-left'>Account Title</th>
      <th scope="col" className='text-left'>Branch Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td className='text-left'>DUBAI ISLAMIC BANK</td>
      <td className='text-left'>DUIBPKKA</td>
      <td className='text-left'>PKR</td>
      <td className='text-left'>PK46DUIB0000000011036001</td>
      <td className='text-left'>11036001</td>
      <td className='text-left'>Saylani Welfare	</td>
      <td className='text-left'>0-020</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td className='text-left'>UNITED BANK LTD</td>
      <td className='text-left'>UNILLPKKA</td>
      <td className='text-left'>PKR</td>
      <td className='text-left'>PK37UNIL00000932-37300786</td>
      <td className='text-left'>37300786</td>
      <td className='text-left'>Saylani Welfare</td>
      <td className='text-left'>0-932</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td className='text-left'>UNITED BANK LIMITED</td>
      <td className='text-left'>UNILLPKKA</td>
      <td className='text-left'>DOLLAR</td>
      <td className='text-left'>PK97UNIL0112093235000541</td>
      <td className='text-left'>35000541</td>
      <td className='text-left'>Saylani Welfare</td>
      <td className='text-left'>0-932</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td className='text-left'>BANK AL FALAH</td>
      <td className='text-left'>ALFHPKKA016</td>
      <td className='text-left'>PKR</td>
      <td className='text-left'>PK79ALFH0016001705845</td>
      <td className='text-left'>New Ac = (1705845) & Old Ac = (1005)</td>
      <td className='text-left'>Saylani Welfare</td>
      <td className='text-left'>00-16</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td className='text-left'>J S BANK</td>
      <td className='text-left'>JSBLPKKA</td>
      <td className='text-left'>PKR</td>
      <td className='text-left'>PK21JSBL9523000000213318</td>
      <td className='text-left'>213318</td>
      <td className='text-left'>Saylani Welfare</td>
      <td className='text-left'>952</td>
    </tr>
  </tbody>
</table> 
</div>
</div>
</div>
</div>
}


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
{/* <div className="row">
<div className="col-6">
<input type="number"  className="form-control" />
</div>
</div> */}

            </div>
            <div className="mt-5"></div>
        <Footer />
    </div>;
  }
}
