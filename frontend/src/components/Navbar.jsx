import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-6 p-4 bg-gray-100 shadow-md text-sm font-medium">
      <Link to="/" className="text-indigo-600 hover:underline">Landing</Link>
      <Link to="/home" className="text-indigo-600 hover:underline">Home</Link>
      <Link to="/donate" className="text-indigo-600 hover:underline">Donate</Link>
      <Link to="/sdg" className="text-indigo-600 hover:underline">SDG Goal</Link>
      <Link to="/progress" className="text-indigo-600 hover:underline">Progress</Link>
      <Link to="/discuss" className="text-indigo-600 hover:underline">Discuss</Link>
      
      {/* 🔐 Admin Access */}
      <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
      <Link to="/register" className="text-indigo-600 hover:underline">Register</Link>
      <Link to="/dashboard" className="text-indigo-600 hover:underline">Dashboard</Link>
    </nav>
  );
}

export default Navbar;
