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

      // 1) OR operator: sets 'previousData' to 'data' if it exists, if not, sets 'previousData' to newData.
      // 2) Initially 'previousData' will be set to newData, since 'data' will initially be an empty string.
      // 3) 'data' will always hold the new API response data.
      // 4) Subsequent calls, 'previousData' will then be set to 'data' since it is not falsy.
      if (currentRes.status === 200) {
        const newData = await currentRes.json();
        setPreviousData(data || newData);
        setData(newData);
        setLocation("");
      } else {
        alert("Invalid country");
      }
      if (forecastRes.status === 200) {
        const newForecastData = await forecastRes.json();
        setForecastData(newForecastData);
      }
    }
  };

  return (
    <>
      {/* <div>Data: {JSON.stringify(data.name)}</div>
      <div>Previous Data: {JSON.stringify(previousData.name)}</div> */}
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
