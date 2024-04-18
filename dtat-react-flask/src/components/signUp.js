import "./css/signUp.css";
import logo from "./css/images/logo_light.png";
import avatar from "./css/images/avatar.svg";
import { useState } from "react";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [circleName, setCircleName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
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
                  <option value="Madhya Pradesh">MP (Madhya Pradesh)</option>
                  <option value="UP West">UPW (UP West)</option>
                  <option value="UP East">UPE (UP East)</option>
                  <option value="Rajasthan">RJ (Rajasthan)</option>
                  <option value="Gujarat">GUJ (Gujarat)</option>
                  <option value="Maharashtra">MH (Maharashtra)</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Rest of bengal">ROB (Rest of Bengal)</option>
                  <option value="Punjab">PNB (Punjab)</option>
                  <option value="Karnataka">KTK (Karnataka)</option>
                  <option value="Mumbai">MUM (Mumbai)</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Jharkhand">JH (Jharkhand)</option>
                  <option value="Kolkata">Kolkata(KOC)</option>
                  <option value="Himachal Pradesh">
                    Himachal Pradesh (HP)
                  </option>
                  <option value="Haryana">HR (Haryana)</option>
                  <option value="Andhra Pradesh">AP (Andhra Pradesh)</option>
                  <option value="Rest of tamil nadu">
                    ROTN (Rest of Tamil Nadu)
                  </option>
                  <option value="Kerala">KE (Kerala)</option>
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
