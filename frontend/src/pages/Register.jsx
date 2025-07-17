import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    role: 'donor',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      console.log('Registration successful:', res.data);
      // You can redirect or show a success message here
    } catch (err) {
      console.error('Registration failed:', err.response?.data || err.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/register-bg.jpg')" }}
    >
      <div className="bg-white bg-opacity-85 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">📝 Register Account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="donor">Donor</option>
            <option value="admin">Admin</option>
          </select>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
