import React from 'react';

function Landing() {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 text-center bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-white max-w-xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to FoodLink</h1>
        <p className="text-lg mb-6">Help reduce hunger by donating surplus food.</p>
        <a
          href="/donate"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-300 transition"
        >
          🍽️ Donate Now
        </a>
      </div>
    </div>
  );
}

export default Landing;
