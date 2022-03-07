import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login-header">
        <h1 onClick={(e) => navigate("/")}>E-COMMERCE</h1>
      </div>
      <div className="login-container">
        <h2>Sign-In</h2>
        <form className="form-container">
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login-signin-button"
            onClick={signIn}
          >
            Sign In
          </button>
          <p>
            Don't have an account? Click below to register your email in
            E-COMMERCE
          </p>
          <button className="register-button" onClick={register}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
