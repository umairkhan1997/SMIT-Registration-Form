import React, { useState } from "react";
import OpenForm from "../components/admin/opencourseform";
import StudentData from "../components/admin/studentdata";
import { useHistory } from "react-router-dom";

function Admin() {
  const [panel, setPanel] = useState("studentData");
  const [city, setCity] = useState(localStorage.getItem("city"));
  let history = useHistory();

  let logOut = () => {
    localStorage.setItem("city", "");
    localStorage.setItem("login", "");
    history.push("/");
  };
  return (
    <>
      <div>
        <div style={{ height: "100vh" }} className="row p-0 m-0">
          <div
            style={{ height: "100vh" }}
            className="col-md-3 backgroundDark d-flex justify-content-between flex-column"
          >
            <div className="p-5 text-white text-center">
              <h1>SMIT Admin</h1>
            </div>
            <div className="p-5">
              <ul className="sideMenu">
                <li onClick={() => setPanel("openForm")}>Course open</li>
                <li onClick={() => setPanel("studentData")}>Student Data</li>
              </ul>
            </div>
            <div className="p-5 text-center">
              <button
                className="btn btn-light btn-block rounded-pill"
                onClick={() => logOut()}
              >
                logout
              </button>
            </div>
          </div>
          <div
            style={{ height: "100vh", overflow: "scroll", overflowX: "hidden" }}
            className="col-md-9"
          >
            {panel == "openForm" ? <OpenForm /> : null}
            {panel == "studentData" ? <StudentData /> : null}
          </div>
        </div>
      </div>
    </>
  );
}
export default Admin;
