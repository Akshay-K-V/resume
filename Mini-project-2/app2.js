const weatherData = [
  { city: 'New Delhi', temp: '32°C', desc: 'Sunny' },
  { city: 'Bangalore', temp: '27°C', desc: 'Cloudy' },
  { city: 'Mumbai', temp: '30°C', desc: 'Rainy' },
];

let i = 0;

function toggleWeather() {
  i = (i + 1) % weatherData.length;
  document.getElementById("location").innerText = `🌤️ ${weatherData[i].city}`;
  document.getElementById("temperature").innerText = weatherData[i].temp;
  document.getElementById("description").innerText = weatherData[i].desc;
}