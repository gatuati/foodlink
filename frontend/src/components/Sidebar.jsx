import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Donations', path: '/donate' },
 
];

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-indigo-700 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">🛡️ Admin</h1>
      <ul className="space-y-4">
        {navItems.map(item => (
          <li key={item.path}>
            <Link to={item.path} className="hover:underline block text-lg">{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
