import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
function StudentData() {
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");
  const [data, setData] = useState([]);
  const [checkCity, setCheckCity] = useState(localStorage.getItem('city'));
  const [city, setCity] = useState("Karachi");
  const [loading, setLoading] = useState(false);

  let searchData = () => {
    setLoading(true);
    if (batch == "") {
      setLoading(false);
      alert('Select Batch Name');
    }
    else if (course == "") {
      setLoading(false);
      alert('Select Course Name')
    }
    else if (city == "") {
      setLoading(false);
      alert('Select City Name')
    }
    else {
      setLoading(false);
      console.log(checkCity == "All" ? city : checkCity, course, batch)
      const obj = {
        city: checkCity == "All" ? city : checkCity,
        course: course,
        batchName: batch
      }
      const options = {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        data: obj,
        url: "https://swit-app.herokuapp.com/smit/smitAdmissfindData",
      };
      axios(options).then((res) => {
        setData(res.data.result)
        console.log(res.data.result, 'ressssss')
      }).catch((err) => {
        console.log(err, 'err')
      })
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row py-3">
          {
            checkCity == "All" ?
              <div className="col-md-3">
                <select onChange={(e) => {
                  setCity(e.target.value);
                  console.log(e.target.value)
                }} className="inp">
                  <option>Select City</option>
                  <option>Karachi</option>
                  <option>Faisalabad</option>
                  <option>Hyderabad</option>
                  <option>Islamabad</option>
                </select>
              </div>
              : null
          }
          <div className="col-md-3">
            <select onChange={(e) => setCourse(e.target.value)} className="inp">
              <option>Select Course</option>
              <option>Web and Mobile</option>
              <option>Graphic Designing</option>
            </select>
          </div>
          <div className="col-md-3">
            <select onChange={(e) => setBatch(e.target.value)} className="inp">
              <option>Select Batch</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
            </select>
          </div>
          <div className="col-md-3">
            <button type="button" class="btn btn-primary btn-lg" style={{ width: 150, height: 45, marginTop: 5 }} onClick={() => searchData()}>Search</button>
          </div>
        </div>
        <div>
          {city && course && batch ? (
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Father Name</th>
                  <th>Course</th>
                  <th>Batch</th>
                  <th>CNIC</th>
                  <th>Contact</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {data.length == 0 ? <p>No Data</p> :
                  <>
                    {data.map((e, i) => {
                      return (
                        <tr key={e.i}>
                          <td>{e.generatedId}</td>
                          <td>{e.fullName}</td>
                          <td>{e.fatherName}</td>
                          <td>{e.courseName}</td>
                          <td>{e.batchName}</td>
                          <td>{e.cnic}</td>
                          <td>{e.ContactNumber}</td>
                          <td>{e.address}</td>
                        </tr>
                      );
                    }
                    )}
                  </>
                }
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default StudentData;
