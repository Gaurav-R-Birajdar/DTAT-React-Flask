import "./css/signUp.css";
import logo from "./css/images/logo_light.png";
import avatar from "./css/images/avatar.svg";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [circleName, setCircleName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    if (!userName || !circleName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return; // Stop execution if any field is empty
    }

    if (password === confirmPassword) {
      axios
        .post("http://127.0.0.1:5000/register", {
          email,
          password,
          userName,
          circleName,
          confirmPassword,
        })
        .then((response) => {
          if (response.data) alert("Registration successful");
          else alert("Registration Unsuccessful");
        })
        .catch((error) => {
          console.error("Error:", error); // Log any errors
        });
    } else {
      alert("Registration unsuccessful");
    }
  };
  return (
    <div className="signUp-div">
      <header>
        <img src={logo} alt="logo" id="logo" />
      </header>
      <hr />
      <div className="signUp-form-container">
        <div className="signUp-form-header">
          <img src={avatar} alt="avatar" id="avatar" />
          <span>Sign Up</span>
        </div>
        <hr />
        <div className="signUp-form-body">
          <form onSubmit={signUp}>
            <dl>
              <dd>
                <input
                  className="signUp-input"
                  type="text"
                  placeholder="Enter your name"
                  name="Username"
                  id="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </dd>
              <dd>
                <select
                  id="circle_name"
                  name="Circlename"
                  value={circleName}
                  onChange={(e) => setCircleName(e.target.value)}
                >
                  <option value="-1">Select your Circle</option>
                  <option value="MP">MP (Madhya Pradesh)</option>
                  <option value="UPWt">UPW (UP West)</option>
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
              <dd>
                <input
                  className="signUp-input"
                  type="text"
                  placeholder="Enter your Email"
                  id="emailuser"
                  name="UserEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </dd>
              <dd>
                <input
                  className="signUp-input"
                  type="text"
                  placeholder="Enter password"
                  id="passwordtext"
                  name="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </dd>
              <dd>
                <input
                  className="signUp-input"
                  type="text"
                  placeholder="confirm password"
                  id="cnfpassword"
                  name="CnfPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </dd>
            </dl>
            <button className="signUp-button" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
