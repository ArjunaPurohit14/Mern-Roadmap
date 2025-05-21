import React from 'react'
import { useState } from 'react';
function form() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      {/* create a form with an input field and display the entered value dynamically */}
       <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">🌟 Profile Form</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="px-4 py-2 border border-gray-300 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <p className="mt-4 text-xl font-medium text-gray-700">
        Hello, <span className="text-purple-700">{name || 'stranger'}</span>!
      </p>
    </div>
      </div>
    
  )
}

export default form;