const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to get weather data
app.get('/weather', async (req, res) => {
  const apiKey = '29efe29b6ed447f8a2f112354241208'; // Your WeatherAPI key
  const city = req.query.city || 'London';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.json({ error: 'Error fetching weather data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
