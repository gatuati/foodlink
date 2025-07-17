import React from 'react';
import { Link } from 'react-router-dom';

const sdgs = [
  { number: 1, title: "No Poverty" },
  { number: 2, title: "Zero Hunger" },
  { number: 3, title: "Good Health and Well-being" },
  { number: 4, title: "Quality Education" },
  { number: 5, title: "Gender Equality" },
  { number: 6, title: "Clean Water and Sanitation" },
  { number: 7, title: "Affordable and Clean Energy" },
  { number: 8, title: "Decent Work and Economic Growth" },
  { number: 9, title: "Industry, Innovation and Infrastructure" },
  { number: 10, title: "Reduced Inequality" },
  { number: 11, title: "Sustainable Cities and Communities" },
  { number: 12, title: "Responsible Consumption and Production" },
  { number: 13, title: "Climate Action" },
  { number: 14, title: "Life Below Water" },
  { number: 15, title: "Life on Land" },
  { number: 16, title: "Peace, Justice and Strong Institutions" },
  { number: 17, title: "Partnerships for the Goals" }
];

function SDG() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        🌐 United Nations Sustainable Development Goals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sdgs.map((goal) => (
          <Link
            to={`/sdg/${goal.number}`}
            key={goal.number}
            className="transform hover:scale-105 transition duration-300"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 text-center p-4">
              <img
                src={`https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${goal.number
                  .toString()
                  .padStart(2, '0')}.jpg`}
                alt={goal.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-indigo-600">Goal {goal.number}</h3>
              <p className="text-gray-700">{goal.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SDG;
