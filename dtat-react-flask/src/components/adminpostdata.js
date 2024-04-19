import "./adminpostdata.css";
import { HeaderComponent } from "../HeaderComponent/headerComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Adminpostdata() {
    const navigate = useNavigate();
    const [disabledvalue, setdisabledvalue] = useState(true);
    const [siteid, setsiteid] = useState();
    function handlesiteid(e) {
        setsiteid(e.target.value);
    }
    function handleDropdownValues(e) {
        if (!siteid) {
            alert("enter valid site id");
            setdisabledvalue(true)
        } else {
            setdisabledvalue(false);
        }
        console.log(siteid);
    }
    function handlesubmitnavigate() {
        navigate("/taskstatus")
    }
    return (
        <div className="adminpostdata-main-div">
            <HeaderComponent />
            <section className="adminpostdata-section">
                <div className="adminpostdata-subsection">
                    <h3 className="adminpostdata-subsection-heading">Upload post Data</h3>
                    <div className="adminpostdata-dl">
                        <dl >
                            <dt><h4>Enter Site ID</h4></dt>
                            <dd><input type="text" id="siteId" name="siteId" required onKeyUp={handlesiteid} /></dd>
                            <dt><h4>Select Sector</h4></dt>
                            <dd>
                                <select id="sector" name="sector" required onChange={handleDropdownValues}>
                                    <option value="">Please select</option>
                                    <option value="sector1">sector1</option>
                                    <option value="sector2">sector2</option>
                                    <option value="sector3">sector3</option>
                                </select>
                            </dd>
                            <dt><h4>Azimuth Cell</h4></dt>
                            <dd><input type="text" id="azimuth" name="azimuth" required disabled={disabledvalue} /></dd>
                            <dt><h4>Tower Height</h4></dt>
                            <dd><input type="text" id="towerHeight" name="towerHeight" required disabled={disabledvalue} /></dd>
                            <dt><h4>Mechanical Cell</h4></dt>
                            <dd><input type="text" id="mechanicalCell" name="mechanicalCell" required disabled={disabledvalue} /></dd>
                            <dt><h4>Electrical Cell</h4></dt>
                            <dd><input type="text" id="electricalCell" name="electricalCell" required disabled={disabledvalue} /></dd>
                            <dt><h4>Pole Tilt</h4></dt>
                            <dd><input type="text" id="poleTilt" name="poleTilt" required disabled={disabledvalue} /></dd>
                            <dd><button onClick={handlesubmitnavigate}>Submit</button></dd>
                        </dl>
                    </div>

                </div>
            </section>
        </div>
    );
}
export default Adminpostdata;