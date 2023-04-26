import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState("");
  const [previousData, setPreviousData] = useState("");

  const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=45829432c54b1befe19b17865424f95c
  `;

  const forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metrics&appid=45829432c54b1befe19b17865424f95c`;

  // const [data, setData] = useState({
  //   coord: { lon: 103.8501, lat: 1.2897 },
  //   weather: [
  //     {
  //       id: 803,
  //       main: "Clouds",
  //       description: "broken clouds",
  //       icon: "04d",
  //     },
  //   ],
  //   base: "stations",
  //   main: {
  //     temp: 32.94,
  //     feels_like: 39.72,
  //     temp_min: 30.58,
  //     temp_max: 35.7,
  //     pressure: 1008,
  //     humidity: 61,
  //   },
  //   visibility: 10000,
  //   wind: { speed: 3.09, deg: 70 },
  //   clouds: { all: 75 },
  //   dt: 1682317169,
  //   sys: {
  //     type: 1,
  //     id: 9470,
  //     country: "SG",
  //     sunrise: 1682290687,
  //     sunset: 1682334435,
  //   },
  //   timezone: 28800,
  //   id: 1880252,
  //   name: "Singapore",
  //   cod: 200,
  // });

  // Retrieve data from openweathermap API
  // const getData = async () => {
  //   const res = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=singapore&units=metric&appid=45829432c54b1befe19b17865424f95c
  // `
  //   );
  //   if (res.status === 200) {
  //     const data = await res.json();
  //     setData(data);
  //   } else {
  //     console.log(res.status);
  //     alert("ERROR!");
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const userInputHandler = (e) => {
    setLocation(e.target.value);
  };

  // API call when user inputs a location
  const userEnterInput = async (e) => {
    if (e.key === "Enter" && location !== "") {
      const res = await fetch(currentWeatherURL);

      // 1) OR operator: sets 'previousData' to 'data' if it exists, if not, sets 'previousData' to newData.
      // 2) Initially 'previousData' will be set to newData, since 'data' will initially be an empty string.
      // 3) 'data' will always hold the new API response data.
      // 4) Subsequent calls, 'previousData' will then be set to 'data' since it is not falsy.
      if (res.status === 200) {
        const newData = await res.json();
        setPreviousData(data || newData);
        setData(newData);
        setLocation("");
      } else {
        alert("Invalid country");
      }
    }
  };

  return (
    <>
      <div>Data: {JSON.stringify(data.name)}</div>
      <div>Previous Data: {JSON.stringify(previousData.name)}</div>
      <NavBar
        userInputHandler={userInputHandler}
        userEnterInput={userEnterInput}
        location={location}
      />
      {data && (
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
            element={<ForecastWeather location={location} data={data} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
