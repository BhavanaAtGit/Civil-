import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import FileCase from './components/FileCase';
import ReviewCase from './components/ReviewCase';
import LegalTalks from './components/LegalTalks';
import Footer from './components/Footer';
import Header from './components/Header';
import AdvocateDashboard from './components/AdvocateDashboard';
import JudgeDashboard from './components/JudgeDashboard';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import './App.css'; // Import your global styles

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/Login" />;
  };

  return (
    <Router>
      <div className="app-container"> {/* Wrap everything in a container */}
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="/FileCase" element={<RequireAuth><FileCase /></RequireAuth>} />
            <Route path="/ReviewCase" element={<RequireAuth><ReviewCase /></RequireAuth>} />
            <Route path="/LegalTalks" element={<RequireAuth><LegalTalks /></RequireAuth>} />
            <Route path="/advocate-dashboard" element={<RequireAuth><AdvocateDashboard /></RequireAuth>} />
            <Route path="/judge-dashboard" element={<RequireAuth><JudgeDashboard /></RequireAuth>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
