import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/donations`)
      .then(res => setDonations(res.data))
      .catch(err => console.error('Error fetching donations:', err));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-indigo-700">📦 Available Food Donations</h2>
      {donations.length === 0 ? (
        <p className="text-gray-600 text-center">No donations yet.</p>
      ) : (
        <ul className="space-y-4">
          {donations.map(donation => (
            <li key={donation._id} className="bg-white p-4 shadow-md rounded-md border border-gray-200">
              <p className="text-lg font-semibold text-gray-800">
                {donation.foodName} <span className="text-sm text-gray-500">({donation.quantity})</span>
              </p>
              <p className="text-sm text-gray-600">
                From <span className="font-medium">{donation.donor}</span> at <span className="italic">{donation.location}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
