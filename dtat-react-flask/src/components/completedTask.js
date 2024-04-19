import { useState } from "react";
import { HeaderComponent } from "../HeaderComponent/headerComponent";
import "./completedTask.css"
import { Link } from "react-router-dom";


function CompletedTask() {
    const [cttabledata] = useState([{
        project: "Project A",
        sitecode: "Site 123",
        employee: "Employee 1",
        completeddate: "2024-03-28",
        linksrc: "/"
    }, {
        project: "Project B",
        sitecode: "Site 123",
        employee: "Employee 2",
        completeddate: "2024-04-12",
        linksrc: "/"
    }])
    return (
        <div className="completedtask-main-div">
            <HeaderComponent />
            <section className="completedtask-section">
                <div className="completedtask-subsection">
                    <h1>Completed task</h1>
                    <div className="completedtask-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr.no</th>
                                    <th>Project</th>
                                    <th>Site Code</th>
                                    <th>Employee</th>
                                    <th>Completed Date</th>
                                    <th>Log Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cttabledata.map((tabledata, index) => (
                                        <tr key={index + 1}>
                                            <td>{index + 1}</td>
                                            <td>{tabledata.project}</td>
                                            <td>{tabledata.sitecode}</td>
                                            <td>{tabledata.employee}</td>
                                            <td>{tabledata.completeddate}</td>
                                            <td><Link to="/">Log Details</Link></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CompletedTask;