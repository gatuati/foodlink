import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, form);
      console.log('Login successful:', res.data);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/login-bg.jpg')" }}>
      <div className="bg-white bg-opacity-80 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">🔐 Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} required className="w-full p-3 rounded border border-gray-300" />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required className="w-full p-3 rounded border border-gray-300" />
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
