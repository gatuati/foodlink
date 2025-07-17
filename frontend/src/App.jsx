import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components & Pages
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Donate from './pages/Donate';
import SDG from './pages/SDG';
import Progress from './pages/Progress';
import Discuss from './pages/Discuss';
import SDGDetail from './pages/SDGDetail';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css'; // optional if using global CSS

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/sdg" element={<SDG />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/discuss" element={<Discuss />} />
        <Route path="/sdg/:id" element={<SDGDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
