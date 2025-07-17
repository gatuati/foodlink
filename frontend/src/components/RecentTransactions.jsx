import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export default function RecentTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const debounceTimer = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/donations')
      .then(res => {
        const recent = res.data.slice(-50).reverse(); // last 50 entries
        setTransactions(recent);
        setFiltered(recent);
      })
      .catch(err => console.error(err));
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      applyFilters(value, category, fromDate, toDate);
    }, 300);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    applyFilters(search, value, fromDate, toDate);
  };

  const handleFromDateChange = (e) => {
    const value = e.target.value;
    setFromDate(value);
    applyFilters(search, category, value, toDate);
  };

  const handleToDateChange = (e) => {
    const value = e.target.value;
    setToDate(value);
    applyFilters(search, category, fromDate, value);
  };

  const applyFilters = (text, cat, from, to) => {
    let list = [...transactions];
    if (text) {
      list = list.filter(t => t.donor?.toLowerCase().includes(text.toLowerCase()));
    }
    if (cat) {
      list = list.filter(t => t.foodName?.toLowerCase().includes(cat.toLowerCase()));
    }
    if (from && to) {
      list = list.filter(t => {
        const date = new Date(t.createdAt);
        return date >= new Date(from) && date <= new Date(to);
      });
    }
    setFiltered(list);
    setPage(1); // reset to first page
  };

  const exportCSV = () => {
    const rows = filtered.map(t => `${t.donor},${t.foodName},${t.quantity},${t.createdAt}`);
    const csv = ['Donor,Food,Quantity,Date', ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'donations.csv';
    link.click();
  };

  const printList = () => window.print();

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentItems = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold text-indigo-700 mb-4">🔎 Filter & Export Donations</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by donor..."
          value={search}
          onChange={handleSearchChange}
          className="p-2 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-500"
        />
        <select
          value={category}
          onChange={handleCategoryChange}
          className="p-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-400"
        >
          <option value="">All Categories</option>
          <option value="maize">Maize</option>
          <option value="rice">Rice</option>
          <option value="beans">Beans</option>
          <option value="wheat">Wheat</option>
          <option value="oil">Oil</option>
        </select>
        <input
          type="date"
          value={fromDate}
          onChange={handleFromDateChange}
          className="p-2 rounded border border-gray-300"
        />
        <input
          type="date"
          value={toDate}
          onChange={handleToDateChange}
          className="p-2 rounded border border-gray-300"
        />
      </div>

      <div className="flex gap-4 mb-4">
        <button onClick={exportCSV} className="px-4 py-2 bg-green-600 text-white rounded">Export CSV</button>
        <button onClick={printList} className="px-4 py-2 bg-gray-700 text-white rounded">🖨️ Print</button>
      </div>

      <ul className="space-y-2 text-gray-700">
        {currentItems.length === 0 ? (
          <li>No matching transactions found.</li>
        ) : (
          currentItems.map((item, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{item.foodName} ({item.quantity})</span>
              <span className="text-sm text-gray-500">{item.donor}</span>
            </li>
          ))
        )}
      </ul>

      {totalPages > 1 && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-3 py-1 bg-indigo-600 text-white rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-gray-700">Page {page} of {totalPages}</span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-3 py-1 bg-indigo-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
