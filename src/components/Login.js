// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/login.css';
import court from '../assets/images/court.png';

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic
    // For simplicity, let's assume successful login
    // Determine user role based on some authentication logic
    const userRole = determineUserRole(); // You need to implement this function
    if (userRole === 'advocate') {
      navigate('/advocate-dashboard');
    } else if (userRole === 'judge') {
      navigate('/judge-dashboard');
    } else {
      // Handle invalid user role or authentication failure
      // For now, redirect to the home page
      navigate('/home');
    }
  };

  const determineUserRole = () => {
    // Implement your logic to determine the user's role based on authentication
    // For now, let's assume user is an advocate
    return 'advocate';
  };

  const toggleUnderline = () => {
    const link = document.getElementById('forgotPasswordLink');
    link.classList.toggle('underline-link');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={court} alt="Login" className="login-image" />
      </div>
      <div className="login-right">
        <h2>Login here!</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userId">User ID:</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe" className="remember-label">
              Remember me
            </label>
          </div>
          <div className="form-group">
            <p>
              <a href="#" id="forgotPasswordLink" onClick={toggleUnderline}>
                Forgot password?
              </a>
            </p>
          </div>
          <div className="form-group">
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
