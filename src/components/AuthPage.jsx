import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../styles/app.css";

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-container">
      <h1>LOGO</h1>
      <h2>Welcome To CRM System</h2>
      <h3>Sign In To Your Account</h3>
      <form>
        <div className="form-group">
          <label htmlFor="login">Login:</label>
          <input type="text" id="login" name="login" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password-input"
              name="password"
              style={{ paddingRight: "40px" }}
            />
            <button
              type="button"
              className="button--password"
              id="toggle-password"
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: "35.5%",
                top: "57.8%"
              }}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>
        <button type="submit" className="button--signin">Sign In</button>
      </form>
    </div>
  );
};

export default AuthPage;
