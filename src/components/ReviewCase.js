// ReviewCase.js

import React from 'react';
import '../assets/styles/ReviewCase.css';

const ReviewCase = () => {
  // Dummy data for the review case
  const caseDetails = {
    caseNumber: 'CASE001',
    status: 'Pending',
    deadlines: [
      { description: 'Discovery Deadline', date: '2024-05-15' },
      { description: 'Motion Filing Deadline', date: '2024-06-10' },
      // Add more deadlines as needed
    ],
    partiesInvolved: [
      { name: 'John Doe', role: 'Plaintiff' },
      { name: 'Jane Smith', role: 'Defendant' },
      // Add more parties involved as needed
    ],
    caseHistory: [
      { event: 'Initial Filing', date: '2024-03-20' },
      { event: 'Discovery Phase Begins', date: '2024-04-01' },
      // Add more case history events as needed
    ],
    documentsSubmitted: [
      { name: 'Complaint', type: 'Legal Document' },
      { name: 'Affidavit of Witness', type: 'Legal Document' },
      // Add more documents submitted as needed
    ]
  };

  return (
    <div className="review-case-container">
      <h2>Review Case</h2>
      <div>
        <h3>Case Number: {caseDetails.caseNumber}</h3>
        <p>Status: {caseDetails.status}</p>
        <h3>Deadlines:</h3>
        <ul>
          {caseDetails.deadlines.map((deadline, index) => (
            <li key={index}>
              {deadline.description}: {deadline.date}
            </li>
          ))}
        </ul>
        <h3>Parties Involved:</h3>
        <ul>
          {caseDetails.partiesInvolved.map((party, index) => (
            <li key={index}>
              {party.name} - {party.role}
            </li>
          ))}
        </ul>
        <h3>Case History:</h3>
        <ul>
          {caseDetails.caseHistory.map((event, index) => (
            <li key={index}>
              {event.event} - {event.date}
            </li>
          ))}
        </ul>
        <h3>Documents Submitted:</h3>
        <ul>
          {caseDetails.documentsSubmitted.map((document, index) => (
            <li key={index}>
              {document.name} - {document.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewCase;
