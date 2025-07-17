import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TotalDonationsCard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/donations')
      .then(res => setCount(res.data.length))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold text-green-700 mb-2">📦 Total Donations</h3>
      <p className="text-2xl font-bold text-gray-800">{count}</p>
      <p className="text-sm text-gray-600 mt-1">Items donated to date</p>
    </div>
  );
}
