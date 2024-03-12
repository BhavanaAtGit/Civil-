// AdvocateDashboard.js

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FileCase from './FileCase'; // Correct import path
import ReviewCase from './ReviewCase';
import Documentation from './Documentation';
import LegalTalks from './LegalTalks';
import '../assets/styles/Advocate.css';

const AdvocateDashboard = () => {
    // Dummy data for running cases
    const runningCases = [
      { id: 1, caseNumber: 'CASE001', clientName: 'John Doe', status: 'Pending' },
      { id: 2, caseNumber: 'CASE002', clientName: 'Jane Smith', status: 'In Progress' },
      { id: 3, caseNumber: 'CASE003', clientName: 'Alice Johnson', status: 'In Progress' },
    ];
  
    return (
      <div className="advocate-container">
        <nav className="side-navbar">
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="/FileCase">File Case</Link></li>
            <li><Link to="/ReviewCase">Review Case</Link></li>
            <li><Link to="/documentation">Documentation</Link></li>
            <li><Link to="/legaltalks">LegalTalks</Link></li>
          </ul>
        </nav>
        <div className="running-cases-container">
          <h2>Running Cases</h2>
          <div className="cases-list">
            {runningCases.map((caseItem) => (
              <div key={caseItem.id} className="case-item">
                <p>Case Number: {caseItem.caseNumber}</p>
                <p>Client Name: {caseItem.clientName}</p>
                <p>Status: {caseItem.status}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <Routes>
          <Route path="/FileCase" element={<FileCase />} />
          <Route path="/ReviewCase" element={<ReviewCase />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/legaltalks" element={<LegalTalks />} />
        </Routes> */}
      </div>
    );
};

export default AdvocateDashboard;
