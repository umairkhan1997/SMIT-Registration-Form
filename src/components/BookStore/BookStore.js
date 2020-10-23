import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import bookStore from '../../images/bookStore.jpg'
import bookOne from '../../images/MAH-K-ORAD-O-WAZAIF.jpg'
import bookTwo from '../../images/adab-e-maiyat.jpg'
import ehkam from '../../images/ehkam.jpg'

export default class BookStore extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <div>
               
            <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3 mt-1 text-left'>
                    <h4 className='text-left font-weight-bold text-muted'>CATEGORIES</h4>
                    <hr />
                    <ul>
                        <li className='text-left font-weight-bold text-muted'>All Books</li>
                        <hr />
                        <li className='text-left font-weight-bold text-muted'>Hazrat Basheer Farooqui</li>
                        <hr />
                        <li className='text-left font-weight-bold text-muted'>Rohani Wazaef</li>
                    </ul>
                    <hr />
                    <h4 className='text-left font-weight-bold text-muted'>SPECIALS</h4>
                    <hr />
                    <div className=''>
                        <img src={bookOne} style={{width:200,height:300,marginLeft:50}}/>
                        <h4>12 MAH K ORAD-O-WAZAIF</h4>
                    </div>
                </div>
                <div className='col-md-9 mb-5'>
                    <img src={bookStore} style={{width:'100%',height:400}}/>
            <div className='container '>
                <div className='row flex-wrap'>
                    <div className='col-md-4 mt-5'>
                    <img src={bookTwo} style={{width:200,height:300}}/>
                        <h6 className='font-weight-bold text-muted'>Adab-E-Maiyat</h6>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Language:  </h6>
                        <h6 className='font-weight-bold text-muted'>Urdu</h6>
                        </div>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Author:  </h6>
                        <h6 className='font-weight-bold text-muted'>Hazrat Basheer Farooqui</h6>
                        </div>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Publisher: </h6>   
                        <h6 className='font-weight-bold text-muted'>Azad Publisher</h6>  
                        </div>
                       
                         <button type="button" className="btn btn-primary" style={{width:150}}>Download</button>
                    </div>
                 

                    <div className='col-md-4 mt-5'>
                    <img src={bookOne} style={{width:200,height:300}}/>
                        <h6 className='font-weight-bold text-muted'>12 Mah K Orad-O-Wazaif
</h6>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Language:  </h6>
                        <h6 className='font-weight-bold text-muted'>Urdu</h6>
                        </div>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Author:  </h6>
                        <h6 className='font-weight-bold text-muted'>Hazrat Basheer Farooqui</h6>
                        </div>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Publisher: </h6>   
                        <h6 className='font-weight-bold text-muted'>-Mah-K-Orad-O-Wazaif</h6>  
                        </div>
                        <button type="button" className="btn btn-primary" style={{width:150}}>Download</button>
                        
                    </div>


                    <div className='col-md-4 mt-5'>
                    <img src={ehkam} style={{width:200,height:300}}/>
                        <h6 className='font-weight-bold text-muted'>Ahkam-ul-Quran</h6>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Language:  </h6>
                        <h6 className='font-weight-bold text-muted'>Urdu</h6>
                        </div>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Author:  </h6>
                        <h6 className='font-weight-bold text-muted'>Hazrat Basheer Farooqui</h6>
                        </div>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Publisher: </h6>   
                        <h6 className='font-weight-bold text-muted'>Azad Publisher</h6>  
                        </div>
                        <button type="button" className="btn btn-primary" style={{width:150}}>Download</button>
                        
                    </div>

                    <div className='col-md-4 mt-5'>
                    <img src={bookTwo} style={{width:200,height:300}}/>
                        <h6 className='font-weight-bold text-muted'>Adab-E-Maiyat</h6>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Language:  </h6>
                        <h6 className='font-weight-bold text-muted'>Urdu</h6>
                        </div>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Author:  </h6>
                        <h6 className='font-weight-bold text-muted'>Hazrat Basheer Farooqui</h6>
                        </div>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Publisher: </h6>   
                        <h6 className='font-weight-bold text-muted'>Azad Publisher</h6>  
                        </div>
                        <button type="button" className="btn btn-primary" style={{width:150}}>Download</button>
                        
                    </div>

                    <div className='col-md-4 mt-5'>
                    <img src={bookTwo} style={{width:200,height:300}}/>
                        <h6 className='font-weight-bold text-muted'>Adab-E-Maiyat</h6>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Language:  </h6>
                        <h6 className='font-weight-bold text-muted'>Urdu</h6>
                        </div>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Author:  </h6>
                        <h6 className='font-weight-bold text-muted'>Hazrat Basheer Farooqui</h6>
                        </div>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Publisher: </h6>   
                        <h6 className='font-weight-bold text-muted'>Azad Publisher</h6>  
                        </div>
                        <button type="button" className="btn btn-primary" style={{width:150}}>Download</button>
                        
                    </div>

                    <div className='col-md-4 mt-5'>
                    <img src={bookTwo} style={{width:200,height:300}}/>
                        <h6 className='font-weight-bold text-muted'>Adab-E-Maiyat</h6>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Language:  </h6>
                        <h6 className='font-weight-bold text-muted'>Urdu</h6>
                        </div>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Author:  </h6>
                        <h6 className='font-weight-bold text-muted'>Hazrat Basheer Farooqui</h6>
                        </div>
                        <div className='row justify-content-center'>
                        <h6 className='font-weight-bold '>Publisher: </h6>   
                        <h6 className='font-weight-bold text-muted'>Azad Publisher</h6>  
                        </div>
                        <button type="button" className="btn btn-primary" style={{width:150}}>Download</button>
                        
                    </div>
                </div>

            </div>
                </div>
            </div>
            
            </div>
             </div>
        
        )
      }}
