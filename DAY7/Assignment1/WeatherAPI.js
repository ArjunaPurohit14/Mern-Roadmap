function fetchWeatherWithPromises(city) {
    const apiKey = 'ea1cb91f2cf9786724e45e9ea2311a21'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Weather data not found');
        }
        return response.json();
      })
      .then(data => {
        console.log(`Temperature in ${city}: ${data.main.temp}°C`);
      })
      .catch(error => {
        console.error('Error fetching weather:', error.message);  
      });
  }
  fetchWeatherWithPromises('new york');

  //using async and await
  async function fetchWeatherWithAsyncAwait(city) {
    const apiKey = 'ea1cb91f2cf9786724e45e9ea2311a21'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      const data = await response.json();
      console.log(`Temperature in ${city}: ${data.main.temp}°C`);
    } catch (error) {
      console.error('Error fetching weather:', error.message);
    }
  }
  
  fetchWeatherWithAsyncAwait('new york');