// FileCase.js

import React, { useState } from 'react';
import '../assets/styles/FileCase.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { db } from '../config/firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function FileCase() {
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const FiledCasesCollection = collection(db, 'FiledCases');
      await addDoc(FiledCasesCollection, formData);
      console.log('Case Filed successfully!');
      // Optionally, reset the form data after submission
      setFormData({
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
      // Show alert and redirect to homepage
      window.alert('Case filed successfully!');
      window.location.href = '/';
    } catch (error) {
      console.error('Error filing case:', error);
    }
  };

  return (
    
    <div className="file-case-page">
      <nav className="side-navbar">
        <ul>
          <li><Link className="nav-link" to="/advocate-dashboard">Home</Link></li>
          <li><Link className="nav-link" to="/FileCase">File Case</Link></li>
          {/* <li><Link className="nav-link" to="/ReviewCase">Review Case</Link></li> */}
          <li><Link className="nav-link" to="/documentation">Documentation</Link></li>
          <li><Link className="nav-link" to="/legaltalks">LegalTalks</Link></li>
        </ul>
      </nav>
      <Header />
      <div className="file-case-container">
      {/* <h2>File Case here!!</h2> */}
        <h2>Enter your case details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
        <label htmlFor="caseTitle" className="block text-sm font-medium">Case Title: </label>
        <input type="text" id="caseTitle" name="caseTitle" value={formData.caseTitle} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
      </div>
      <div className="mb-4">
        <label htmlFor="caseNumber" className="block text-sm font-medium">Case Number: </label>
        <input type="text" id="caseNumber" name="caseNumber" value={formData.caseNumber} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
      </div>
      <div className="mb-4">
        <label htmlFor="courtJurisdiction" className="block text-sm font-medium">Court Jurisdiction: </label>
        <input type="text" id="courtJurisdiction" name="courtJurisdiction" value={formData.courtJurisdiction} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
      </div>
      <div className="mb-4">
        <label htmlFor="plaintiff" className="block text-sm font-medium">Plaintiff: </label>
        <input type="text" id="plaintiff" name="plaintiff" value={formData.plaintiff} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
      </div>
      <div className="mb-4">
        <label htmlFor="defendant" className="block text-sm font-medium">Defendant: </label>
        <input type="text" id="defendant" name="defendant" value={formData.defendant} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
      </div>
      <div className="mb-4">
        <label htmlFor="legalClaims" className="block text-sm font-medium">Legal Claims: </label>
        <input type="text" id="legalClaims" name="legalClaims" value={formData.legalClaims} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
      </div>
      <div className="mb-4">
        <label htmlFor="factualAllegations" className="block text-sm font-medium">Factual Allegations: </label>
        <input type="text" id="factualAllegations" name="factualAllegations" value={formData.factualAllegations} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
      </div>
      <div className="mb-4">
        <label htmlFor="reliefSought" className="block text-sm font-medium">Relief Sought: </label>
        <input type="text" id="reliefSought" name="reliefSought" value={formData.reliefSought} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
      </div>
      <div className="mb-4">
        <label htmlFor="evidence" className="block text-sm font-medium">Evidence: </label>
        <input type="text" id="evidence" name="evidence" value={formData.evidence} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
      </div>
      <div className="mb-4">
        <label htmlFor="legalRepresentation" className="block text-sm font-medium">Legal Representation: </label>
        <input type="text" id="legalRepresentation" name="legalRepresentation" value={formData.legalRepresentation} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
      </div>
      <div className="mb-4">
        <label htmlFor="filingFeesPaid" className="block text-sm font-medium">Filing Fees Paid: </label>
        <input type="checkbox" id="filingFeesPaid" name="filingFeesPaid" checked={formData.filingFeesPaid} onChange={handleChange} className="mt-1" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
    </form>
        
      </div>
      <Footer />
    </div>
  );
}

export default FileCase;
