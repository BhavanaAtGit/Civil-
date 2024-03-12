// FileCase.js

import React, { useState } from 'react';
import '../assets/styles/FileCase.css'; // Import the CSS file

const FileCase = () => {
  // State to manage form data
  const [caseDetails, setCaseDetails] = useState({
    caseTitle: '',
    caseNumber: '',
    courtJurisdiction: '',
    plaintiff: '',
    defendant: '',
    legalClaims: '',
    factualAllegations: '',
    reliefSought: '',
    evidence: '',
    legalRepresentation: '',
    filingFeesPaid: false
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCaseDetails({
      ...caseDetails,
      [name]: value
    });
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCaseDetails({
      ...caseDetails,
      [name]: checked
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., send data to backend
    console.log('Case details submitted:', caseDetails);
    // You may want to perform additional actions after submission
  };

  return (
    <div className="file-case-container">
      <h2>File Case</h2>
      <form onSubmit={handleSubmit} className="file-case-form">
        <div className="form-group">
          <label htmlFor="caseTitle">Case Title:</label>
          <input
            type="text"
            id="caseTitle"
            name="caseTitle"
            value={caseDetails.caseTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="caseNumber">Case Number:</label>
          <input
            type="text"
            id="caseNumber"
            name="caseNumber"
            value={caseDetails.caseNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="courtJurisdiction">Court Jurisdiction:</label>
          <input
            type="text"
            id="courtJurisdiction"
            name="courtJurisdiction"
            value={caseDetails.courtJurisdiction}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="plaintiff">Plaintiff:</label>
          <input
            type="text"
            id="plaintiff"
            name="plaintiff"
            value={caseDetails.plaintiff}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="defendant">Defendant:</label>
          <input
            type="text"
            id="defendant"
            name="defendant"
            value={caseDetails.defendant}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="legalClaims">Legal Claims:</label>
          <input
            type="text"
            id="legalClaims"
            name="legalClaims"
            value={caseDetails.legalClaims}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="factualAllegations">Factual Allegations:</label>
          <textarea
            id="factualAllegations"
            name="factualAllegations"
            value={caseDetails.factualAllegations}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="reliefSought">Relief Sought:</label>
          <textarea
            id="reliefSought"
            name="reliefSought"
            value={caseDetails.reliefSought}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="evidence">Evidence:</label>
          <textarea
            id="evidence"
            name="evidence"
            value={caseDetails.evidence}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="legalRepresentation">Legal Representation:</label>
          <input
            type="text"
            id="legalRepresentation"
            name="legalRepresentation"
            value={caseDetails.legalRepresentation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="filingFeesPaid">
            <input
              type="checkbox"
              id="filingFeesPaid"
              name="filingFeesPaid"
              checked={caseDetails.filingFeesPaid}
              onChange={handleCheckboxChange}
            />
            Filing Fees Paid
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FileCase;
