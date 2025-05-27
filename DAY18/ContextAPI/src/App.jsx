import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`h-screen flex items-center justify-center ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold">Current Theme: {theme}</h1>
        <button
          onClick={toggleTheme}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App;
