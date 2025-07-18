import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DonationTrendChart from '../components/DonationTrendChart';

function Progress() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/donations`)
      .then(res => setCount(res.data.length))
      .catch(err => console.error('Error fetching donation count:', err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">📊 Impact So Far</h2>
      <div className="bg-white rounded-md shadow-md p-4 text-center mb-6">
        <p className="text-xl text-gray-800">
          We've collected <strong>{count}</strong> food donations! 🎉
        </p>
        <p className="mt-2 text-gray-600">
          Thank you for being part of the mission to fight hunger.
        </p>
      </div>
      <DonationTrendChart />
    </div>
  );
}

export default Progress;
