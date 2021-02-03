// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-slideshow-image/dist/styles.css";
// import "../App.css";
// import MainHeader from "../components/Home/MainHeader";
// import Footer from '../components/Footer';
// import axios from 'axios';
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
// let imgOne = "https://dmhqppb4umb6.cloudfront.net/saylani-logo.png";






// class ComponentToPrint extends React.Component {
//     componentDidMount() {
//       console.log(this.props.location.state);
//     }
//     render() {
//       return (
//         <div>
//           <p>print hoja</p>
//         </div>
//       );
//     }
//   }
  
//   class Example extends React.Component {
//     render() {
//       return (
//         <div>
//           <ReactToPrint
//             trigger={() => {
//               // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
//               // to the root node of the returned component as it will be overwritten.
//               return <button>Print this out!</button>;
//             }}
//             content={() => this.componentRef}
//           />
//           <ComponentToPrint ref={(el) => (this.componentRef = el)} />
//         </div>
//       );
//     }
//   }




// class CourseRegistration extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             formOpen: true,
//             fullName: "", gender: "", fatherName: "", ContactNumber: "", cnic: "", fatherCnic: "", email: "", dob: "", address: "", lastQualification: "",
//             chkfullName: false,
//             chkgender: false,
//             chkfatherName: false,
//             chkContactNumber: false,
//             chkcnic: false,
//             chkfatherCnic: false,
//             chkemail: false,
//             chkdob: false,
//             chkaddress: false,
//             profileImg: "", chkprofileImg: false, chklastQualification: false
//         };
//     }

//     componentWillMount() {
//         if (!this.props.location.state) {
//             this.props.history.push('/smit')
//         }
//     }

//     onSiteChanged = (e) => {
//         this.setState({
//             lastQualification: e.target.value
//         });
//     }

//     setFieldVal = (a, b) => {
//         this.setState({ [b]: a })
//     }

//     checkField = (a) => {
//         if (a != "") { return false }
//         return true;

//     }

//     onFileChange(e) {
//         console.log(e.target.file)
//         this.setState({ profileImg: e.target.files })
//     }

//     Submit = () => {
//         const { filteredName } = this.props.location.state
//         let { fullName, gender, fatherName, ContactNumber, cnic, fatherCnic, email, dob, address, lastQualification, profileImg } = this.state
//         if (this.checkField(fullName)) {
//             this.setState({ chkfullName: true })
//             window.scrollTo(0, 100);
//         }
//         else if (this.checkField(gender)) {
//             this.setState({ chkgender: true })
//             window.scrollTo(0, 100);
//         }
//         else if (this.checkField(fatherName)) {
//             this.setState({ chkfatherName: true })
//             window.scrollTo(0, 300);
//         }
//         else if (this.checkField(ContactNumber)) {
//             this.setState({ chkContactNumber: true })
//             window.scrollTo(0, 300);
//         }
//         else if (this.checkField(cnic)) {
//             this.setState({ chkcnic: true })
//             window.scrollTo(0, 300);
//         }
//         else if (this.checkField(fatherCnic)) {
//             this.setState({ chkfatherCnic: true })
//             window.scrollTo(0, 300);
//         }
//         else if (this.checkField(email)) {
//             this.setState({ chkemail: true })
//             window.scrollTo(0, 300);
//         }
//         else if (this.checkField(dob)) {
//             this.setState({ chkdob: true })
//             window.scrollTo(0, 300);
//         }
//         else if (this.checkField(address)) {
//             this.setState({ chkaddress: true })
//             window.scrollTo(0, 300);
//         }
//         else if (this.checkField(lastQualification)) {
//             this.setState({ chklastQualification: true })
//             window.scrollTo(0, 500);
//         }
//         else if (this.checkField(profileImg)) {
//             this.setState({ chkprofileImg: true })
//             window.scrollTo(0, 700);
//         }

