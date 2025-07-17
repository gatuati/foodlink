import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Sidebar from '../components/Sidebar';
import DonationTrendChart from '../components/DonationTrendChart';
import TotalDonationsCard from '../components/TotalDonationsCard';
import TopDonorsCard from '../components/TopDonorsCard';
import RecentTransactions from '../components/RecentTransactions';

function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">🛡️ Admin Dashboard</h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <TotalDonationsCard />
          <TopDonorsCard />
        </div>

        {/* Donation Chart */}
        <DonationTrendChart />

        {/* Recent Transactions */}
        <div className="mt-10">
          <RecentTransactions />
        </div>

        {/* Optional Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white rounded-md shadow-md p-4">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Total Donations</h3>
            <p className="text-gray-800 text-2xl font-bold">📦 432 items</p>
            <p className="text-gray-600 mt-2">Collected this month</p>
          </div>

          <div className="bg-white rounded-md shadow-md p-4">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Recent Activity</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ New donor registered: <strong>GreenGrocers</strong></li>
              <li>📥 Donation received: <strong>100 bags of maize</strong></li>
              <li>📢 Comment posted in Discuss board</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
