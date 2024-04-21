import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';
import '../assets/styles/Advocate.css';

const AdvocateDashboard = () => {
  const [runningCases, setRunningCases] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchRunningCases = async () => {
      try {
        const casesCollection = collection(db, 'cases');
        const casesSnapshot = await getDocs(casesCollection);
        const casesData = casesSnapshot.docs.map(snapshot => ({
          id: snapshot.id,
          data: snapshot.data()
        }));
        setRunningCases(casesData);
      } catch (error) {
        console.error('Error fetching running cases: ', error);
      }
    };

    fetchRunningCases();

    return () => {
      // Cleanup function if needed
    };
  }, []);

  const filteredCases = runningCases.filter((caseItem) => {
    if (filter === 'All') {
      return true;
    } else {
      return caseItem.data.status === filter;
    }
  });

  return (
    <div className="advocate-container">
      <nav className="side-navbar">
        <ul>
          <li><Link className="nav-link" to="">Home</Link></li>
          <li><Link className="nav-link" to="/FileCase">File Case</Link></li>
          {/* <li><Link className="nav-link" to="/ReviewCase">Review Case</Link></li> */}
          <li><Link className="nav-link" to="/documentation">Documentation</Link></li>
          <li><Link className="nav-link" to="/legaltalks">LegalTalks</Link></li>
        </ul>
      </nav>
      <div className="running-cases-container">
        <h2>Running Cases</h2>
        <div className="filter">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="isPending">Pending</option>
            <option value="inProgress">In Progress</option>
            <option value="CaseClosed">Case Closed</option>
          </select>
        </div>
        <div className="cases-list">
          {filteredCases.map((caseItem) => (
            <Link key={caseItem.id} to={`/case-details/${caseItem.id}`} className="case-item-link">
              <div className="case-item">
                <h4>Case ID: {caseItem.data.CaseId}</h4>
                <h4>Client Name: {caseItem.data.clientName}</h4>
                <h4>Status: {caseItem.data.status}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvocateDashboard;
