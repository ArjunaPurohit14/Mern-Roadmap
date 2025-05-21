import React from "react";

function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
        >
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{movie.title}</h2>
            <p className="text-gray-500">Year: {movie.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
