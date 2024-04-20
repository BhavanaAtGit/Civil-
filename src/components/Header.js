import React from 'react';
import '../assets/styles/header.css';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Kanoonify</h1>
      </div>
    </header>
  );
};

export default Header;
