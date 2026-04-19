const apiKey = "8e268433d7276263714941453a2d383e";

async function getWeather() {
  const city = document.getElementById("city").value;

  if (!city) {
    alert("Please enter a city name");
    return;
  }
  const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temp").innerText = 🌡 Temperature: ${data.main.temp}°C;
    document.getElementById("desc").innerText = ☁ Condition: ${data.weather[0].description};
    document.getElementById("humidity").innerText = 💧 Humidity: ${data.main.humidity}%;
    document.getElementById("wind").innerText = 🌬 Wind: ${data.wind.speed} m/s;
  } catch (error) {
    console.error(error);
    alert("Error fetching data");
  }
}