//         else {
//             console.log('hello world')
//             var formData = new FormData();
//             for (const key of Object.keys(this.state.profileImg)) {
//                 formData.append('imgCollection', this.state.profileImg[key])
//             }
//             formData.append('fullName', fullName)
//             formData.append('email', email)
//             formData.append('gender', gender);
//             formData.append('fatherName', fatherName);
//             formData.append('ContactNumber', ContactNumber)
//             formData.append('cnic', cnic)
//             formData.append('fatherCnic', fatherCnic);
//             formData.append('dob', dob);
//             formData.append('address', address)
//             formData.append('lastQualification', lastQualification);
//             formData.append('batchName', filteredName.batchName);
//             formData.append('cityName', filteredName.cityName)
//             formData.append('courseName', filteredName.courseName);
//             axios.post("http://localhost:3000/smit/SmitAdmissFormadd", formData, {
//             }).then(res => {
//                 this.setState({ fullName: "", gender: "", fatherName: "", ContactNumber: "", cnic: "", fatherCnic: "", email: "", dob: "", address: "", lastQualification: "", profileImg: "" })
//                 alert('Form Submitted');
//                 console.log(res)
//             }).catch((err) => {
//                 alert('Form not Submitted');
//                 console.log(err)
//             })
//         }
//     }
//     CardGene=()=>{ 
//         <div>
//         <h1>Card to Print</h1>
//         <Example />
//         <ComponentToPrint />
//       </div>
//     }

//     render() {
//         const { fullName, gender, fatherName, ContactNumber, cnic, fatherCnic, email, dob, address, lastQualification } = this.state
//         console.log(this.props, 'this.props')
//         return (
//             <>
//                 <MainHeader />
//                 <div style={{ backgroundColor: 'rgb(1 103 179)' }} className='py-5'>
//                     <div className='container py-3'>
//                         <h1 className='text-white'>Course Registration Form</h1>
//                     </div>
//                 </div>

//                 {this.props.location.state && this.props.location.state.filteredName.viewForm ?
//                     <div>


//                         <div className='container p-5'>
//                             <p>
//                                 <button className="prevbtn" type="button" data-toggle="collapse" onclick={()=>this.CardGene()} data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Download Admit card</button>
//                             </p>
//                             <div className="collapse" id="collapseExample">
//                                 <div className="card card-body">
//                                     <form>
//                                         <input className='jobInput' placeholder='Enter CNIC' />
//                                     </form>
//                                 </div>
//                             </div>
//                             <div className='row'>
//                                 <div className='col-md-6 py-4'>
//                                     <label>Full Name</label>
//                                     <input className='jobInput' placeholder='Enter Full Name'
//                                         value={fullName} onChange={(e) => { this.setFieldVal(e.target.value, 'fullName'); this.setState({ chkfullName: false }) }}
//                                     />
//                                     {this.state.chkfullName ? <p className="text-danger">Field is Emply</p> : null}
//                                 </div>
//                                 <div className='col-md-6 py-4'>
//                                     <label>Gender</label>
//                                     <select className='jobInput' value={gender} onChange={(e) => { this.setFieldVal(e.target.value, 'gender'); this.setState({ chkgender: false }) }}>
//                                         <option>Gender</option>
//                                         <option>Male</option>
//                                         <option>Female</option>
//                                     </select>
//                                     {this.state.chkgender ? <p className="text-danger">Select Gender</p> : null}
//                                 </div>
//                                 <div className='col-md-6 py-4'>
//                                     <label>Father Name</label>
//                                     <input className='jobInput' placeholder='Father Name'
//                                         value={fatherName} onChange={(e) => { this.setFieldVal(e.target.value, 'fatherName'); this.setState({ chkfatherName: false }) }}
//                                     />
//                                     {this.state.chkfatherName ? <p className="text-danger">Field is Emply</p> : null}
//                                 </div>
//                                 <div className='col-md-6 py-4'>
//                                     <label>Contact Number</label>
//                                     <input className='jobInput' placeholder='03xx-xxxxxxx'
//                                         value={ContactNumber} onChange={(e) => { this.setFieldVal(e.target.value, 'ContactNumber'); this.setState({ chkContactNumber: false }) }}
//                                     />
//                                     {this.state.chkContactNumber ? <p className="text-danger">Field is Emply</p> : null}
//                                 </div>
//                                 <div className='col-md-6 py-4'>
//                                     <label>CNIC</label>
//                                     <input className='jobInput' placeholder='e.g 42101-1111111-1'
//                                         value={cnic} onChange={(e) => { this.setFieldVal(e.target.value, 'cnic'); this.setState({ chkcnic: false }) }}
//                                     />
//                                     {this.state.chkcnic ? <p className="text-danger">Field is Emply</p> : null}
//                                 </div>
//                                 <div className='col-md-6 py-4'>
//                                     <label>Father's CNIC</label>
//                                     <input className='jobInput' placeholder='e.g 42101-1111111-1'
//                                         value={fatherCnic} onChange={(e) => { this.setFieldVal(e.target.value, 'fatherCnic'); this.setState({ chkfatherCnic: false }) }}
//                                     />
//                                     {this.state.chkfatherCnic ? <p className="text-danger">Field is Emply</p> : null}
//                                 </div>
//                                 <div className='col-md-6 py-4'>
//                                     <label>Email</label>

