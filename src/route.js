// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import JobBank from "./screen/JobBankScreen";

// import SMITAdmin from "./adminscreen/subadminscreen/adminsmit";
// import UploadImage from "./screen/UploadImage";
// import CourseRegistration from "./screen/courseregistration";
// import AdmitCard from "./screen/admitCard";
// import Admin from "./screen/admin";
// import Login from "./screen/login";

// export default function MyRoute() {
//   return (
//     <Router>
//       <Route path="/" exact component={CourseRegistration} />
//       {/* <Route path="/smit" component={Smit} /> */}
//       <Route path="/admitcard" component={AdmitCard} />
//       <Route path="/adminsmit" component={SMITAdmin} />
//       <Route path="/uploadImage" component={UploadImage} />
//       <Route path="/admin" component={Admin} />
//       <Route path="/login" component={Login} />
//     </Router>
//   );
// }







import React from "react";
import { useState, useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
  // useRouteMatch,
  useLocation,
} from "react-router-dom";
import JobBank from "./screen/JobBankScreen";
import SMITAdmin from "./adminscreen/subadminscreen/adminsmit";
import UploadImage from "./screen/UploadImage";
import CourseRegistration from "./screen/courseregistration";
import AdmitCard from "./screen/admitCard";
import Admin from "./screen/admin";
import Login from "./screen/login";
import DataCourseMessgeBox from './screen/dataCourseMessgeBox'
import SearchPdf from "./screen/searchPdf";

// ************* Private Route ************

function PrivateRoute({ component: Component, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('login') ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location.pathname,
                },
              }}
            />
          )
      }
    />
  );
}

// ************* Public Route ************

function PublicRoute({ component: Component, auth, ...rest }) {
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) => {
        return !localStorage.getItem('login') ? (
          <Component {...props} />
        ) : (
            <Redirect to={location.state?.from ? location.state.from : "/"} />
          );
      }}
    />
  );
}

function AppRouter() {


  return (
    <Router>
      <Switch>
        {/* <PublicRoute exact path="/" component={Login} />
        <PrivateRoute exact path="/admin" component={Admin} /> */}
        <PublicRoute exact path="/" exact component={CourseRegistration} />
        {/* <Route path="/smit" component={Smit} /> */}
        <PublicRoute path="/admitcard" component={AdmitCard} />
        <PublicRoute exact path="/message" component={DataCourseMessgeBox} />

        <PrivateRoute path="/adminsmit" component={SMITAdmin} />
        <PrivateRoute path="/uploadImage" component={UploadImage} />
        <PrivateRoute path="/searchPdf" component={SearchPdf} />
        <PrivateRoute path="/admin" component={Admin} />
        <PublicRoute path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default AppRouter;

