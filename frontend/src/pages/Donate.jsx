import React, { useState } from 'react';
import axios from 'axios';

function Donate() {
  const [formData, setFormData] = useState({
    foodName: '',
    quantity: '',
    donor: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/donations', formData);
      alert('Donation added!');
      setFormData({ foodName: '', quantity: '', donor: '', location: '' });
    } catch (err) {
      alert('Error adding donation');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">🍲 Donate Food</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="foodName"
          placeholder="Food name"
          value={formData.foodName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          name="donor"
          placeholder="Your name or business"
          value={formData.donor}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
        >
          Donate
        </button>
      </form>
    </div>
  );
}

export default Donate;
