// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/login.css';
import court from '../assets/images/court.png';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase-config';
import { useContext } from "react";
import {AuthContext} from "../context/AuthContext";

const Login = () => {
  
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navitage = useNavigate();

  const {dispatch} = useContext(AuthContext)
  // const [email, setUserId] = useState('');
  // const [password, setPassword] = useState('');
  // const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navitage("/advocate-dashboard")
      })
      .catch((error) => {
        setError(true);
      });
  };

  
    // Here you can add your login logic
    // For simplicity, let's assume successful login
    // Determine user role based on some authentication logic
  //   const userRole = determineUserRole(); // You need to implement this function
  //   if (userRole === 'advocate') {
  //     navigate('/advocate-dashboard');
  //   } else if (userRole === 'judge') {
  //     navigate('/judge-dashboard');
  //   } else {
  //     // Handle invalid user role or authentication failure
  //     // For now, redirect to the home page
  //     navigate('/home');
  //   }
  // };

  // const determineUserRole = () => {
  //   // Implement your logic to determine the user's role based on authentication
  //   // For now, let's assume user is an advocate
  //   return 'advocate';
  // };

  // const toggleUnderline = () => {
  //   const link = document.getElementById('forgotPasswordLink');
  //   link.classList.toggle('underline-link');
  // };

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
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
      </div>
    </div>
  );
};

export default Login;
