import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const sdgData = {
  1: "End poverty in all its forms everywhere.",
  2: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
  3: "Ensure healthy lives and promote well-being for all at all ages.",
  4: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities.",
  5: "Achieve gender equality and empower all women and girls.",
  6: "Ensure availability and sustainable management of water and sanitation for all.",
  7: "Ensure access to affordable, reliable, sustainable and modern energy for all.",
  8: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work.",
  9: "Build resilient infrastructure, promote sustainable industrialization and foster innovation.",
  10: "Reduce inequality within and among countries.",
  11: "Make cities inclusive, safe, resilient and sustainable.",
  12: "Ensure sustainable consumption and production patterns.",
  13: "Take urgent action to combat climate change and its impacts.",
  14: "Conserve and sustainably use the oceans, seas and marine resources.",
  15: "Protect, restore and promote sustainable use of terrestrial ecosystems.",
  16: "Promote peaceful and inclusive societies for sustainable development.",
  17: "Strengthen global partnerships for sustainable development."
};

function SDGDetail() {
  const { id } = useParams();
  const goalNumber = parseInt(id);
  const [donationCount, setDonationCount] = useState(0);

  useEffect(() => {
    if (goalNumber === 2) {
      axios.get('http://localhost:5000/api/donations')
        .then(res => setDonationCount(res.data.length))
        .catch(err => console.error(err));
    }
  }, [goalNumber]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4 text-indigo-700">
        SDG {goalNumber}: {sdgData[goalNumber]?.split('.')[0]}
      </h2>

      <img
        src={`https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${goalNumber
          .toString()
          .padStart(2, '0')}.jpg`}
        alt={`SDG ${goalNumber}`}
        className="w-full max-w-md mx-auto mb-4 rounded shadow-md"
      />

      <p className="text-gray-700 mb-6 text-center">{sdgData[goalNumber]}</p>

      {goalNumber === 2 && (
        <div className="bg-green-100 p-4 rounded mb-6 shadow-sm">
          <h4 className="text-lg font-semibold text-green-700 mb-2">🎯 FoodLink’s Impact</h4>
          <p className="text-gray-800">
            We’ve collected <strong>{donationCount}</strong> food donations to fight hunger!
          </p>
        </div>
      )}

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-indigo-600 mb-2">🌱 How You Can Help</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Donate surplus food</li>
          <li>Share awareness on social media</li>
          <li>Volunteer or partner with local food banks</li>
        </ul>
      </div>

      <div className="text-center">
        <a
          href="https://sdgs.un.org/goals"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Learn more on the official SDG site
        </a>
      </div>
    </div>
  );
}

export default SDGDetail;