//                                     <input className='jobInput' placeholder='xxx@gmail.com'
//                                         value={email} onChange={(e) => { this.setFieldVal(e.target.value, 'email'); this.setState({ chkemail: false }) }}
//                                     />
//                                     {this.state.chkemail ? <p className="text-danger">Field is Emply</p> : null}
//                                 </div>
//                                 <div className='col-md-6 py-4'>
//                                     <label>DOB</label>
//                                     <br /><br />
//                                     <input type="date" className='dob'
//                                         value={dob} onChange={(e) => { this.setFieldVal(e.target.value, 'dob'); this.setState({ chkdob: false }) }}
//                                     />
//                                     {this.state.chkdob ? <p className="text-danger">Field is Emply</p> : null}
//                                 </div>
//                                 <div className='col-md-12 py-4'>
//                                     <label>Full and Permenent Address</label>
//                                     <input className='jobInput' placeholder=""
//                                         value={address} onChange={(e) => { this.setFieldVal(e.target.value, 'address'); this.setState({ chkaddress: false }) }}
//                                     />
//                                     {this.state.chkaddress ? <p className="text-danger">Field is Emply</p> : null}
//                                 </div>
//                                 <div className='col-md-12 py-4'>
//                                     <h4>Last Qualification</h4>
//                                     <div className='row'>
//                                         <div className='col-md-3'>
//                                             <label><input name='qualification' type='radio'
//                                                 value="Matric"
//                                                 checked={lastQualification === "Matric"}
//                                                 onChange={(e) => { this.onSiteChanged(e); this.setState({ chklastQualification: false }) }}
//                                             /> Matric</label>
//                                         </div>
//                                         <div className='col-md-3'>
//                                             <label><input name='qualification' type='radio'
//                                                 value="Entermediate"
//                                                 checked={lastQualification === "Entermediate"}
//                                                 onChange={(e) => { this.onSiteChanged(e); this.setState({ chklastQualification: false }) }}
//                                             /> Entermediate</label>
//                                         </div>
//                                         <div className='col-md-3'>
//                                             <label><input name='qualification' type='radio'
//                                                 value="Graduate"
//                                                 checked={lastQualification === "Graduate"}
//                                                 onChange={(e) => { this.onSiteChanged(e); this.setState({ chklastQualification: false }) }}
//                                             /> Graduate</label>
//                                         </div>
//                                         <div className='col-md-3'>
//                                             <label><input name='qualification' type='radio'
//                                                 value="Undergraduate"
//                                                 checked={lastQualification === "Undergraduate"}
//                                                 onChange={(e) => { this.onSiteChanged(e);; this.setState({ chklastQualification: false }) }} /> Undergraduate</label>
//                                         </div>
//                                         <div className='col-md-3'>
//                                             <label><input name='qualification' type='radio'
//                                                 value="Masters"
//                                                 checked={lastQualification === "Masters"}
//                                                 onChange={(e) => { this.onSiteChanged(e); this.setState({ chklastQualification: false }) }}
//                                             /> Masters</label>
//                                         </div>
//                                         <div className='col-md-3'>
//                                             <label><input name='qualification' type='radio'
//                                                 value="PHD"
//                                                 checked={lastQualification === "PHD"}
//                                                 onChange={(e) => { this.onSiteChanged(e); this.setState({ chklastQualification: false }) }}

