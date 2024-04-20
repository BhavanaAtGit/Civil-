// // FileCase.js

import React, { useState } from 'react';
import '../assets/styles/FileCase.css';
//import Navbar from '../components/Navbar';
//import Footer from '../components/Footer';
import { db } from '../config/firebase-config';
import { collection, addDoc } from 'firebase/firestore';

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
    <div className="bg-black text-white min-h-screen mb-2">
      {/* <Navbar /> */}
      <div className="max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Enter your case details.</h2>
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
      {/* <Footer /> */}
    </div>
  );
}

export default FileCase;
// import React, { useState } from 'react';
// import '../assets/styles/FileCase.css'; // Import the CSS file

// const FileCase = () => {
//   // State to manage form data
//   const [caseDetails, setCaseDetails] = useState({
//     caseTitle: '',
//     caseNumber: '',
//     courtJurisdiction: '',
//     plaintiff: '',
//     defendant: '',
//     legalClaims: '',
//     factualAllegations: '',
//     reliefSought: '',
//     evidence: '',
//     legalRepresentation: '',
//     filingFeesPaid: false
//   });

//   // Function to handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCaseDetails({
//       ...caseDetails,
//       [name]: value
//     });
//   };

//   // Function to handle checkbox change
//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setCaseDetails({
//       ...caseDetails,
//       [name]: checked
//     });
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to handle form submission, e.g., send data to backend
//     console.log('Case details submitted:', caseDetails);
//     // You may want to perform additional actions after submission
//   };

//   return (
//     <div className="file-case-container">
//       <h2>File Case</h2>
      // <form onSubmit={handleSubmit} className="file-case-form">
      //   <div className="form-group">
      //     <label htmlFor="caseTitle">Case Title:</label>
      //     <input
      //       type="text"
      //       id="caseTitle"
      //       name="caseTitle"
      //       value={caseDetails.caseTitle}
      //       onChange={handleChange}
      //       required
      //     />
      //   </div>

      //   <div className="form-group">
      //     <label htmlFor="caseNumber">Case Number:</label>
      //     <input
      //       type="text"
      //       id="caseNumber"
      //       name="caseNumber"
      //       value={caseDetails.caseNumber}
      //       onChange={handleChange}
      //       required
      //     />
      //   </div>

      //   <div className="form-group">
      //     <label htmlFor="courtJurisdiction">Court Jurisdiction:</label>
      //     <input
      //       type="text"
      //       id="courtJurisdiction"
      //       name="courtJurisdiction"
      //       value={caseDetails.courtJurisdiction}
      //       onChange={handleChange}
      //       required
      //     />
      //   </div>

      //   <div className="form-group">
      //     <label htmlFor="plaintiff">Plaintiff:</label>
      //     <input
      //       type="text"
      //       id="plaintiff"
      //       name="plaintiff"
      //       value={caseDetails.plaintiff}
      //       onChange={handleChange}
      //       required
      //     />
      //   </div>

      //   <div className="form-group">
      //     <label htmlFor="defendant">Defendant:</label>
      //     <input
      //       type="text"
      //       id="defendant"
      //       name="defendant"
      //       value={caseDetails.defendant}
      //       onChange={handleChange}
      //       required
      //     />
      //   </div>

      //   <div className="form-group">
      //     <label htmlFor="legalClaims">Legal Claims:</label>
      //     <input
      //       type="text"
      //       id="legalClaims"
      //       name="legalClaims"
      //       value={caseDetails.legalClaims}
      //       onChange={handleChange}
      //       required
      //     />
      //   </div>

      //   <div className="form-group">
      //     <label htmlFor="factualAllegations">Factual Allegations:</label>
      //     <textarea
      //       id="factualAllegations"
      //       name="factualAllegations"
      //       value={caseDetails.factualAllegations}
      //       onChange={handleChange}
      //       required
      //     ></textarea>
      //   </div>

      //   <div className="form-group">
      //     <label htmlFor="reliefSought">Relief Sought:</label>
      //     <textarea
      //       id="reliefSought"
      //       name="reliefSought"
      //       value={caseDetails.reliefSought}
      //       onChange={handleChange}
      //       required
      //     ></textarea>
      //   </div>

      //   <div className="form-group">
      //     <label htmlFor="evidence">Evidence:</label>
      //     <textarea
      //       id="evidence"
      //       name="evidence"
      //       value={caseDetails.evidence}
      //       onChange={handleChange}
      //       required
      //     ></textarea>
      //   </div>

      //   <div className="form-group">
      //     <label htmlFor="legalRepresentation">Legal Representation:</label>
      //     <input
      //       type="text"
      //       id="legalRepresentation"
      //       name="legalRepresentation"
      //       value={caseDetails.legalRepresentation}
      //       onChange={handleChange}
      //     />
      //   </div>

      //   <div className="form-group">
      //     <label htmlFor="filingFeesPaid">
      //       <input
      //         type="checkbox"
      //         id="filingFeesPaid"
      //         name="filingFeesPaid"
      //         checked={caseDetails.filingFeesPaid}
      //         onChange={handleCheckboxChange}
      //       />
      //       Filing Fees Paid
      //     </label>
      //   </div>

      //   <button type="submit">Submit</button>
      // </form>
//     </div>
//   );
// };

// export default FileCase;
