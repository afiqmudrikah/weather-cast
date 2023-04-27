import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState("");
  const [previousData, setPreviousData] = useState("");
  const [forecastData, setForecastData] = useState("");

  const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=45829432c54b1befe19b17865424f95c
  `;

  const forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=45829432c54b1befe19b17865424f95c`;

  const userInputHandler = (e) => {
    setLocation(e.target.value);
  };

  // API call when user inputs a location
  const userEnterInput = async (e) => {
    if (e.key === "Enter" && location !== "") {
      const currentRes = await fetch(currentWeatherURL);
      const forecastRes = await fetch(forecastWeatherURL);
      if (currentRes.status === 200 && forecastRes.status === 200) {
        const newData = await currentRes.json();
        const newForecastData = await forecastRes.json();
        setPreviousData(data || newData);
        setData(newData);
        setForecastData(newForecastData);
        setLocation("");
      } else {
        alert("Invalid country");
      }
    }
  };

  return (
    <>
      <NavBar
        userInputHandler={userInputHandler}
        userEnterInput={userEnterInput}
        location={location}
      />
      {forecastData && (
        <Routes>
          <Route
            path="/"
            element={
              <CurrentWeather
                location={location}
                data={data}
                previousData={previousData}
              />
            }
          />
          <Route
            path="/forecast"
            element={
              <ForecastWeather
                location={location}
                forecastData={forecastData}
              />
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
