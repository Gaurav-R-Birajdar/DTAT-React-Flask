import "./css/taskAllocation.css";
import logo from "./css/images/logo_light.png";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function TaskAllocation() {
  const [tablevisibility, settablevisibility] = useState("hidetable");
  const [tablehead] = useState([
    "Sr. No.",
    "Project",
    "Employee Name",
    "Site Code",
    "Latitude",
    "Longitude",
    "Allocated Date",
    "Action",
  ]);
  const [projname, setProjname] = useState("");
  const [empList, setEmpList] = useState([]);
  const [selectedEmp, setSelectedEmp] = useState("");
  const [employees, setEmployees] = useState([]); // State to store employee names
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      if (location.state && location.state.projectName) {
        setProjname(location.state.projectName);
        const circle = location.state.circle;
        axios
          .post("http://127.0.0.1:5000/fetchEmployee", { circle })
          .then((response) => {
            if (response.data.success)
              setEmployees(response.data.employeesSent);
            else alert("Error fetching employees in list circle");
          });
      } else {
        console.error("Project name or circle not found in location state.");
      }
    }
    fetchData();
  }, [location.state]);

  function handletablesubmit() {
    if (selectedEmp) {
      setEmpList([...empList, selectedEmp]);
      settablevisibility("");
      console.log(selectedEmp);
    }
  }

  function handleAllocated() {
    const siteCodeInput = document.getElementById("site-code");
    const latitudeInput = document.getElementById("latitude");
    const longitudeInput = document.getElementById("longitude");
    const allocatedDateInput = document.getElementById("allocated-date");

    const siteCode = siteCodeInput.value.trim();
    const latitude = latitudeInput.value.trim();
    const longitude = longitudeInput.value.trim();
    const allocatedDate = allocatedDateInput.value.trim();

    // Validation
    const siteCodeRegex = /^[A-Z0-9]+$/; // Uppercase alphabets and numerical values only
    const Regex = /^[0-9NWES]+$/; // Alphabets, numerical values

    if (!siteCode || !latitude || !longitude || !allocatedDate) {
      alert("All fields are required.");
      return;
    }

    if (!siteCodeRegex.test(siteCode)) {
      alert(
        "Site Code can only have uppercase alphabets and numerical values."
      );
      return;
    }

    if (!Regex.test(latitude)) {
      alert("Latitude can only have alphabets, numerical values, and dot.");
      return;
    }

    if (!Regex.test(longitude)) {
      alert("Longitude can only have alphabets, numerical values, and dot.");
      return;
    }

    // Store values in variables or perform further actions
    // For example:
    // const siteCodeValue = siteCode;
    // const latitudeValue = latitude;
    // const longitudeValue = longitude;
    // const allocatedDateValue = allocatedDate;

    // const taskStatus = taskAllocate(
    //   siteCodeValue,
    //   latitudeValue,
    //   longitudeValue,
    //   allocatedDateValue,
    //   selectedEmp
    // );
    // if (taskStatus) alert(`Task Allocated to ${selectedEmp}`);
    // else alert("Failed to assign task");

    // Proceed with further actions if validations pass
  }

  function handlesubmitnavigate() {
    navigate("/adminpredata");
  }

  function handleCancel(index) {
    const updatedEmpList = [...empList];
    updatedEmpList.splice(index, 1);
    setEmpList(updatedEmpList);
  }

  return (
    <div className="projectmanagement-main-div">
      <header className="projectmanagement-header">
        <img src={logo} alt="logo" id="logo2" />
        <h1>Task Allocation</h1>
      </header>
      <div className="projectmanagement-box-div">
        <dl>
          <dt>
            <h3 className="h3-taskAllocation">Project Name</h3>
          </dt>
          <dd>
            <input
              type="text"
              id="project-name"
              className="projectName-taskAllocation"
              value={projname}
              placeholder="project name"
              disabled
            />
          </dd>
          <dt>
            <h3 className="h3-taskAllocation">Employee</h3>
          </dt>
          <dd>
            <select
              id="employee"
              name="employee"
              value={selectedEmp}
              onChange={(e) => {
                setSelectedEmp(e.target.value);
              }}
            >
              <option className="employee-taskAllocation" value="">
                --select employee--
              </option>
              {employees.map((employee, index) => (
                <option key={index} value={employee}>
                  {employee}
                </option>
              ))}
            </select>
          </dd>
          <dd>
            <button id="box-submit" onClick={handletablesubmit}>
              Submit
            </button>
          </dd>
        </dl>
      </div>
      <div className="projectmanagement-table-container" id={tablevisibility}>
        <table id="allocation-table">
          <thead>
            <tr>
              {tablehead.map((title, index) => {
                return <th key={index}>{title}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {empList.map((emp, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{projname}</td>
                <td>{emp}</td>
                <td>
                  <input type="text" id="site-code" className="table-input" />
                </td>
                <td>
                  <input type="text" id="latitude" className="table-input" />
                </td>
                <td>
                  <input type="text" id="longitude" className="table-input" />
                </td>
                <td>
                  <input
                    type="date"
                    id="allocated-date"
                    className="table-input"
                  />
                </td>
                <td>
                  <button className="table-btn" onClick={handleAllocated}>
                    Allocate
                  </button>
                  <button
                    className="table-btn"
                    onClick={() => handleCancel(index)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="table-submit-button">
          <button type="submit" id="submit1" onClick={handlesubmitnavigate}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskAllocation;
