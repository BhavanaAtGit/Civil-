import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';
import '../assets/styles/judge.css';

const JudgeDashboard = () => {
  const [filedCases, setFiledCases] = useState([]);

  useEffect(() => {
    const fetchFiledCases = async () => {
      try {
        const casesCollection = collection(db, 'FiledCases');
        const casesSnapshot = await getDocs(casesCollection);
        const casesData = casesSnapshot.docs.map(snapshot => ({
          id: snapshot.id,
          data: snapshot.data()
        }));
        setFiledCases(casesData);
      } catch (error) {
        console.error('Error fetching filed cases: ', error);
      }
    };

    fetchFiledCases();

    return () => {
      // Cleanup function if needed
    };
  }, []);

  const approveCase = (caseId) => {
    // Logic to approve the case and update in the database
    // You can implement this as per your requirements
  };

  return (
    <div className="judge-container">
      <nav className="side-navbar">
        <ul>
          <li><Link className="nav-link" to="">Home</Link></li>
          <li><Link className="nav-link" to="/approve-case">Approve Case</Link></li>
          <li><Link className="nav-link" to="/documentation">Documentation</Link></li>
          <li><Link className="nav-link" to="/legaltalks">LegalTalks</Link></li>
        </ul>
      </nav>
      <div className="filed-cases-container">
        <h2>Filed Cases</h2>
        <div className="cases-list">
          {filedCases.map((caseItem) => (
            <div key={caseItem.id} className="case-item">
              <h4>Case Number: {caseItem.data.caseNumber}</h4>
              <h4>Case Title: {caseItem.data.caseTitle}</h4>
              <h4>Plaintiff: {caseItem.data.plaintiff}</h4>
              <h4>Defendant: {caseItem.data.defendant}</h4>
              <button onClick={() => approveCase(caseItem.id)}>Approve</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JudgeDashboard;
