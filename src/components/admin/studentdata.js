import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { searchStdData } from "../../Redux/action/smitAction";
import { useHistory } from "react-router-dom";
import ReactToExcel from "react-html-table-to-excel";
import { smitNotificationGet } from "../../Redux/action/smitAction";


function StudentData(props) {
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");
  const [data, setData] = useState([]);
  const [checkCity, setCheckCity] = useState(localStorage.getItem('city'));
  const [city, setCity] = useState("Karachi");
  const [loading, setLoading] = useState(false);
  const [enteredRollNumber, setEnteredRollNumber] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(smitNotificationGet())
  }, [])
  const { smitNotificationGets } = useSelector(
    (state) => state.reducerSmit
  );

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

      // console.log(checkCity == "All" ? city : checkCity, course, batch)
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

      const historys = history
      axios(options).then((res) => {
        setLoading(false);
        setData(res.data.result)
        // console.log(res.data.result, 'ressssss')
      }).catch((err) => {
        setLoading(false);
        // console.log(err, 'err')
      })
    }
  };

  const searchStd = () => {
    var rollNo = enteredRollNumber.slice(8)
    alert(rollNo)
    const obj = {
      rollNo: rollNo
    }
    const options = {
      method: "POST",
      headers: {
        "Accept": "application/json"
      },
      data: obj,
      url: "https://swit-app.herokuapp.com/smit/SmitAdmissFormGetOne",
    };
    // let KR032103267
    axios(options).then((res) => {
      // setData(res.data.result)
      dispatch(searchStdData(res.data.data));
      // console.log(res, 'ressssss')
      history.push("/searchPdf");
    }).catch((err) => {
      alert('No Result Found')
      // console.log(err, 'err');
    })
  }
  const { searchStdDatas } = useSelector(
    (state) => state.reducerSmit
  );
  // const { smitNotificationGets } = this.props;
  // console.log(searchStdDatas, 'searchStdDatas')
  return (
    <div>
      <div className="container">
        <div className="row py-3">
          {
            checkCity == "All" ?
              <div className="col-md-3">
                <select onChange={(e) => {
                  setCity(e.target.value);
                  // console.log(e.target.value)
                }} className="inp">
                  {

                    [...new Set(smitNotificationGets.map((a) => a.cityName))].map((a) => { return <option>{a}</option> })
                  }
                  {/* <option>Select City</option>
                  <option>Karachi</option>
                  <option>Faisalabad</option>
                  <option>Hyderabad</option>
                  <option>Islamabad</option> */}
                </select>
              </div>
              : null
          }
          <div className="col-md-3">
            <select onChange={(e) => setCourse(e.target.value)} className="inp">
              <option>Select Course</option>
              {

                [...new Set(smitNotificationGets.map((a) => a.courseName))].map((a) => { return <option>{a}</option> })
              }
            </select>
          </div>
          <div className="col-md-3">
            <select onChange={(e) => setBatch(e.target.value)} className="inp">
              <option>Select Batch</option>
              {[...new Set(smitNotificationGets.map((a) => a.batchName))].map((a) => { return <option>{a}</option> })}
            </select>
          </div>
          <div className="col-md-3">
            {loading ? (
              <div
                className="spinner-border"
                role="status"
              >
                <span className="visually-hidden"></span>
              </div>
            ) : (
                <button type="button" class="btn btn-primary btn-lg" style={{ width: 150, height: 45, marginTop: 5 }} onClick={() => searchData()}>Search</button>
              )}
          </div>
        </div>
        <div className="d-flex" >
          <input
            className="inp"
            onChange={(e) => setEnteredRollNumber(e.target.value)}
            placeholder="Search Roll Number"
            style={{ height: 50, }}
          />
          <button className="prevbtn" style={{ width: 80, height: 50, marginLeft: 10, marginTop: 5 }} onClick={() => searchStd()} >Search</button>
        </div>
        <div>
          {data.length > 0 ? (
            <ReactToExcel
              className="btn btn-primary"
              table="studentData"
              filename="Student_data_sheet"
              sheet="sheet 1"
              buttonText="Download Excel"
            />
          ) : null}
          {city && course && batch ? (
            <table className="table" id="studentData"
              style={{
                height: "80vh",
                overflow: "scroll",
                overflowX: "scroll",
              }}>
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Father Name</th>
                  <th>Course</th>
                  <th>Batch</th>
                  <th>CNIC</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Organization Name</th>
                  <th>Position</th>
                  <th>Name Professional</th>
                  <th>laptop Available</th>
                  <th>Member Institution</th>
                  <th>Member ShipNumber</th>
                  <th>Total Experience</th>
                  <th>Area Of Experience</th>
                  <th>Rate Skills</th>
                  <th>Module</th>
                  <th>Module Price</th>
                </tr>
              </thead>
              <tbody>
                {data.length == 0 ? <tr >
                  <td>No Data</td></tr> :
                  <>
                    {data.map((e, i) => {
                      return (
                        <tr key={e.i}>
                          <td>{e.rollNo}</td>
                          <td>{e.generatedId}</td>
                          <td>{e.fullName}</td>
                          <td>{e.fatherName}</td>
                          <td>{e.courseName}</td>
                          <td>{e.batchName}</td>
                          <td>{e.cnic}</td>
                          <td>{e.ContactNumber}</td>
                          <td>{e.address}</td>
                          <td>{e.organizationName}</td>
                          <td>{e.position}</td>
                          <td>{e.nameProfessional}</td>
                          <td>{e.laptopAvailable}</td>
                          <td>{e.memberInstitution}</td>
                          <td>{e.membershipNumber}</td>
                          <td>{e.totalExperience}</td>
                          <td>{e.areaOfExperience}</td>
                          <td>{e.rateSkills}</td>
                          <td>{e.Modules}</td>
                          <td>{e.ModulePrice}</td>
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

// function mapStateToProp(state) {
//   return {
//     smitNotificationGets: state.reducerSmit.smitNotificationGets,
//   };
// }
// function mapDispatchToProp(dispatch) {
//   return {
//     // stdData: (e, a, b, c, d) => {
//     //   dispatch(stdData(e, a, b, c, d));
//     // },
//     smitNotificationGet: () => {
//       dispatch(smitNotificationGet());
//     },
//   };
// }
// export default withRouter(
//   connect(mapStateToProp, mapDispatchToProp)(StudentData)
// );
export default StudentData;
