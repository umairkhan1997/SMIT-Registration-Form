import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Footer from '../components/Footer';

export default class CourseRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <MainHeader />
                <div style={{backgroundColor:'rgb(1 103 179)'}} className='py-5'>
                    <div className='container py-3'>
                        <h1 className='text-white'>Course Registration Form</h1>
                    </div>
                </div>
                <div className='container p-5'>
                    <div className='row'>
                        <div className='col-md-6 py-4'>
                            <label>Select Course</label>
                            <select className='jobInput'>
                                <option>Select Course</option>
                            </select>
                        </div>
                        <div className='col-md-6 py-4'>
                            <label>Select Batch</label>
                            <select className='jobInput'>
                                <option>Select Batch</option>
                            </select>
                        </div>
                        <div className='col-md-6 py-4'>
                            <label>Gender</label>
                            <select className='jobInput'>
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className='col-md-6 py-4'>
                            <label>Full Name</label>
                            <input className='jobInput' placeholder='Enter Name' />
                        </div>
                        <div className='col-md-6 py-4'>
                            <label>Father Name</label>
                            <input className='jobInput' placeholder='Father Name' />
                        </div>
                        <div className='col-md-6 py-4'>
                            <label>Contact Number</label>
                            <input className='jobInput' placeholder='Contact Number' />
                        </div>
                        <div className='col-md-6 py-4'>
                            <label>CNIC</label>
                            <input className='jobInput' placeholder='e.g 4210111111111' />
                        </div>
                        <div className='col-md-6 py-4'>
                            <label>Father's CNIC</label>
                            <input className='jobInput' placeholder='e.g 4210111111111' />
                        </div>
                        <div className='col-md-6 py-4'>
                            <label>DOB</label>
                            <input size='1' maxLength='2' className='dob' placeholder='dd' />
                            <input size='1' maxLength='2' className='dob' placeholder='mm' />
                            <input size='2' maxLength='4' className='dob' placeholder='yyyy' />
                        </div>
                        <div className='col-md-12 py-4'>
                            <label>Full and Permenent Address</label>
                            <input className='jobInput' placeholder='e.g 4210111111111' />
                        </div>
                        <div className='col-md-6 py-4'>
                            <label>Email</label>
                            <input className='jobInput' placeholder='e.g 4210111111111' />
                        </div>
                        <div className='col-md-12 py-4'>
                            <label>Last Qualification</label>
                            <p>None: <input type='radio' /></p>
                            <p>Matric: <input type='radio' /></p>
                            <p>Entermediate: <input type='radio' /></p>
                            <p>Graduate: <input type='radio' /></p>
                            <p>Undergraduate: <input type='radio' /></p>
                            <p>Masters: <input type='radio' /></p>
                            <p>PHD: <input type='radio' /></p>
                        </div>
                        <div className='col-md-12 py-4'>
                           <button className='prevbtn btn-block'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}