import { useState } from "react";
import "./myDetails.css";
import { HeaderComponent } from "../HeaderComponent/headerComponent";

function MyDetails()
{
    const[displayinput]=useState(true);
    const[profileDetails]=useState({
        role:"Admin",
        name:"Sakshi",
        vendor:"Insta-ICT Solution Private Limited",
        currentCircle:"Pune",
        email:"s@gmail.com"
    })
    return(
        <div className="mydetails-main-div">
            <HeaderComponent/>
            <section className="mydetails-section">
                <div className="mydetails-subsection">
                    <h3>
                        DETAILS
                    </h3>
                    <dl>
                        <dt><h4>Role</h4></dt>
                        <dd><input type="text" value={profileDetails.role} name="profilerole" disabled/></dd>
                        <dt><h4>Name</h4></dt>
                        <dd><input type="text" value={profileDetails.name} name="profilename" disabled={displayinput}/></dd>
                        <dt><h4>Vendor</h4></dt>
                        <dd><input type="text" value={profileDetails.vendor} name="vendor" disabled={displayinput}/></dd>
                        <dt><h4>Current Working Circle</h4></dt>
                        <dd><input type="text" value={profileDetails.currentCircle} name="currentCircle" disabled={displayinput}/></dd>
                        <dt><h4>Email</h4></dt>
                        <dd><input type="text" value={profileDetails.email} name="email" disabled={displayinput}/></dd>
                    </dl>
                </div>
            </section>
        </div>
    )
}

export default MyDetails;