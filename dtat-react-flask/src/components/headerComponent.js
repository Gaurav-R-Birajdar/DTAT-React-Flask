import { useState } from "react";
import "./headerComponent.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo_light.png";

export function HeaderComponent()
{
    const [displayactivity, setdisplayactivity] = useState("display-activity-hide");
    const [displayprofile, setdisplayprofile] = useState("display-profile-hide");
    function handleprofiledropdown()
    {
         if(displayprofile === "display-profile-show")
          {setdisplayprofile("display-profile-hide") ;
           setdisplayactivity("display-activity-hide")
        }
            else{setdisplayprofile("display-profile-show");
            setdisplayactivity("display-activity-hide")
        } 
    }
    function handleallocationdropdown()
    {
        if(displayactivity === "display-activity-show"){
            setdisplayprofile("display-profile-hide") ;
            setdisplayactivity("display-activity-hide")
        }else{
            setdisplayprofile("display-profile-hide") ;
            setdisplayactivity("display-activity-show")
        }
    }
    // function handledropdown()
    // {
    //     setdisplayprofile("display-profile-hide") ;
    //     setdisplayactivity("display-activity-hide")
    // }
    return(
        <header className="header">
                <div className="header-logo">
                    <img src={logo} className="header-img" alt="insta ict logo" />
                </div>
                <div className="header-right-div">
                    <div className="dropdown">
                        <button className="header-btn" onClick={handleallocationdropdown} >Activity</button>
                        <div className={displayactivity} >
                            <Link to="/taskallocation">Task Allocation</Link>
                            <Link to="/taskstatus">Task Status</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="header-btn" onClick={handleprofiledropdown} >Profile</button>
                        <div className={displayprofile}>
                            <Link to="/mydetails">My details</Link>
                            <Link to="/changepassword">Change Password</Link>
                            <Link to="/mainwelcome">Logout</Link>
                        </div>
                    </div>
                </div>
            </header>
    )
}