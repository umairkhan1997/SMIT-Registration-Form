import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JobBank from "./screen/JobBankScreen";

import SMITAdmin from "./adminscreen/subadminscreen/adminsmit";
import UploadImage from "./screen/UploadImage";
import CourseRegistration from "./screen/courseregistration";
import AdmitCard from "./screen/admitCard";


export default function MyRoute() {
  return (
    <Router>
      <Route path="/" exact component={CourseRegistration} />
      {/* <Route path="/smit" component={Smit} /> */}
      <Route path="/admitcard" component={AdmitCard} />
      <Route path="/adminsmit" component={SMITAdmin} />
      <Route path="/uploadImage" component={UploadImage} />
    </Router>
  );
}
