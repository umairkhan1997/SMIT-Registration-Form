import React, { useState } from "react";

function OpenForm() {
  const [cityList, setCityList] = useState([
    {
      city: "karachi",
      code: "KHI",
    },
    {
      city: "Faisalabad",
      code: "FSD",
    },
    {
      city: "Islamabad",
      code: "ISL",
    },
    {
      city: "Hyderabad",
      code: "HYD",
    },
  ]);
  const [courseList, setCourseList] = useState([
    {
      course: "Web And Mobile",
      code: "001",
    },
    {
      course: "Graphic Designing",
      code: "002",
    },
    {
      course: "Video Editing",
      code: "003",
    },
    {
      course: "CCNA",
      code: "004",
    },
    {
      course: "CCNA Security",
      code: "005",
    },
    {
      course: "Network Essential",
      code: "006",
    },
    {
      course: "Microsoft Office Specialist",
      code: "007",
    },
    {
      course: "CCA",
      code: "008",
    },
    {
      course: "CCO",
      code: "009",
    },
    {
      course: "Artificial Intellegence",
      code: "010",
    },
    {
      course: "Cloud Native",
      code: "011",
    },
    {
      course: "Internet of things",
      code: "012",
    },
    {
      course: "Blockchain technology",
      code: "013",
    },
    {
      course: "Advance Dashboard",
      code: "014",
    },
    {
      course: "Digital Marketing",
      code: "015",
    },
    {
      course: "Robotics",
      code: "016",
    },
    {
      course: "Database Administration",
      code: "017",
    },
    {
      course: "Bike repairing",
      code: "018",
    },
    {
      course: "Mobile Repairing",
      code: "019",
    },
    {
      course: "RO Plant",
      code: "020",
    },
    {
      course: "Textile Training",
      code: "021",
    },
  ]);
  const [searchText, setSearchText] = useState("");
  const [searchItem, setSearchItem] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");

  let searchCourse = (e) => {
    setSearchText(e.target.value);
    const result = courseList.filter((course) =>
      course.course.toLowerCase().includes(searchText.toLowerCase())
    );
    // setSearchItem(result);
    !searchText ? setSearchItem([]) : setSearchItem(result);
  };
  console.log(searchItem);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 py-3">
          <select className="inp">
            <option>Select City</option>
            {cityList.map((e) => {
              return <option key={e.code}>{e.city}</option>;
            })}
          </select>
        </div>
        <div className="col-md-8 py-3">
          <select className="inp">
            <option>Select Course</option>
            {courseList.map((e) => {
              return <option key={e.code}>{e.course}</option>;
            })}
          </select>
        </div>
        <div className="col-md-8 py-3">
          <input
            type="number"
            className="inp"
            placeholder="Enter Batch Number"
          />
        </div>
        <div className="col-md-8 py-3">
          <p>Last Date of Admission</p>
          <input type="date" className="inp" placeholder="Enter Batch Number" />
        </div>
        <div className="col-md-8 py-3">
          <p>Course Duration</p>
          <div className="row">
            <div className="col-md-6">
              <select className="inp">
                <option>Select Month</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            <div className="col-md-6">
              <select className="inp">
                <option>Select Year</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-8 py-3">
          <label className="selectLabel">
            <span className="backgroundLight p-2">
              <input type="radio" name="viewForm" />
            </span>
            <span className="p-2">Open Registration</span>
          </label>
          <label className="selectLabel">
            <span className="backgroundLight  p-2">
              <input type="radio" name="viewForm" />
            </span>
            <span className="p-2">Close Registration</span>
          </label>
        </div>
      </div>
    </div>
  );
}
export default OpenForm;
