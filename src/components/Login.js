import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="container">
      <div className="black-portion">
        <h1>Board.</h1>
      </div>
      <div className="form-container">
        <h2>Sign in</h2>
        <h5>Sign in to your account</h5>
        <div className="form-box">
          <div className="input-container">
            <form onSubmit={handleSubmit} className="form">
              <label>
                Email:
                <input type="email" name="email" value={email} onChange={handleEmailChange} required />
              </label>
              <br />
              <label>
                Password:
                <input type="password" name="password" value={password} onChange={handlePasswordChange} required />
              </label>
              <br />
              <input type="submit" value="Sign In" />
            </form>
          </div>
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
