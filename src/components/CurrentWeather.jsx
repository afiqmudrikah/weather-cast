import React from "react";

const CurrentWeather = (props) => {
  const data = props.data;

  const iconID = data.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/wn/${iconID}@2x.png`;

  return (
    <>
      <div className="temp-container">
        <h1>{data.name}</h1>
        <div className="inner-container">
          <h2>Current temp: {Math.floor(data.main.temp)} °C</h2>
          <p>{data.weather[0].main}</p>
          <img src={iconURL} alt="" />
          {/* <p>Max temp: {Math.floor(data.main["temp_max"])} °C</p>
          <p>Min temp: {Math.floor(data.main["temp_min"])} °C</p> */}
          <p>Humidity: {data.main.humidity} %</p>
          <p>Wind speed: {data.wind.speed} m/sec</p>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
