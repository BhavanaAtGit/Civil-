import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import '../assets/styles/ReviewCase.css';

const ReviewCase = () => {
  const { id } = useParams();
  const [caseDetails, setCaseDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        const caseDocRef = doc(db, 'cases', id);
        const caseDocSnapshot = await getDoc(caseDocRef);
        if (caseDocSnapshot.exists()) {
          setCaseDetails(caseDocSnapshot.data());
        } else {
          setError('No such case found!');
        }
      } catch (error) {
        console.error('Error fetching case details: ', error);
        setError('Error fetching case details');
      } finally {
        setLoading(false);
      }
    };

    fetchCaseDetails();
  }, [id]);

  if (loading) {
    return <p>Loading case details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="review-case-container">
      <h2>Case Details</h2>
      <div className="case-info">
        <p><strong>Case ID:</strong> {caseDetails.CaseId}</p>
        <p><strong>Client Name:</strong> {caseDetails.clientName}</p>
        <p><strong>Status:</strong> {caseDetails.status}</p>
        <p><strong>Plaintiff:</strong> {caseDetails.Plaintiff}</p>
        <p><strong>Defendant:</strong> {caseDetails.Defendant}</p>
        <p><strong>Deadline:</strong> {caseDetails.Deadline ? new Date(caseDetails.Deadline.seconds * 1000).toLocaleString() : 'Not specified'}</p>
        <p><strong>Case History:</strong> {caseDetails.CaseHistory}</p>
      </div>
    </div>
  );
};

export default ReviewCase;
