import React, { useState, useEffect, useRef } from "react";
import masajid from "../../images/masajid.jpg";
import MainHeader from "../../components/Home/MainHeader";
import Footer from "../../components/Footer";
import { connect, useDispatch, useSelector } from "react-redux";
import { onlineMasajidForm } from "../../Redux/action/homeAction";

function OnlineM(props) {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [stdName, setstdName] = useState("");
  const [fthName, setfthName] = useState("");
  const [stnAge, setstnAge] = useState("");
  const [stnDob, setstnDob] = useState("");
  const [stnGen, setstnGen] = useState("Male");
  const [stnCour, setstnCour] = useState("Ilm-o-Fahm-e-Deen Course");
  const [stnEmail, setstnEmail] = useState("");
  const [stnSkype, setstnSkype] = useState("");
  const [stnNumber, setstnNumber] = useState("");
  const [stnWtsApp, setstnWtsApp] = useState("");
  const [showAlt, setshowAlt] = useState(false);
  const dispatch = useDispatch();

  const reduxActions = {
    onlineMasajidForm: (u) => dispatch(onlineMasajidForm(u)),
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
    //handleSubmitFile(e);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      setErrMsg("something went wrong!");
    };
  };
  const timerToClearSomewhere = useRef(null);

  const uploadImage = async (base64EncodedImage) => {
    const obj = {
      stdName,
      fthName,
      stnAge,
      stnDob,
      stnGen,
      stnCour,
      stnEmail,
      stnSkype,
      stnNumber,
      stnWtsApp,
      stnImgUrl: base64EncodedImage,
    };
    reduxActions.onlineMasajidForm(obj);
    setshowAlt(true);
    setstdName(" ");
    setfthName("");
    setstnAge("");
    setstnDob("");
    setstnGen("");
    setstnCour("");
    setstnEmail("");
    setstnSkype("");
    setstnNumber("");
    setstnWtsApp("");
    setPreviewSource("");
  };

  useEffect(() => {
    timerToClearSomewhere.current = setInterval(() => setshowAlt(false), 3000);
    return () => {
      clearInterval(timerToClearSomewhere.current);
    };
  }, [showAlt]);

  const styles = {
    color: "#1371b8",
    fontSize: 18,
  };
  return (
    <div>
      <MainHeader />
      <div className="back" style={{ backgroundImage: `url(${masajid})` }}>
        <div style={{ backgroundColor: "rgba(0,0,0,.5)", padding: 80 }}>
          <h1 className="text-white p-3 text-center">
            Online Masajid Registeration
          </h1>
        </div>
      </div>

      <div>
        <div className="flex-wrap d-flex justify-content-center">
          <div className="col-md-5 pt-3">
            <label
              for="maleName"
              className="inpLab font-weight-bold"
              style={styles}
            >
              Student Name
            </label>
            <input
              id="maleName"
              className="inp"
              placeholder="Enter Full Name"
              value={stdName}
              onChange={(e) => setstdName(e.target.value)}
            />
          </div>
          <div className="col-md-5 pt-3">
            <label
              for="maleName"
              className="inpLab font-weight-bold"
              style={styles}
            >
              Father Name
            </label>
            <input
              id="maleName"
              className="inp"
              placeholder="Enter Father Name"
              value={fthName}
              onChange={(e) => setfthName(e.target.value)}
            />
          </div>
          <div className="col-md-5 pt-3 pb-3">
            <label
              for="maleName"
              className="inpLab font-weight-bold"
              style={styles}
            >
              Age
            </label>
            <input
              id="maleName"
              className="inp"
              placeholder="Enter Age"
              type="number"
              value={stnAge}
              onChange={(e) => setstnAge(e.target.value)}
            />
          </div>
          <div className="col-md-5 pt-3 pb-3">
            <label
              for="maleName"
              className="inpLab font-weight-bold"
              style={styles}
            >
              Date of Birth
            </label>
            <input
              id="maleName"
              className="inp"
              type="date"
              value={stnDob}
              onChange={(e) => {
                setstnDob(e.target.value);
              }}
            />
          </div>
          <div className="col-md-5 ">
            <label className="inpLab font-weight-bold" style={styles}>
              Gender
            </label>
            <select className="inp" onChange={(e) => setstnGen(e.target.value)}>
              <option selected value="Male">
                Male
              </option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="col-md-5 ">
            <label className="inpLab font-weight-bold" style={styles}>
              Select Course
            </label>
            <select
              className="inp"
              onChange={(e) => setstnCour(e.target.value)}
            >
              <option>Ilm-o-Fahm-e-Deen Course</option>
            </select>
          </div>

          <div className="col-md-5 pt-3">
            <label
              for="maleName"
              className="inpLab font-weight-bold"
              style={styles}
            >
              Email
            </label>
            <input
              id="maleName"
              className="inp"
              placeholder="Email"
              type="email"
              value={stnEmail}
              onChange={(e) => setstnEmail(e.target.value)}
            />
          </div>
          <div className="col-md-5 pt-3">
            <label
              for="maleName"
              className="inpLab font-weight-bold"
              style={styles}
            >
              Skype ID
            </label>
            <input
              id="maleName"
              className="inp"
              placeholder="Skype ID"
              value={stnSkype}
              onChange={(e) => setstnSkype(e.target.value)}
            />
          </div>
          <div className="col-md-5 pt-3">
            <label
              for="maleName"
              className="inpLab font-weight-bold"
              style={styles}
            >
              Cell Number
            </label>
            <input
              id="maleName"
              className="inp"
              placeholder="03**-*******"
              value={stnNumber}
              onChange={(e) => setstnNumber(e.target.value)}
            />
          </div>

          <div className="col-md-5 pt-3">
            <label
              for="maleName"
              className="inpLab font-weight-bold"
              style={styles}
            >
              WhatsApp Number
            </label>
            <input
              id="maleName"
              className="inp"
              placeholder="03**-*******"
              value={stnWtsApp}
              onChange={(e) => setstnWtsApp(e.target.value)}
            />
          </div>
          <div className="col-md-10 pt-3">
            <label
              for="maleName"
              className="inpLab font-weight-bold"
              style={styles}
            >
              Upload your recent Image (face without glasses and with a
              single-colored background)
            </label>
            <input
              type="file"
              className="inp"
              placeholder="image"
              onChange={handleFileInputChange}
              value={fileInputState}
            />
          </div>
          <div className="container text-center">
            {previewSource && (
              <img
                className="col-md-3 pt-3"
                src={previewSource}
                alt="chosen"
                style={{ height: "300px" }}
              />
            )}
          </div>
          <div className="col-md-5 pt-3 mb-5 mt-3">
            <button
              className="btn btn-block btn-primary "
              onClick={handleSubmitFile}
            >
              Submit
            </button>
          </div>
          <div className="col-md-12"></div>
          {showAlt ? (
            <div class="alert alert-primary" role="alert">
              Your Form Is Successfully Submitted!
            </div>
          ) : null}
        </div>
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    onlineMasajidFormss: state.root.onlineMasajidForms,
  };
};

export default connect(mapStateToProps, null)(OnlineM);
