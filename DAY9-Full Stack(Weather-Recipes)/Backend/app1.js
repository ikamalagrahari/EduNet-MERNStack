const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
const port = 3000;

// WeatherStack API key (replace it with your actual API key)
const weatherStackApiKey = 'c0ca473506e52bb08f29dde6225322e7';

// Fetch real weather data from WeatherStack
async function fetchWeatherData(city) {
  try {
    const response = await axios.get(`http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=${city}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

// Get weather data for a city (real data from WeatherStack)
app.get("/city/:id", async (req, res) => {
  const cityName = req.params.id;

  // Fetch the data for the city
  const weatherData = await fetchWeatherData(cityName);

  if (weatherData) {
    // Send real-time weather data
    res.json({
      city: weatherData.location.name,
      temperature: weatherData.current.temperature,
      pressure: weatherData.current.pressure,
      wind: weatherData.current.wind_speed,
      city_img: `https://www.weatherstack.com/images/ws_icon_${weatherData.current.weather_icons[0]}`,
      logo: weatherData.current.weather_icons[0], // Using the weather icon as logo
    });
  } else {
    res.status(404).send("City not found or data not available");
  }
});

// Home route (get data for a default city)
app.get("/", async (req, res) => {
  const defaultCity = "Mumbai"; // You can change this to any city
  const weatherData = await fetchWeatherData(defaultCity);

  if (weatherData) {
    res.json({
      city: weatherData.location.name,
      temperature: weatherData.current.temperature,
      pressure: weatherData.current.pressure,
      wind: weatherData.current.wind_speed,
      city_img: `https://www.weatherstack.com/images/ws_icon_${weatherData.current.weather_icons[0]}`,
      logo: weatherData.current.weather_icons[0], // Using the weather icon as logo
    });
  } else {
    res.status(404).send("City not found or data not available");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
