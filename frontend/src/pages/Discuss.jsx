import React, { useState } from 'react';

function Discuss() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  const postComment = () => {
    if (input.trim() === '') return;
    setComments(prev => [...prev, input]);
    setInput('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">💬 Discussion Board</h2>

      <textarea
        rows="3"
        placeholder="Share ideas or food needs..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <button
        onClick={postComment}
        className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Post
      </button>

      <ul className="mt-6 space-y-2">
        {comments.map((c, i) => (
          <li key={i} className="bg-gray-100 p-3 rounded-md border border-gray-300 text-gray-800">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Discuss;
