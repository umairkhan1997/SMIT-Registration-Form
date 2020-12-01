import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Footer from '../components/Footer';

export default class CourseRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formOpen: true
        };
    }
    render() {
        return (
            <div>
                <MainHeader />
                <div style={{ backgroundColor: 'rgb(1 103 179)' }} className='py-5'>
                    <div className='container py-3'>
                        <h1 className='text-white'>Course Registration Form</h1>
                    </div>
                </div>


                {this.state.formOpen ? <div className='container p-5'>
                    <p>
                        <button className="prevbtn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Download Admit card</button>
                    </p>
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            <form>
                                <input className='jobInput' placeholder='Enter CNIC' />
                            </form>
                        </div>
                    </div>
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
                            <h4>Last Qualification</h4>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <label><input name='qualification' type='radio' /> None</label>
                                </div>
                                <div className='col-md-3'>
                                    <label><input name='qualification' type='radio' /> Matric</label>
                                </div>
                                <div className='col-md-3'>
                                    <label><input name='qualification' type='radio' /> Entermediate</label>
                                </div>
                                <div className='col-md-3'>
                                    <label><input name='qualification' type='radio' /> Graduate</label>
                                </div>
                                <div className='col-md-3'>
                                    <label><input name='qualification' type='radio' /> Undergraduate</label>
                                </div>
                                <div className='col-md-3'>
                                    <label><input name='qualification' type='radio' /> Masters</label>
                                </div>
                                <div className='col-md-3'>
                                    <label><input name='qualification' type='radio' /> PHD</label>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 py-4'>
                            <input type='file' className='uploadCV' />
                        </div>
                        <div>
                            <ol>
                                <li>I hereby, solemnly declare that the data and facts mentioned herein are true and correct to the best of my knowledge. Further, I will abide by my all the establish and future regulation and policies of SWIT</li>
                                <li>I hereby accept the responsibilites of the good conduct and guarantee that I will not be involved in any other activity, polical or ethic, but learning during my stay in the program.</li>
                                <li>Defiance will render my admission cancelled at any point in time.</li>
                                <li>Upon completion of course, I will complete the required project by SWIT.</li>
                            </ol>
                        </div>
                        <div className='col-md-12 py-4'>
                            <button className='prevbtn btn-block'>Submit</button>
                        </div>
                    </div>
                </div> : <div className='container p-5'>
                        <p className='text-muted' style={{ fontSize: '3em' }}>Registration has been closed</p>
                        <p className='text-muted' style={{ fontSize: '2em' }}>For More Details Please Visit <a href='https://www.facebook.com/SaylaniMassTraining/'>Saylani Mass Training</a></p>
                    </div>}
            </div>
        )
    }
}