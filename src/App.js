// App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import FileCase from './components/FileCase';
import ReviewCase from './components/ReviewCase';
import LegalTalks from './components/LegalTalks';
import AdvocateDashboard from './components/AdvocateDashboard';
import JudgeDashboard from './components/JudgeDashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/FileCase" element={<FileCase />} />
        <Route path="/ReviewCase" element={<ReviewCase />} />
        <Route path="/LegalTalks" element={<LegalTalks />} />
        <Route path="/advocate-dashboard" element={<AdvocateDashboard />} />
        <Route path="/judge-dashboard" element={<JudgeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