//                                             /> PHD</label>
//                                         </div>
//                                     </div>
//                                     {this.state.chklastQualification ? <p className="text-danger">Field is Emply</p> : null}
//                                 </div>
//                                 <div className='col-md-12 py-4'>
//                                     <label>Passport Size Profile Image</label>
//                                     <input type='file' className='uploadCV'
//                                         name="profileImg" onChange={(e) => { this.onFileChange(e); this.setState({ chkprofileImg: false }) }}
//                                     />
//                                     {this.state.chkprofileImg ? <p className="text-danger">Field is Emply</p> : null}
//                                 </div>
//                                 <div>
//                                     <ol>
//                                         <li>I hereby, solemnly declare that the data and facts mentioned herein are true and correct to the best of my knowledge. Further, I will abide by my all the establish and future regulation and policies of SWIT</li>
//                                         <li>I hereby accept the responsibilites of the good conduct and guarantee that I will not be involved in any other activity, polical or ethic, but learning during my stay in the program.</li>
//                                         <li>Defiance will render my admission cancelled at any point in time.</li>
//                                         <li>Upon completion of course, I will complete the required project by SWIT.</li>
//                                     </ol>
//                                 </div>
//                                 <div className='col-md-12 py-4'>
//                                     <button className='prevbtn btn-block' onClick={() => this.Submit()}>Submit</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     :
//                     <div className='container p-5'>
//                         <p className='text-muted' style={{ fontSize: '3em' }}>Registration has been closed</p>
//                         <p className='text-muted' style={{ fontSize: '2em' }}>For More Details Please Visit <a href='https://www.facebook.com/SaylaniMassTraining/'>Saylani Mass Training</a></p>
//                         <p className='text-muted'>Created by M Umair</p>
//                     </div>
//                     // <div className="text-center">
//                     //     <img
//                     //         src={imgOne}
//                     //         width="50%"
//                     //     />
//                     //     <h2>Saylani Mass Training & Job Creation Program</h2>
//                     //     <h4>Registration / Entry Test Form</h4>
//                     //     <p className="text-danger">Registration has been closed</p>
//                     //     <p>Created by M Umair</p>
//                     // </div>
//                 }
//             </>
//         )
//     }
// }


// function mapStateToProp(state) {
//     return {
//         // bookAllCats: state.root.bookAllCats,
//         // bookAllSpe: state.root.bookAllSpe,
//     };
// }
// function mapDispatchToProp(dispatch) {
//     return {
//         // bookAllCat: () => {
//         //   dispatch(bookAllCat());
//         // },
//     };
// }
// export default withRouter(connect(mapStateToProp, mapDispatchToProp)(CourseRegistration));

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import './course.css';
import MainHeader from "../components/Home/MainHeader";
import Footer from '../components/Footer';
import axios from 'axios';
import { connect } from "react-redux";
import {stdData} from '../Redux/action/smitAction'
import { withRouter } from "react-router-dom";
import AdmitCard from "./admitCard"
let imgOne = "https://dmhqppb4umb6.cloudfront.net/saylani-logo.png";

class CourseRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formOpen: true,
            fullName: "", gender: "", fatherName: "", ContactNumber: "", cnic: "", fatherCnic: "", email: "", dob: "", address: "", lastQualification: "",
            chkfullName: false,
            chkgender: false,
            chkfatherName: false,
            chkContactNumber: false,
            chkcnic: false,
            chkfatherCnic: false,
            chkemail: false,
            chkdob: false,
            chkaddress: false,
            profileImg: "", chkprofileImg: false, chklastQualification: false,cond:false,stdData:'',loading:false
        };
    }

    componentWillMount() {
        if (!this.props.location.state) {
            this.props.history.push('/smit')
        }
    }

    onSiteChanged = (e) => {
        this.setState({
            lastQualification: e.target.value
        });
    }

    setFieldVal = (a, b) => {
        this.setState({ [b]: a })
    }

    checkField = (a) => {
        if (a != "") { return false }
        return true;

    }

