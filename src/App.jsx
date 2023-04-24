import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      coord: { lon: 103.8501, lat: 1.2897 },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      base: "stations",
      main: {
        temp: 304.55,
        feels_like: 310.28,
        temp_min: 302.61,
        temp_max: 305.51,
        pressure: 1010,
        humidity: 65,
      },
      visibility: 10000,
      wind: { speed: 2.57, deg: 0 },
      clouds: { all: 75 },
      dt: 1682305927,
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
    },
  ]);

  //   const getData = async () => {
  //     const res = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=singapore&appid=45829432c54b1befe19b17865424f95c
  // `
  //     );
  //     const data = await res.json();
  //     setData(data);
  //   };

  useEffect(() => {
    // getData();
  }, []);

  return (
    <div>
      <h2>Project 2</h2>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
