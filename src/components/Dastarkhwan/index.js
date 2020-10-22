import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import './dast.css'

import img1 from '../../images/Dastarkhwan.jpg'
export default class Dast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
    
<div className='container-fluid mt-5'>
    <div className='row'>

    <div className='col-md-5'>
        <img src={img1} width='650px' height='400px' style={{marginLeft:50}}/>
    </div>
    <div className='col-md-7 text-left'  >
        <h1 style={{color:'#007bff',fontWeight:'bold',marginLeft:5}}>Saylani Welfare Dastarkhwan </h1>
        <h3 style={{color:'#537d41',fontWeight:'bold',marginTop:20,marginLeft:5}}>Available 24/7 </h3>
        <p style={{width:'65%',marginTop:10 ,marginLeft:5}} className='font-weight-bold'>Determined to alleviate the burden of hunger for the poor, we have set up a Saylani Dastarkhan at various Saylani branches across
             Pakistan where the needy are fed twice a day, every day. Although this is a very small contribution, it is our small way of removing
              the fear of uncertainty for the poor who often do not know whether they will have a meal to eat next or not. With our service, 
            they know that there is always a place where they can eat 365 days a year, and no one needs to sleep hungry at night.</p>
    </div>


<div className='container-fluid mt-5 ml-5'>
        <h2 className=' font-weight-bold text-left' style={{color:'#007bff'}} >More About Saylani Welfare Dastarkhwan</h2>
        <h6 className='mt-4 font-weight-bold text-left' style={{width:'90%',marginLeft:20}} >Everyone is welcome here and all our food is prepared and served with the highest quality and hygiene.
                 Fresh and wholesome meals are provided with menus rotating between vegetables or pulses alongside mutton (goat).
                  These meals cost Rs. 50 per meal allowing our guests to save up to Rs. 5,000 per month. 
                The saved money is invaluable to the poor and can be used by them to meet their other needs and expenditures.</h6> 
                <h6 className='font-weight-bold text-left' style={{width:'90%',marginLeft:20}}>We are pleased to say that more than 100,000 people are being fed across Pakistan daily. Each person is served with respect and dignity and it is our highest honor to serve them.
</h6>
</div>
    </div>

</div>

      </div>
    );
  }
}
