import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../../images/logo.png";
// import "../App.css";
import "./Home.css";
import Fade from "react-reveal/Fade";
import { Link, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class MainHeader extends React.Component {
  donatepage = () => {
    console.log("props", this.props.history);
    this.props.history.push("/donation");
  };
  render() {
    return (
      // <header className="bg-light border-bottom sticky-top">
      //   <div className="container-fluid bg-light">
      //     <div className="container">
      //       <nav class="navbar navbar-expand-lg d-flex justify-content-between navbar-light">
      //         <div>
      //           <Link class="navbar-brand" to="/">
      //             <img src={logo} width="180px" />
      //           </Link>
      //         </div>
      //         <button
      //           class="navbar-toggler"
      //           type="button"
      //           data-toggle="collapse"
      //           data-target="#navbarSupportedContent"
      //           aria-controls="navbarSupportedContent"
      //           aria-expanded="false"
      //           aria-label="Toggle navigation"
      //         >
      //           <span class="navbar-toggler-icon"></span>
      //         </button>
      //         <div>
      //           <div
      //             class="collapse navbar-collapse"
      //             id="navbarSupportedContent"
      //           >
      //             <ul class="navbar-nav mr-auto">
      //               <li className="nav-item">
      //                 <Link className="nav-link" to="/">
      //                   HOME
      //                 </Link>
      //               </li>
      //               <li className="nav-item">
      //                 <Link className="nav-link" to="/projects">
      //                   PROJECTS
      //                 </Link>
      //               </li>

      //               <li className="nav-item">
      //                 <Link
      //                   className="nav-link"
      //                   to="/media"
      //                   tabindex="-1"
      //                   aria-disabled="true"
      //                 >
      //                   MEDIA
      //                 </Link>
      //               </li>
      //               <li className="nav-item">
      //                 <Link
      //                   className="nav-link"
      //                   to="/contact"
      //                   tabindex="-1"
      //                   aria-disabled="true"
      //                 >
      //                   CONTACT
      //                 </Link>
      //               </li>
      //               <li className="nav-item">
      //                 <Link
      //                   className="nav-link"
      //                   to="/news"
      //                   tabindex="-1"
      //                   aria-disabled="true"
      //                 >
      //                   NEWS
      //                 </Link>
      //               </li>

      //               <li className="nav-item">
      //                 {/* <a
      //                   className="nav-link"
      //                   href="Donation"
      //                   tabindex="-1"
      //                   aria-disabled="true"
      //                   style={{ color: "white" }}
      //                 >
      //                   Donate
      //                 </a> */}
      //                 <button className="donate" onClick={this.donatepage}>
      //                   Donate
      //                   {/* <Link to="Donation" className="donate">
      //                     DONATE
      //                   </Link> */}
      //                 </button>
      //                 {/* <button className='donate' >Donate</button> */}
      //               </li>
      //             </ul>
      //           </div>
      //         </div>
      //       </nav>{" "}
      //     </div>
      //   </div>
      // </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to={"/create"} className="nav-link">
                Home
            </Link>
            </li>
            <li className="nav-item">
              <Link to={"/index"} className="nav-link">
                Records
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(MainHeader)
