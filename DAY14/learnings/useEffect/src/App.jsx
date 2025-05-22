import { useEffect, useState } from 'react';

function App() {
  const cities = ['Delhi', 'London', 'Tokyo', 'New York', 'Paris', 'Sydney', 'Dubai'];
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [inputCity, setInputCity] = useState('');
  const [error, setError] = useState('');

  const apiKey = 'ea1cb91f2cf9786724e45e9ea2311a21'; // 👈 Replace with your real OpenWeatherMap API key

  // 🟢 Fetch weather data for a given city
  const fetchWeather = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );

      if (!res.ok) throw new Error('City not found');

      const data = await res.json();
      setWeather(data);
      setCity(cityName);
      setError('');
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  // 🔄 When page loads: choose random city
  useEffect(() => {
    const random = cities[Math.floor(Math.random() * cities.length)];
    fetchWeather(random);
  }, []);

  // 🔘 Handle user search
  const handleSearch = () => {
    if (inputCity.trim() !== '') {
      fetchWeather(inputCity.trim());
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🌦️ Weather App</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Enter city name"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button onClick={handleSearch} style={{ padding: '8px 12px' }}>
          Search
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '10px', display: 'inline-block' }}>
          <h2>{city}</h2>
          <p>{weather.weather[0].description}</p>
          <p>{weather.main.temp}°C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Weather Icon"
          />
        </div>
      )}
    </div>
  );
}

export default App;
