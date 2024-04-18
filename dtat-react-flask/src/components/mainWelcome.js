import "./css/mainWelcome.css";
import { useNavigate } from "react-router-dom";

function Mainwelcome() {
  const navigate = useNavigate();
  function HandleMainwelcome() {
    navigate("/Login");
  }
  return (
    <div className="mainWelcome-div">
      <div className="mainWelcome-content">
        <h1>Welcome to Insta ICT Solutions</h1>
        <p>
          Thank for visiting. Feel free to explore and enjoy your time here.
        </p>
        <button className="mainWelcome-button" onClick={HandleMainwelcome}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Mainwelcome;
