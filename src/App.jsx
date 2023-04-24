import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SecondPage from "./pages/SecondPage";
import NavBar from "./components/NavBar";

function App() {
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
  //     `https://api.openweathermap.org/data/2.5/weather?q=singapore&units=metric&appid=45829432c54b1befe19b17865424f95c
  // `
  //   );
  //   const data = await res.json();
  //   setData(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/secondpage" element={<SecondPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