toAdminCard=(e,a,b,c)=>{
    console.log(a,'aaaaaaaaaaaa')
    this.props.stdData(e,a,b,c);
    this.props.history.push('/admitcard')
  
//  this.props.history.push({
//     pathname: '/admitcard',
//     state: { detail: e }
// })
  }
  

    onFileChange(e) {
        console.log(e.target.file)
        this.setState({ profileImg: e.target.files })
    }

    Submit = () => {
        const { filteredName } = this.props.location.state
        console.log(filteredName,'filteredName')
        let { fullName, gender, fatherName, ContactNumber, cnic, fatherCnic, email, dob, address, lastQualification, profileImg } = this.state
        if (this.checkField(fullName)) {
            this.setState({ chkfullName: true })
            window.scrollTo(0, 100);
        }
        else if (this.checkField(gender)) {
            this.setState({ chkgender: true })
            window.scrollTo(0, 100);
        }
        else if (this.checkField(fatherName)) {
            this.setState({ chkfatherName: true })
            window.scrollTo(0, 300);
        }
        else if (this.checkField(ContactNumber)) {
            this.setState({ chkContactNumber: true })
            window.scrollTo(0, 300);
        }
        else if (this.checkField(cnic)) {
            this.setState({ chkcnic: true })
            window.scrollTo(0, 300);
        }
        else if (this.checkField(fatherCnic)) {
            this.setState({ chkfatherCnic: true })
            window.scrollTo(0, 300);
        }
        else if (this.checkField(email)) {
            this.setState({ chkemail: true })
            window.scrollTo(0, 300);
        }
        else if (this.checkField(dob)) {
            this.setState({ chkdob: true })
            window.scrollTo(0, 300);
        }
        else if (this.checkField(address)) {
            this.setState({ chkaddress: true })
            window.scrollTo(0, 300);
        }
        else if (this.checkField(lastQualification)) {
            this.setState({ chklastQualification: true })
            window.scrollTo(0, 500);
        }
        else if (this.checkField(profileImg)) {
            this.setState({ chkprofileImg: true })
            window.scrollTo(0, 700);
        }

        else {
            console.log('hello world',filteredName)
            var formData = new FormData();
            for (const key of Object.keys(this.state.profileImg)) {
                formData.append('imgCollection', this.state.profileImg[key])
            }
            formData.append('fullName', fullName)
            formData.append('email', email)
            formData.append('gender', gender);
            formData.append('fatherName', fatherName);
            formData.append('ContactNumber', ContactNumber)
            formData.append('cnic', cnic)
            formData.append('fatherCnic', fatherCnic);
            formData.append('dob', dob);
            formData.append('address', address)
            formData.append('lastQualification', lastQualification);
            formData.append('batchName', filteredName.batchName);
            formData.append('cityName', filteredName.cityName)
            formData.append('courseName', filteredName.courseName);
            axios.post("http://localhost:3000/smit/SmitAdmissFormadd", formData, {
            }).then(res => {
                window.scrollTo(0, 100);
                this.setState({ fullName: "", gender: "", fatherName: "", ContactNumber: "", cnic: "", fatherCnic: "", email: "", dob: "", address: "", lastQualification: ""})
                this.toAdminCard(res,URL.createObjectURL(this.state.profileImg[0]),filteredName.courseId,filteredName.year)
                alert('Form Submitted');                
                // this.setState({cond:true,stdData:res})
                console.log(res)
            }).catch((err) => {
                alert('Form not Submitted');
                this.setState({loading:false})
                console.log(err)
            })
        }
        this.setState({loading:false})
    }
    render() {
        const { fullName, gender, fatherName, ContactNumber, cnic, fatherCnic, email, dob, address, lastQualification } = this.state
        console.log(this.props, 'this.props')
        return (
            <>
                <MainHeader />
                <div style={{ backgroundColor: 'rgb(1 103 179)' }} className='py-5'>
                    <div className='container py-3'>
                        <h1 className='text-white'>Course Registration Form</h1>
                    </div>
                </div>
                {this.props.location.state && this.props.location.state.filteredName.viewForm ?
                    <div>
{this.state.loading?
<div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status" style={{ position: 'absolute', left: '50%', top: '50%',width:'50px',height:'50px'}}>
  <span class="sr-only">Loading...</span>
</div>
:
                        <div className='container p-5'>
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
                                    <label>Full Name</label>
                                    <input className='jobInput' placeholder='Enter Full Name' type="text"
                                        value={fullName} onChange={(e) => { this.setFieldVal(e.target.value, 'fullName'); this.setState({ chkfullName: false }) }}
                                    />
                                    {this.state.chkfullName ? <p className="text-danger">Field is Emply</p> : null}
                                </div>
                                <div className='col-md-6 py-4'>
                                    <label>Gender</label>
                                    <select className='jobInput' value={gender} onChange={(e) => { this.setFieldVal(e.target.value, 'gender'); this.setState({ chkgender: false }) }}>
                                        <option>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                    {this.state.chkgender ? <p className="text-danger">Select Gender</p> : null}
                                </div>
                                <div className='col-md-6 py-4'>
                                    <label>Father Name</label>
                                    <input className='jobInput' placeholder='Father Name' type="text"
                                        value={fatherName} onChange={(e) => { this.setFieldVal(e.target.value, 'fatherName'); this.setState({ chkfatherName: false }) }}
                                    />
                                    {this.state.chkfatherName ? <p className="text-danger">Field is Emply</p> : null}
                                </div>
                                <div className='col-md-6 py-4'>
                                    <label>Contact Number</label>
                                    <input className='jobInput' placeholder='03xx-xxxxxxx'   type="number" 
                                        value={ContactNumber} onChange={(e) => { this.setFieldVal(e.target.value, 'ContactNumber'); this.setState({ chkContactNumber: false }) }}
                                    />
                                    {this.state.chkContactNumber ? <p className="text-danger">Field is Emply</p> : null}
                                </div>
                                <div className='col-md-6 py-4'>
                                    <label>CNIC</label>
                                    <input className='jobInput' placeholder='e.g 42101-1111111-1'  type="number" 
                                        value={cnic} onChange={(e) => { this.setFieldVal(e.target.value, 'cnic'); this.setState({ chkcnic: false }) }}
                                    />
                                    {this.state.chkcnic ? <p className="text-danger">Field is Emply</p> : null}
                                </div>
                                <div className='col-md-6 py-4'>
                                    <label>Father's CNIC</label>
                                    <input className='jobInput' placeholder='e.g 42101-1111111-1' type="number" 
                                        value={fatherCnic} onChange={(e) => { this.setFieldVal(e.target.value, 'fatherCnic'); this.setState({ chkfatherCnic: false }) }}
                                    />
                                    {this.state.chkfatherCnic ? <p className="text-danger">Field is Emply</p> : null}
                                </div>
                                <div className='col-md-6 py-4'>
                                    <label>Email</label>

                                    <input className='jobInput' placeholder='xxx@gmail.com' tyoe="email" style={{marginTop:10}}
                                        value={email} onChange={(e) => { this.setFieldVal(e.target.value, 'email'); this.setState({ chkemail: false }) }}
                                    />
                                    {this.state.chkemail ? <p className="text-danger">Field is Emply</p> : null}
                                </div>
                                <div className='col-md-6 py-4'>
                                    <label>DOB ( Date of Birth )</label>
                                    <br /><br />
                                    <input type="date" className='dob' style={{width:'100%'}}
                                        value={dob} onChange={(e) => { this.setFieldVal(e.target.value, 'dob'); this.setState({ chkdob: false }) }}
                                    />
                                    {this.state.chkdob ? <p className="text-danger">Field is Emply</p> : null}
                                </div>
                                <div className='col-md-12 py-4'>
                                    <label>Full and Permenent Address</label>
                                    <input className='jobInput' placeholder="" type="text"
                                        value={address} onChange={(e) => { this.setFieldVal(e.target.value, 'address'); this.setState({ chkaddress: false }) }}
                                    />
                                    {this.state.chkaddress ? <p className="text-danger">Field is Emply</p> : null}
                                </div>
                                <div className='col-md-12 py-4'>
                                    <h4>Last Qualification</h4>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <label><input name='qualification' type='radio'
                                                value="Matric"
                                                checked={lastQualification === "Matric"}
                                                onChange={(e) => { this.onSiteChanged(e); this.setState({ chklastQualification: false }) }}
                                            /> Matric</label>
                                        </div>
                                        <div className='col-md-3'>
                                            <label><input name='qualification' type='radio'
                                                value="Entermediate"
                                                checked={lastQualification === "Entermediate"}
                                                onChange={(e) => { this.onSiteChanged(e); this.setState({ chklastQualification: false }) }}
                                            /> Entermediate</label>
                                        </div>
                                        <div className='col-md-3'>
                                            <label><input name='qualification' type='radio'
                                                value="Graduate"
                                                checked={lastQualification === "Graduate"}
                                                onChange={(e) => { this.onSiteChanged(e); this.setState({ chklastQualification: false }) }}
                                            /> Graduate</label>
                                        </div>
                                        <div className='col-md-3'>
                                            <label><input name='qualification' type='radio'
                                                value="Undergraduate"
                                                checked={lastQualification === "Undergraduate"}
                                                onChange={(e) => { this.onSiteChanged(e);; this.setState({ chklastQualification: false }) }} /> Undergraduate</label>
                                        </div>
                                        <div className='col-md-3'>
                                            <label><input name='qualification' type='radio'
                                                value="Masters"
                                                checked={lastQualification === "Masters"}
                                                onChange={(e) => { this.onSiteChanged(e); this.setState({ chklastQualification: false }) }}
                                            /> Masters</label>
                                        </div>
                                        <div className='col-md-3'>
                                            <label><input name='qualification' type='radio'
                                                value="PHD"
                                                checked={lastQualification === "PHD"}
                                                onChange={(e) => { this.onSiteChanged(e); this.setState({ chklastQualification: false }) }}

                                            /> PHD</label>
                                        </div>
                                    </div>
                                    {this.state.chklastQualification ? <p className="text-danger">Field is Emply</p> : null}
                                </div>
                                <div className='col-md-12 py-4'>
                                    <label>Passport Size Profile Image</label>
                                    <input type='file' className='uploadCV'
                                        name="profileImg" onChange={(e) => { this.onFileChange(e); this.setState({ chkprofileImg: false }) }}
                                    />
                                    {this.state.chkprofileImg ? <p className="text-danger">Field is Emply</p> : null}
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
                                    <button className='prevbtn btn-block' onClick={() => this.Submit()}>Submit</button>
                                </div>
                            </div>
                        </div>
    }
                    </div>
                    :
                    <div className='container p-5'>
                        <p className='text-muted' style={{ fontSize: '3em' }}>Registration has been closed</p>
                        <p className='text-muted' style={{ fontSize: '2em' }}>For More Details Please Visit <a href='https://www.facebook.com/SaylaniMassTraining/'>Saylani Mass Training</a></p>
                        <p className='text-muted'>Created by M Umair</p>
                    </div>

                }
                {
                    this.state.cond?
                    <AdmitCard data={this.state.stdData} />
                    :null
                }
            </>
        )
    }
}


function mapStateToProp(state) {
    return {
        // bookAllCats: state.root.bookAllCats,
        // bookAllSpe: state.root.bookAllSpe,
    };
}
function mapDispatchToProp(dispatch) {
    return {
        stdData: (e,a,b,c) => {
          dispatch(stdData(e,a,b,c));
        },
    };
}
export default withRouter(connect(mapStateToProp, mapDispatchToProp)(CourseRegistration));
