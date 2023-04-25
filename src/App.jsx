import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather";

function App() {
  const [location, setLocation] = useState([]);

  const [data, setData] = useState({
    coord: { lon: 103.8501, lat: 1.2897 },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 32.94,
      feels_like: 39.72,
      temp_min: 30.58,
      temp_max: 35.7,
      pressure: 1008,
      humidity: 61,
    },
    visibility: 10000,
    wind: { speed: 3.09, deg: 70 },
    clouds: { all: 75 },
    dt: 1682317169,
    sys: {
      type: 1,
      id: 9470,
      country: "SG",
      sunrise: 1682290687,
      sunset: 1682334435,
    },
    timezone: 28800,
    id: 1880252,
    name: "Singapore",
    cod: 200,
  });

  // Retrieve data from openweathermap API
  // const getData = async () => {
  //   const res = await fetch(
  // `https://api.openweathermap.org/data/2.5/weather?q=Singapore&units=metric&appid=45829432c54b1befe19b17865424f95c
  // `;
  //   );
  //   const data = await res.json();
  //   setData(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const userInputHandler = (e) => {
    if (e.key === "Enter") {
      setLocation(e.target.value);
    }
  };

  return (
    <>
      <NavBar userInputHandler={userInputHandler} />
      <Routes>
        <Route
          path="/"
          element={<CurrentWeather location={location} data={data} />}
        />
        <Route path="/forecast" element={<ForecastWeather />} />
      </Routes>
    </>
  );
}

export default App;
