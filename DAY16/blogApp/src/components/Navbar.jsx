import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md flex items-center justify-between">
      {/* Logo or Site Title */}
      <h1 className="text-2xl font-bold text-gray-800">MyBlog</h1>

      {/* Navigation Links (optional) */}
      <div className="space-x-4 hidden md:flex">
        <a href="#" className="text-gray-600 hover:text-blue-500 transition">Home</a>
        <a href="#" className="text-gray-600 hover:text-blue-500 transition">About</a>
        <a href="#" className="text-gray-600 hover:text-blue-500 transition">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
