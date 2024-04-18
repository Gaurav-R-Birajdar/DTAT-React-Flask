import "./css/projectSelection.css";
import logo from "./css/images/logo_light.png";
import { createContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const ProjectnameContext = createContext();

function ProjectSelection() {
  const navigate = useNavigate();
  const [displayactivity, setdisplayactivity] = useState(
    "display-activity-hide"
  );
  const [displayprofile, setdisplayprofile] = useState("display-profile-hide");
  const [dropdownvalues, setdropdownvalues] = useState({
    project: "-1",
    operator: "-1",
    activity: "-1",
    value: "-1",
    circle: "-1", // Added circle state
  });
  const [displayvalue, setdisplayvalue] = useState("hidevalue");
  const [error, setError] = useState(false);

  function handleprofiledropdown() {
    setdisplayprofile((prevState) =>
      prevState === "display-profile-show"
        ? "display-profile-hide"
        : "display-profile-show"
    );
    setdisplayactivity("display-activity-hide");
  }

  function handleallocationdropdown() {
    setdisplayactivity((prevState) =>
      prevState === "display-activity-show"
        ? "display-activity-hide"
        : "display-activity-show"
    );
    setdisplayprofile("display-profile-hide");
  }

  function handleprojectchange(e) {
    setdropdownvalues({
      ...dropdownvalues,
      project: e.target.value,
    });
  }

  function handleoperatorchange(e) {
    setdropdownvalues({
      ...dropdownvalues,
      operator: e.target.value,
    });
  }

  function handleactivitychange(e) {
    setdropdownvalues({
      ...dropdownvalues,
      activity: e.target.value,
    });
    if (
      e.target.value === "5G SCFT/SSV" &&
      (dropdownvalues.project === "Ericssion" ||
        dropdownvalues.project === "Nokia") &&
      dropdownvalues.operator === "Jio"
    ) {
      setdisplayvalue("showvalue");
    } else {
      setdisplayvalue("hidevalue");
    }
  }

  function handlevaluedropdownchange(e) {
    setdropdownvalues({
      ...dropdownvalues,
      value: e.target.value,
    });
  }

  function handleCircleChange(e) {
    setdropdownvalues({
      ...dropdownvalues,
      circle: e.target.value,
    });
  }

  function handleredirect() {
    if (
      dropdownvalues.project !== "-1" &&
      dropdownvalues.operator !== "-1" &&
      dropdownvalues.activity !== "-1" &&
      dropdownvalues.circle !== "-1" // Check if circle is selected
    ) {
      setError(false);
      navigate("/taskAllocation", {
        state: {
          projectName: dropdownvalues.project,
          circle: dropdownvalues.circle, // Pass circle value as well
        },
      });
    } else {
      setError(true);
    }
  }

  return (
    <div className="projectsel-Main-div">
      <header className="projectsel-header">
        <div className="projectsel-header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="projectsel-header-title">
          <h1>Project Selection</h1>
        </div>
        <div className="projectsel-header-right-div">
          <div className="projectsel-dropdown">
            <button
              className="projectsel-header-btn"
              onClick={handleallocationdropdown}
            >
              Activity
            </button>
            <div className={displayactivity}>
              <Link to="/taskallocation">Task Allocation</Link>
              <Link to="/taskstatus">Task Status</Link>
            </div>
          </div>
          <div className="projectsel-dropdown">
            <button
              className="projectsel-header-btn"
              onClick={handleprofiledropdown}
            >
              Profile
            </button>
            <div className={displayprofile}>
              <Link to="/">My details</Link>
              <Link to="/changepassword">Change Password</Link>
              <Link to="/mainwelcome">Logout</Link>
            </div>
          </div>
        </div>
      </header>
      <div className="projectsel-body-div">
        <div className="box">
          <dl>
            <dt>
              <h3>Select Project</h3>
            </dt>
            <dd>
              <select name="project" onChange={handleprojectchange}>
                <option value="-1">--select project--</option>
                <option value="Ericssion">Ericssion</option>
                <option value="Nokia">Nokia</option>
                <option value="VIL">VIL</option>
              </select>
            </dd>
            <dt>
              <h3>Select Operator</h3>
            </dt>
            <dd>
              <select name="operator" onChange={handleoperatorchange}>
                <option value="-1">--select operator--</option>
                <option value="Bharti">Bharti</option>
                <option value="Airtel">Airtel</option>
                <option value="Jio">JIO</option>
                <option value="VIL">VIL</option>
              </select>
            </dd>
            <dt>
              <h3>Select Circle</h3>
            </dt>
            <dd>
              <select id="project" name="circle" onChange={handleCircleChange}>
                <option value="-1">--select circle--</option>
                <option value="MP">MP (Madhya Pradesh)</option>
                <option value="UPW">UPW (UP West)</option>
                <option value="UPE">UPE (UP East)</option>
                <option value="RJ">RJ (Rajasthan)</option>
                <option value="GUJ">GUJ (Gujarat)</option>
                <option value="MH">MH (Maharashtra)</option>
                <option value="Bihar">Bihar</option>
                <option value="ROB">ROB (Rest of Bengal)</option>
                <option value="PNB">PNB (Punjab)</option>
                <option value="KTK">KTK (Karnataka)</option>
                <option value="MUM">MUM (Mumbai)</option>
                <option value="Chennai">Chennai</option>
                <option value="JH">JH (Jharkhand)</option>
                <option value="KOC">Kolkata(KOC)</option>
                <option value="HP">Himachal Pradesh (HP)</option>
                <option value="HR">HR (Haryana)</option>
                <option value="AP">AP (Andhra Pradesh)</option>
                <option value="ROTN">ROTN (Rest of Tamil Nadu)</option>
                <option value="KE">KE (Kerala)</option>
              </select>
            </dd>
            <dt>
              <h3>Activity</h3>
            </dt>
            <dd>
              <select name="Activity" onChange={handleactivitychange}>
                <option value="-1">--select activity--</option>
                <option value="4G Cluster">4G Cluster</option>
                <option value="4G SCFT">4G SCFT</option>
                <option value="5G Cluster">5G Cluster</option>
                <option value="5G SCFT/SSV">5G SCFT/SSV</option>
              </select>
            </dd>
            {displayvalue === "showvalue" && (
              <dd>
                <select
                  className="projectsel-number-option"
                  name="valuedropdown"
                  onChange={handlevaluedropdownchange}
                >
                  <select name="Select Value"></select>
                  <option value="-1">--select value--</option>
                  <option value="700">700</option>
                  <option value="3500">3500</option>
                </select>
              </dd>
            )}
            <dd>
              <button
                type="button"
                className="projectsel-button"
                onClick={handleredirect}
              >
                Submit
              </button>
            </dd>
            {error && (
              <dd>
                <p className="error-message">
                  Please select all values before submitting.
                </p>
              </dd>
            )}
          </dl>
        </div>
      </div>
      <ProjectnameContext.Provider
        value={dropdownvalues.project}
      ></ProjectnameContext.Provider>
    </div>
  );
}

export default ProjectSelection;
