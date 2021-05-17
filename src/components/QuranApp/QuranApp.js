import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./QuranApp.css";
import MainHeader from "../Home/MainHeader";
import Footer from "../Footer";
import { withRouter } from "react-router-dom";
import imgOne from "../../images/apptafseer.jpeg";
import { QuranAppAndroidGet, QuranAppIosGet } from '../../Redux/action/QuranApp';
import { connect } from "react-redux";
import Navbar from "../../smallcomponents/navbar";
class QuranApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.QuranAppAndroidGet();
    this.props.QuranAppIosGet()
  }

  render() {
    return (
      <div>
        <MainHeader />
        <Navbar />
        <div style={{ backgroundImage: `url(${imgOne})` }} className="back">
          <div style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
            <div className="container py-5">
              <h1 className="py-3 text-white text-center">Online Quran Pak Tafteesh</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <h3 className="head"><b><u>QURAN APPLICATION SOP</u></b></h3>
          <p className="para text-muted font-weight-bold">
            Quran Application Many organisations and individuals have uploaded
            whole Quran on Play Store and Apple Store. Many download and recite
            the same. Errors and omissions have been noted. These errors and
            omissions are not detected by ordinary persons. The recitation is
            intentionally not done correctly. For correct recitation we have
            started verifying Quranic version available on Play Store and Apple
            Store. For this purpose we have emplyed HUFFAZ (WHO HAVE MEMORIZED
            WHOLE QURAN). One can see the list of Quran verified with status,
            whether with errors or without errors. We request you to please
            download only Quran verified and found without errors.
          </p>
          <h3 className="head pb-3"><b><u>QURAN APPLICATION ESAAL-E-SAWAB</u></b></h3>
          <p className="para text-muted font-weight-bold">
            Quran Esaal-e-Sawab Saylani has employed Quran Huffaz to verify
            correctness of QURAN uploaded on mobile. Every Hafiz completes
            Recitation of whole Quran in one week. Esal e Sawab of These will be
            done to Marhumeens (dead) of donors. We Have decided that donors
            should donate Rs (15,000) or its multiple. For this donation esal e
            Sawab of 4 Quran will be done. Co operation in this regard will be
            appreciated. The donation Will provide financial support to needy
            Huffaz besides Sawab BY Allah.
          </p>

          <h3 className="head pb-3"><b><u>ANDROID</u></b></h3>

          <table
            className="text-left mt-5 mb-5 table-responsive-sm"
            width="100%"
          >
            <thead className="tableHead">
              <tr >
                <th className="text-light">Logo</th>
                <th className="text-light">App Name</th>
                <th className="text-light">Publisher</th>
                <th className="text-light">Current Version</th>
                <th className="text-light">Completed Date</th>
                <th className="text-light">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.QuranAppAndroidGets && this.props.QuranAppAndroidGets.map((item, i) => {
                return (
                  <tr className="tableList">
                    <td>
                      <img src={item.logo} width="30px" height="30px" />
                    </td>
                    <td>{item.appName}</td>
                    <td>{item.publisher}</td>
                    <td>{item.curVer}</td>
                    <td>{item.compDate}</td>
                    <td>{item.status}</td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
          <h3 className="head pb-3"><b><u>IOS</u></b></h3>

          <table
            className="text-left mt-5 mb-5 table-responsive-sm"
            width="100%"
          >
            <thead className="tableHead">
              <tr>
                <th className="text-light">Logo</th>
                <th className="text-light">App Name</th>
                <th className="text-light">Publisher</th>
                <th className="text-light">Current Version</th>
                <th className="text-light">Completed Date</th>
                <th className="text-light">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.QuranAppIosGets && this.props.QuranAppIosGets.map((item, i) => {
                return (
                  <tr className="tableList">
                    <td>
                      <img src={item.logo} width="30px" height="30px" />
                    </td>
                    <td>{item.appName}</td>
                    <td>{item.publisher}</td>
                    <td>{item.curVer}</td>
                    <td>{item.compDate}</td>
                    <td>{item.status}</td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    QuranAppAndroidGets: state.reducerQuranApp.QuranAppAndroidGets,
    QuranAppIosGets: state.reducerQuranApp.QuranAppIosGets
  };
}
function mapDispatchToProp(dispatch) {
  return {
    QuranAppAndroidGet: () => {
      dispatch(QuranAppAndroidGet());
    },
    QuranAppIosGet: () => {
      dispatch(QuranAppIosGet());
    },
  };
}
export default withRouter(connect(mapStateToProp, mapDispatchToProp)(QuranApp));
