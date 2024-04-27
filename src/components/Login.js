// Import necessary modules and styles
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/login.css';
import court from '../assets/images/court.png';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase-config';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Define the Login component
const Login = () => {
  // State variables to manage form inputs and errors
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('advocate'); // Default role is advocate

  // Navigation hook to redirect users
  const navigate = useNavigate();

  // Context to access authentication state and actions
  const { dispatch } = useContext(AuthContext);

  // Function to handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });

        // Redirect user based on selected role
        if (role === 'advocate') {
          navigate('/advocate-dashboard');
        } else if (role === 'judge') {
          navigate('/judge-dashboard');
        } else if (role === 'admin') {
          navigate('/admin-dashboard');
        }
      })
      .catch((error) => {
        setError(true);
      });
  };

  // Render the login form
  return (
    <div className="login-container">
      <div className="login-left">
        <img src={court} alt="Login" className="login-image" />
      </div>
      <div className="login-right">
        <h2>Login here!</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Select dropdown to choose role */}
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="advocate">Advocate</option>
            <option value="judge">Judge</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Login</button>
          {error && <span>Wrong email or password!</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
