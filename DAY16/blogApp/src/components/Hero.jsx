import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-[70vh] bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center text-center px-4">
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Welcome to MyBlog
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-6">
          Discover interesting posts, ideas, and stories from around the world.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
