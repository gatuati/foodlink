import React from 'react';

const donors = [
  { name: 'GreenGrocers', count: 100 },
  { name: 'Food4All', count: 80 },
  { name: 'HarvestHope', count: 65 },
];

export default function TopDonorsCard() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold text-indigo-700 mb-2">🌟 Top Donors</h3>
      <ul className="space-y-1 text-gray-700">
        {donors.map((donor, idx) => (
          <li key={idx}>
            <span className="font-medium">{donor.name}</span> — {donor.count} items
          </li>
        ))}
      </ul>
    </div>
  );
}
