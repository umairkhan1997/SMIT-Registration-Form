import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import JobBank from "../components/JobBank/index";
import MainHeader from "../components/Home/MainHeader";
import jobpic from "../images/jobbank.jpg";
import Footer from "../components/Footer";
export default class JobForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobseekarForm: true,
            step1: 'formTag',
            step2: 'formTagdisable',
            step3: 'formTagdisable',
            step1show: true,
            step2show: false,
            step3show: false,
            nextbtn: true,
            prevbtn:false
        };
    }

    render() {
        return (
            <div style={{ backgroundColor: '#dfeaff', height: '100%', minHeight: '100vh' }}>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className={this.state.step1}>
                                <h2>Personal Details</h2>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className={this.state.step2}>
                                <h2>Professional Details</h2>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className={this.state.step3}>
                                <h2>Education Details</h2>
                            </div>
                        </div>
                    </div>
                    {this.state.jobseekarForm ? (
                        <div>
                            <div>
                                <div>

                                    {this.state.step1show ? <div className='formClose p-5'>
                                        <div className="row">
                                            <div className="col-md-6 py-3">
                                                <input className='jobInput' placeholder="Enter Name" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Enter Father Name" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <select className="jobInput">
                                                    <option>Select Gender</option>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input type="date" className="jobInput" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Place Of Birth" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Nationality" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Religion" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="CNIC Number" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Tell-Number" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Mobile Number" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Merital Status" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <select className="jobInput">
                                                    <option>Select Resident Type</option>
                                                    <option>Owner</option>
                                                    <option>On Rent</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Monthly Rent" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <select className="jobInput">
                                                    <option>Disability</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 py-3">
                                                <input className="jobInput" placeholder="Address" />
                                            </div>
                                            <div className="col-md-12 py-3">
                                                <textarea
                                                    className="jobInputTextarea"
                                                    placeholder="Type Details"
                                                    rows="7"
                                                ></textarea>
                                            </div>
                                            <div className="col-md-6 py-3">
                                                {this.state.prevbtn ? <button class="btn-block prevbtn">Previous</button> : null}
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <button class="btn-block prevbtn">Next <i class="fas fa-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </div> : null}
                                    {this.state.step2show ? <div className='formClose p-5'>
                                        <div className="row">
                                            <div className="col-md-6 py-3">
                                                <input className='jobInput' placeholder="Enter Qualification" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Enter Father Name" />
                                            </div>

                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Place Of Birth" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Nationality" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Religion" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="CNIC Number" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Tell-Number" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Mobile Number" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Merital Status" />
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <select className="jobInput">
                                                    <option>Select Resident Type</option>
                                                    <option>Owner</option>
                                                    <option>On Rent</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <input className="jobInput" placeholder="Monthly Rent" />
                                            </div>

                                            <div className="col-md-12 py-3">
                                                <input className="jobInput" placeholder="Address" />
                                            </div>

                                            <div className="col-md-6 py-3">
                                                {this.state.prevbtn ? <button class="btn-block prevbtn"><i class="fas fa-arrow-right"></i> Previous</button> : null}
                                            </div>
                                            <div className="col-md-6 py-3">
                                                {this.state.nextbtn ? <button onClick={() => this.setState({ prevbtn: true, step1show: false, step2show: true, step1: 'formTagdisable',step2:'formTag' })} class="btn-block prevbtn">Next <i class="fas fa-arrow-right"></i></button> : null}
                                            </div>
                                        </div>
                                    </div> : null}
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>)
    }
}