import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import '../assets/styles/CaseDetails.css';

const CaseDetails = () => {
  const { caseId } = useParams();
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    const fetchCaseData = async () => {
      try {
        const caseDocRef = doc(db, 'cases', caseId);
        const caseDocSnapshot = await getDoc(caseDocRef);
        if (caseDocSnapshot.exists()) {
          setCaseData(caseDocSnapshot.data());
        } else {
          console.log('No such case found!');
        }
      } catch (error) {
        console.error('Error fetching case data: ', error);
      }
    };

    fetchCaseData();
  }, [caseId]);

  if (!caseData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="case-details-container">
      <h2 className="section-title">Case Details</h2>
      <div className="case-info">
        <p><span className="info-label">Case ID:</span> {caseData.CaseId}</p>
        <p><span className="info-label">Client Name:</span> {caseData.clientName}</p>
        <p><span className="info-label">Status:</span> {caseData.status}</p>
        <p><span className="info-label">Defendant:</span> {caseData.Defendant}</p>
        <p><span className="info-label">Plaintiff:</span> {caseData.Plaintiff}</p>
        <p><span className="info-label">Deadline:</span> {new Date(caseData.Deadline?.toDate()).toLocaleString()}</p>
      </div>
      <div className="case-history">
        <h3 className="section-title">Case History</h3>
        <p>{caseData.CaseHistory}</p>
      </div>
    </div>
  );
};

export default CaseDetails;
