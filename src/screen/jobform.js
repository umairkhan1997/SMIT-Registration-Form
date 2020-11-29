import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import JobBank from "../components/JobBank/index";
import MainHeader from "../components/Home/MainHeader";
import jobpic from "../images/jobbank.jpg";
import logo from "../images/logo.png";
import Footer from "../components/Footer";
export default class JobForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobseekarForm: true,
            jobRequriter: false,
            step1: 'formTag',
            step2: 'formTagdisable',
            step3: 'formTagdisable',
            step1show: true,
            step2show: false,
            step3show: false,
            nextbtn: true,
            prevbtn: false
        };
    }

    render() {
        return (
            <div style={{ backgroundColor: '#dfeaff', height: '100%', minHeight: '100vh' }}>
                <MainHeader />
                <div>
                    <button onClick={() => this.setState({ jobseekarForm: true, jobRequriter: false })}>register as a Job Employee</button>
                    <button onClick={() => this.setState({ jobseekarForm: false, jobRequriter: true })}>register as a Job Requriter</button>
                </div>
                <div className='container py-5'>
                    {this.state.jobRequriter ? <div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='formTag'>
                                    <h2>Reqruiter Form</h2>
                                </div>
                            </div>

                        </div>
                        <div className='formClose p-5 shadow'>
                            <div className="row">
                                <div className="col-md-6 py-3">
                                    <input className='jobInput' placeholder="Company or Individual Name" />
                                </div>
                                <div className="col-md-6 py-3">
                                    <input className="jobInput" placeholder="Nature Of Job" />
                                </div>



                                <div className="col-md-6 py-3">
                                    <input className="jobInput" placeholder="Location" />
                                </div>
                                <div className="col-md-6 py-3">
                                    <input className="jobInput" placeholder="Approx Sallary" />
                                </div>
                                <div className="col-md-6 py-3">
                                    <input className="jobInput" placeholder="Time period to fill Start" />
                                </div>

                                <div className="col-md-6 py-3">
                                    <input className="jobInput" placeholder="HR or Personal Contact Number" />
                                </div>


                                <div className="col-md-6 py-3">
                                    <select className="jobInput">
                                        <option>Select Job Type</option>
                                        <option>Permenent</option>
                                        <option>Temporary</option>
                                    </select>
                                </div>
                                <div className="col-md-6 py-3">
                                    <input className="jobInput" placeholder="Approx Duration" />
                                </div>

                                <div className="col-md-6 py-3">
                                    <select className="jobInput">
                                        <option>Experiance Required</option>
                                        <option>Fresh</option>
                                        <option>More then 1 year</option>
                                        <option>More then 2 year</option>
                                        <option>More then 3 year</option>
                                        <option>More then 5 year</option>
                                    </select>
                                </div>

                                <div className="col-md-12 py-3">
                                    <textarea
                                        className="jobInputTextarea"
                                        placeholder="Job Description"
                                        rows="7"
                                    ></textarea>
                                </div>

                                <div className="col-md-12 py-3">
                                    <button class="btn-block prevbtn">Post Job <i class="fas fa-paste"></i></button>
                                </div>
                            </div>
                        </div>
                    </div> : null}
                    {this.state.jobseekarForm ? (
                        <div>
                            <div>
                                <div>
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
                                                <h2>Upload Resume</h2>
                                            </div>
                                        </div>
                                    </div>

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
                                                <button onClick={() => this.setState({
                                                    step1: 'formTagdisable',
                                                    step2: 'formTag',
                                                    step3: 'formTagdisable',
                                                    step1show: false,
                                                    step2show: true,
                                                    step3show: false,
                                                    nextbtn: true,
                                                    prevbtn: true
                                                })} class="btn-block prevbtn">Next <i class="fas fa-arrow-right"></i></button>
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
                                                {this.state.prevbtn ? <button onClick={() => this.setState({
                                                    step1: 'formTag',
                                                    step2: 'formTagdisable',
                                                    step3: 'formTagdisable',
                                                    step1show: true,
                                                    step2show: false,
                                                    step3show: false,
                                                    nextbtn: true,
                                                    prevbtn: false
                                                })} class="btn-block prevbtn"><i class="fas fa-arrow-left"></i> Previous</button> : null}
                                            </div>
                                            <div className="col-md-6 py-3">
                                                {this.state.nextbtn ? <button onClick={() => this.setState({
                                                    step1: 'formTagdisable',
                                                    step2: 'formTagdisable',
                                                    step3: 'formTag',
                                                    step1show: false,
                                                    step2show: false,
                                                    step3show: true,
                                                    nextbtn: false,
                                                    prevbtn: true
                                                })} class="btn-block prevbtn">Next <i class="fas fa-arrow-right"></i></button> : null}
                                            </div>
                                        </div>
                                    </div> : null}
                                    {this.state.step3show ? <div className='formClose p-5'>
                                        <div className="row">
                                            <div className="col-md-12 py-3">
                                                <label style={{ color: '#0267b4' }} className='lab'>Upload Resume</label>
                                                <input className='uploadCV' type='file' placeholder="Enter Qualification" />
                                            </div>
                                            <div className="col-md-12 py-3">
                                                <button className='prevbtn'>Upload Resume</button>
                                            </div>


                                            <div className="col-md-6 py-3">
                                                {this.state.prevbtn ? <button onClick={() => this.setState({
                                                    step1: 'formTagdisable',
                                                    step2: 'formTag',
                                                    step3: 'formTagdisable',
                                                    step1show: false,
                                                    step2show: true,
                                                    step3show: false,
                                                    nextbtn: true,
                                                    prevbtn: true
                                                })} class="btn-block prevbtn"><i class="fas fa-arrow-left"></i> Previous</button> : null}
                                            </div>
                                            <div className="col-md-6 py-3">
                                                <button class="btn-block prevbtn"><i class="fas fa-check"></i> Submit Response</button>
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