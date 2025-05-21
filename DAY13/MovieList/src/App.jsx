import React from "react";
import MovieList from "./components/MovieList";

function App() {
  const movies = [
    {
      title: "Inception",
      year: 2010,
      poster: "https://m.media-amazon.com/images/I/51NbVEuw1HL.jpg"
    },
    {
      title: "Interstellar",
      year: 2014,
      poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
    },
    {
      title: "The Dark Knight",
      year: 2008,
      poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 Movie List</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
