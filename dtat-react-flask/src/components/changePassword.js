import { useState } from "react";
import "./css/changePassword.css";
import logo from "./css/images/logo_light.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();
  function HandleLogin() {
    navigate("/Login");
  }
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaGene, setCaptchaGene] = useState("");

  function generateCaptcha() {
    const captchaGene = Math.random().toString(36).substring(7);
    setCaptchaGene(captchaGene);
    document.getElementById("captchaImage").src =
      "https://via.placeholder.com/120x40?text=" + captchaGene;
  }

  function validateForm(e) {
    e.preventDefault();
    if (captchaGene === captcha) {
      axios
        .post("http://127.0.0.1:5000/change_password", {
          email,
        })
        .then((response) => {
          if (response.data) HandleLogin();
          else alert(response.data);
        })
        .catch((error) => {
          console.error("Error:", error); // Log any errors
        });
      //   sendPasswordResetEmail(auth, email)
      //     .then((data) => {
      //       alert("check your email");
      //     })
      //     .catch((err) => {
      //       alert(err.code);
      //     });
      // } else {
      //   alert("Invalid Captcha");
    }
  }

  window.onload = generateCaptcha;

  return (
    <div className="main-div-changepass">
      <div className="changepass-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="forgotpass">
        <div className="title-text">
          <p>Reset Password</p>
        </div>
        <form onSubmit={validateForm}>
          <dl>
            <dt>
              <h3>Email</h3>
            </dt>
            <dd>
              <input
                className="changepass-input"
                type="text"
                name="Email"
                id="email"
                placeholder="Enter your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </dd>
            <dt className="changepass-dt">
              <h3>Captcha</h3>
            </dt>
            <dd id="captchacontainer" className="changepass-captchacontainer">
              <img
                id="captchaImage"
                src="https://via.placeholder.com/120x40"
                alt="Captcha"
              />
            </dd>
            <dd className="changepass-Captcha">
              <input
                type="text"
                className="changepass-input"
                id="captcha"
                name="Captcha"
                placeholder="Enter the Captcha"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
              />
            </dd>
          </dl>
          <div className="buttonsdiv">
            <button className="changepass-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
        <button
          className="changepass-refresh"
          onClick={generateCaptcha}
          type="button"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
