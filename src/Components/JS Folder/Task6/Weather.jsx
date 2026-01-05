import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    setError("");
    setWeather(null);

    try {
      // 1️⃣ Convert city → latitude & longitude
      const geo = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );

      if (!geo.data.results || geo.data.results.length === 0) {
        setError("City not found da machi!");
        return;
      }

      const { latitude, longitude } = geo.data.results[0];

      // 2️⃣ Fetch weather details
      const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );

      setWeather(res.data.current_weather);
    } catch (e) {
      setError("Weather fetch panna mudila da… later try!");
    }
  };

  // 3️⃣ Dynamic icon logic (sun / cloud / rain)
  const getWeatherIcon = (code) => {
    if (code === 0) return "☀️"; // Clear sky
    if (code >= 1 && code <= 3) return "⛅"; // Cloudy
    if (code >= 51 && code <= 67) return "🌧️"; // Drizzle/Rain
    if (code >= 71 && code <= 77) return "❄️"; // Snow
    if (code >= 95) return "⛈️"; // Thunder
    return "🌥️"; 
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", backgroundColor:"aqua", height:"90vh" }}>
      <h2>Live Weather Search 🌍</h2>

      <input
        type="text"
        placeholder="Enter any city…"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={getWeather}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          background: "black",
          color: "white",
        }}
      >
        Search
      </button>

      {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}

      {/* WEATHER BOX */}
      {weather && (
        <div
          style={{
            marginTop: "25px",
            padding: "20px",
            width: "300px",
            borderRadius: "10px",
            background: "#f3f3f3",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ fontSize: "45px", margin: 0 }}>
            {getWeatherIcon(weather.weathercode)}
          </h2>
          

          <p style={{ fontSize: "20px" }}>
            🌡️ Temperature: <b>{weather.temperature}°C</b>
          </p>

          <p style={{ fontSize: "20px" }}>
            🌬️ Wind Speed: <b>{weather.windspeed} km/h</b>
          </p>

          <p style={{ fontSize: "20px" }}>
            ⏰ Time: <b>{weather.time}</b>
          </p>
        </div>
      )}
    </div>
  );
}
