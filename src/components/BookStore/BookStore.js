import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import bookStore from '../../images/bookStore.jpg'
import bookOne from '../../images/MAH-K-ORAD-O-WAZAIF.jpg'
import bookTwo from '../../images/adab-e-maiyat.jpg'
import ehkam from '../../images/ehkam.jpg';
import './BookStore.css'

export default class BookStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>

                <img src={bookStore} width='100%' />
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 my-3 py-5'>
                            <h4 className='text-muted'>CATEGORIES</h4>
                            <ul>
                                <li className='text-muted'>All Books</li>
                                <li className='text-muted'>Hazrat Basheer Farooqui</li>
                                <li className='text-muted'>Rohani Wazaef</li>
                            </ul>
                            <h4 className='text-muted'>SPECIALS</h4>
                            <div>
                                <img src={bookOne} width='100%' />
                                <h4>12 MAH K ORAD-O-WAZAIF</h4>
                            </div>
                        </div>
                        <div className='col-md-9 py-5 border'>
                            <div className='container '>
                                <div className='row'>
                                    <div className='col-md-4 my-3'>
                                        <div className='singleBook'>

                                            <img src={bookTwo} width='100%' />
                                            <div className='p-3 bookDetails'>
                                                <h4>Adab-E-Maiyat</h4>
                                                <p>Language: <span>Urdu</span></p>
                                                <p>Author: <span>Hazrat Basheer Farooqui</span></p>
                                                <p>Publisher: <span>Azad Publisher</span></p>
                                            </div>
                                            <button type="button" className="btn-block btn download">Download</button>
                                        </div>
                                    </div>
                                    <div className='col-md-4 my-3'>
                                        <div className='singleBook'>
                                            <img src={bookTwo} width='100%' />
                                            <div className='p-3 bookDetails'>
                                                <h4>Adab-E-Maiyat</h4>
                                                <p>Language: <span>Urdu</span></p>
                                                <p>Author: <span>Hazrat Basheer Farooqui</span></p>
                                                <p>Publisher: <span>Azad Publisher</span></p>
                                            </div>
                                            <button type="button" className="btn-block btn download">Download</button>
                                        </div>
                                    </div>
                                    <div className='col-md-4 my-3'>
                                        <div className='singleBook'>
                                            <img src={bookTwo} width='100%' />
                                            <div className='p-3 bookDetails'>
                                                <h4>Adab-E-Maiyat</h4>
                                                <p>Language: <span>Urdu</span></p>
                                                <p>Author: <span>Hazrat Basheer Farooqui</span></p>
                                                <p>Publisher: <span>Azad Publisher</span></p>
                                            </div>
                                            <button type="button" className="btn-block btn download">Download</button>
                                        </div>
                                    </div>
                                    <div className='col-md-4 my-3'>
                                        <div className='singleBook'>
                                            <img src={bookTwo} width='100%' />
                                            <div className='p-3 bookDetails'>
                                                <h4>Adab-E-Maiyat</h4>
                                                <p>Language: <span>Urdu</span></p>
                                                <p>Author: <span>Hazrat Basheer Farooqui</span></p>
                                                <p>Publisher: <span>Azad Publisher</span></p>
                                            </div>
                                            <button type="button" className="btn-block btn download">Download</button>
                                        </div>
                                    </div>








                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
