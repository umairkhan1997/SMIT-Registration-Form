import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../images/logo.png";
import '../App.css';
import $ from 'jquery';
export default class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //  navBackground:'transparent',navbarStat:'absolute',topStat:20
    };
  }

//   componentDidMount() {
//     document.addEventListener("scroll", () => {
//       const backgroundcolor = window.scrollY < 100 ? "transparent" : "white";
//       const navbarStat = window.scrollY < 100 ? "absolute" : "sticky";
//       const topStat = window.scrollY < 100 ? 20 : 0;
//       this.setState({ navBackground: backgroundcolor,navbarStat,topStat });
//     });
//   }
// ///bg-transparent sticky-top
  render() {
    return (
//       <header className="row  mainHead" style={{width:window.scrollY<100?'85%':'101.5%',backgroundColor:this.state.navBackground,position:this.state.navbarStat,zIndex:2,top:this.state.topStat,marginLeft:window.scrollY < 100?0:-30}}>
//         <div className="col-md-3 container  pt-4 ">
//           <div style={{marginLeft:window.scrollY<100?0:-200}}>
//             <a href="/">
//               <img src={logo} width="220px" />
//             </a>
//           </div>
//           {/* <div>
//             <button className="donateBtn">Donate Now</button>
//             <button className="donateBtn">UK Donor</button>
//           </div> */}
//         </div>

//         <div className=" col-md-9 container-fluid bg-transparent pt-4" 
//         //style={{marginRight:window.scrollY < 100 ?0:50}}
//         style={{marginLeft:window.scrollY < 100?0:-250}}
//         >
//           <div className="container">
//             <nav className="navbar navbar-expand-lg navbar-light " style={{color:' white',fontSize:20}}>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>

//               <div
//                 className="collapse  navbar-collapse"
//                 id="navbarSupportedContent"
//               >
//                 <ul className="navbar-nav mr-auto" style={{color:' white',fontSize:20}}>
//                   <li className="nav-item active" >
//                     <a className="nav-link" href="/" style={{color:' #d43c18',fontSize:20}}>
//                       Home <span className="sr-only">(current)</span>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#" style={{color:' #d43c18',fontSize:20}}>
//                       Link
//                     </a>
//                   </li>
//                   <li className="nav-item dropdown">
//                     <a
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       id="navbarDropdown"
//                       role="button"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     style={{color:' #d43c18',fontSize:20}}>
//                       About
//                     </a>
//                     <div
//                       className="dropdown-menu headingList"
//                       aria-labelledby="navbarDropdown"
//                     >
//                       <a className="dropdown-item" href="chairmenmessage"style={{color:' #d43c18',fontSize:20}}>
//                         Chairman Message
//                       </a>
//                       <a className="dropdown-item" href="#"style={{color:' #d43c18',fontSize:20}}>
//                         Another action
//                       </a>
//                       <div className="dropdown-divider"></div>
//                       <a className="dropdown-item" href="#"style={{color:' #d43c18',fontSize:20}}>
//                         Something else here
//                       </a>
//                     </div>
//                   </li>
//                   <li className="nav-item dropdown">
//                     <a
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       id="navbarDropdown"
//                       role="button"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     style={{color:' #d43c18',fontSize:20}}>
//                       Saylani Services
//                     </a>
//                     <div
//                       className="dropdown-menu headingList"
//                       aria-labelledby="navbarDropdown"
//                     >
//                       <a className="dropdown-item" href="#"style={{color:' #d43c18',fontSize:20}}>
//                         Education
//                       </a>
//                       <a className="dropdown-item" href="Smit"style={{color:' #d43c18',fontSize:20}}>
//                         Saylani Mass IT
//                       </a>
//                       <a className="dropdown-item" href="Welfare"style={{color:' #d43c18',fontSize:20}}>
//                         Welfare
//                       </a>
//                       <a className="dropdown-item" href="medical"style={{color:' #d43c18',fontSize:20}}>
//                         Medical
//                       </a>
//                     </div>
//                   </li>
//                   <li className="nav-item dropdown">
//                     <a
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       id="navbarDropdown"
//                       role="button"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     style={{color:' #d43c18',fontSize:20}}>
//                       Saylani Ehsaas
//                     </a>
//                     <div
//                       className="dropdown-menu headingList"
//                       aria-labelledby="navbarDropdown"
//                     >
//                       <a className="dropdown-item" href="#"style={{color:' #d43c18',fontSize:20}}>
//                         Action
//                       </a>
//                       <a className="dropdown-item" href="#"style={{color:' #d43c18',fontSize:20}}>
//                         Another action
//                       </a>
//                       <div className="dropdown-divider"></div>
//                       <a className="dropdown-item" href="#"style={{color:' #d43c18',fontSize:20}}>
//                         Something else here
//                       </a>
//                     </div>
//                   </li>
//                   <li className="nav-item dropdown">
//                     <a
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       id="navbarDropdown"
//                       role="button"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     style={{color:' #d43c18',fontSize:20}}>
//                       Future Project
//                     </a>
//                     <div
//                       className="dropdown-menu headingList"
//                       aria-labelledby="navbarDropdown"
//                     >
//                       <a className="dropdown-item" href="#"style={{color:' #d43c18',fontSize:20}}>
//                         Action
//                       </a>
//                       <a className="dropdown-item" href="#"style={{color:' #d43c18',fontSize:20}}>
//                         Another action
//                       </a>
//                       <div className="dropdown-divider"></div>
//                       <a className="dropdown-item" href="#"style={{color:' #d43c18',fontSize:20}}>
//                         Something else here
//                       </a>
//                     </div>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       className="nav-link"
//                       href="#"
//                       tabindex="-1"
//                       aria-disabled="true"
//                     style={{color:' #d43c18',fontSize:20}}>
//                       Media
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       className="nav-link"
//                       href="#"
//                       tabindex="-1"
//                       aria-disabled="true"
//                     style={{color:' #d43c18',fontSize:20}}>
//                       News
//                     </a>
//                   </li>
//                   <li className="nav-item dropdown">
//                     <a
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       id="navbarDropdown"
//                       role="button"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     style={{color:' #d43c18',fontSize:20}}>
//                       Donation
//                     </a>
//                     <div
//                       className="dropdown-menu headingList"
//                       aria-labelledby="navbarDropdown"
//                     >
//                       <a className="dropdown-item" href="#"style={{color:' #d43c18',fontSize:20}}>
//                         Action
//                       </a>
//                       <a className="dropdown-item" href="#"style={{color:' #d43c18',fontSize:20}}>
//                         Another action
//                       </a>
//                       <div className="dropdown-divider"></div>
//                       <a className="dropdown-item" href="#"style={{color:' #d43c18',fontSize:20}}>
//                         Something else here
//                       </a>
//                     </div>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       className="nav-link"
//                       href="#"
//                       tabindex="-1"
//                       aria-disabled="true"
//                     style={{color:' #d43c18',fontSize:20,width:200,marginLeft:-60}}>
//                       Contact Us
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </header>

<header className="container-fluid bg-transparent" style={{
  ///  width:window.scrollY<100?'85%':'101.5%',backgroundColor:this.state.navBackground,
  // position:'absolute',
  // zIndex:2,top:20,
  // marginLeft:window.scrollY < 100?0:-30
}}
  >
    <div className="container">
    <div className="row d-flex justify-content-between">
        <div className=""  >
          <div 
          className=""
         // style={{marginLeft:window.scrollY<100?0:-200}}
          >
            <a href="/">
              <img src={logo} width="220px" />
            </a>
          </div>
          {/* <div>
            <button className="donateBtn">Donate Now</button>
            <button className="donateBtn">UK Donor</button>
          </div> */}
        </div>

        <div className=" "
        // className="float-right"
        //style={{marginRight:window.scrollY < 100 ?0:50}}
      //  style={{marginLeft:window.scrollY < 100?0:-250}}
        >
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light " style={{color:' black',fontSize:20}}>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse  navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto" style={{color:' black',fontSize:20}}>
                  <li className="nav-item active" >
                    <a className="nav-link" href="/" style={{color:' black',fontSize:20}}>
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#" style={{color:' black',fontSize:20}}>
                      Link
                    </a>
                  </li> */}
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    style={{color:' black',fontSize:20}}>
                      About
                    </a>
                    <div
                      className="dropdown-menu headingList"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="chairmenmessage"style={{color:' black',fontSize:20}}>
                        Chairman Message
                      </a>
                      <a className="dropdown-item" href="#"style={{color:' black',fontSize:20}}>
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#"style={{color:' black',fontSize:20}}>
                        Something else here
                      </a>
                    </div>
                  </li> */}
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    style={{color:' black',fontSize:20}}>
                      Saylani Services / Projects
                    </a>
                 
                  </li> */}
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="services"
                      tabindex="-1"
                      aria-disabled="true"
                      
                    style={{color:' black',fontSize:'.9em'}}>
                      Services
                    </a>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    style={{color:' black',fontSize:20}}>
                      Saylani Ehsaas
                    </a>
                    <div
                      className="dropdown-menu headingList"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#"style={{color:' black',fontSize:20}}>
                        Action
                      </a>
                      <a className="dropdown-item" href="#"style={{color:' black',fontSize:20}}>
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#"style={{color:' black',fontSize:20}}>
                        Something else here
                      </a>
                    </div>
                  </li> */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    style={{color:' black',fontSize:20}}>
                      Future Project
                    </a>
                    <div
                      className="dropdown-menu headingList"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#"style={{color:' black',fontSize:20}}>
                        Action
                      </a>
                      <a className="dropdown-item" href="#"style={{color:' black',fontSize:20}}>
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#"style={{color:' black',fontSize:20}}>
                        Something else here
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    style={{color:' black',fontSize:20}}>
                      Media
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    style={{color:' black',fontSize:20}}>
                      News
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    style={{color:' black',fontSize:20,}}>
                      Contact
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                     className="nav-link"
                     href="#"
                     tabindex="-1"
                     aria-disabled="true"
                    style={{color:' white',fontSize:20,backgroundColor:'black',borderRadius:10}}>
                      Donation
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        </div>
        </div>
      </header>
    );
  }
}





