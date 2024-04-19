import "./auditDetails.css"
import logo from "../../images/logo_light.png";
import { useState } from "react";


function AuditDetails()
{
    const[auditdetailstable]=useState([{
        siteid:"1234",
        sector:"sector1234",
        technology:"tech",
        field:"field",
        status:"Done"
    }])
    return(
        <div className="auditdetails-main-div">
             <header className="auditdetails-header">
                <div className="auditdetails-header-logo">
                    <img src={logo} alt="insta-ict-logo" id="auditdetails-logo"/>
                </div>
                <div className="auditdetails-header-heading">
                    <h1>Audit details</h1>
                </div>
                <div className="auditdetails-header-rightdiv">
                    <button id="auditdetails-header-button">X</button>
                </div>
            </header>
            <section className="auditdetails-section">
                <div className="auditdetails-subsection">
                    <table className="auditdetails-table">
                        <thead>
                            <tr>
                                <th>Site id</th>
                                <th>Sector</th>
                                <th>Technology</th>
                                <th>Field</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                auditdetailstable.map((tabledata,index)=>(
                                    <tr key={index+1}>
                                        <td>{tabledata.siteid}</td>
                                        <td>{tabledata.sector}</td>
                                        <td>{tabledata.technology}</td>
                                        <td>{tabledata.field}</td>
                                        <td>{tabledata.status}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default AuditDetails;