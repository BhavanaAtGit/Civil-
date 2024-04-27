import React, { useState } from 'react';
import { storage, db } from '../config/firebase-config';
import { ref, uploadBytes } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import '../assets/styles/Documentation.css';
import { Link } from 'react-router-dom';

const Documentation = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [docType, setDocType] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleDocTypeChange = (e) => {
    setDocType(e.target.value);
  };

  const handleFileUpload = async () => {
    try {
      if (!file) {
        alert('Please select a file to upload.');
        return;
      }

      const storageRef = ref(storage, fileName); // Create a reference to the file

      // Upload the file to Firebase storage
      await uploadBytes(storageRef, file);

      // Add document data to Firestore
      await addDoc(collection(db, 'documents'), {
        fileName: fileName,
        docType: docType,
        timestamp: new Date()
      });

      setFile(null);
      setFileName('');
      setDocType('');
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while uploading the file.');
    }
  };

  return (
    <div>
      <nav className="side-navbar">
        <ul>
          <li><Link className="nav-link" to="/advocate-dashboard">Home</Link></li>
          <li><Link className="nav-link" to="/FileCase">File Case</Link></li>
          {/* <li><Link className="nav-link" to="/ReviewCase">Review Case</Link></li> */}
          <li><Link className="nav-link" to="/documentation">Documentation</Link></li>
          <li><Link className="nav-link" to="/legaltalks">LegalTalks</Link></li>
        </ul>
      </nav>

      <div className="content-container">
        <div className="upload-container">
          <h2>Upload Documents</h2>
          <div>
            <input type="file" onChange={handleFileChange} className="file-input" />
            <input type="text" placeholder="Document Type" value={docType} onChange={handleDocTypeChange} />
            <button onClick={handleFileUpload} className="btn">Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
