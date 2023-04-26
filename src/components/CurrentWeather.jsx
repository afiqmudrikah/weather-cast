import React from "react";

const CurrentWeather = (props) => {
  const data = props.data;
  const previousData = props.previousData;

  const iconID = data.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/wn/${iconID}@2x.png`;

  const prevIconID = previousData.weather[0].icon;
  const prevIconURL = `https://openweathermap.org/img/wn/${prevIconID}@2x.png`;

  // Check if there is new data available
  const containData = data === previousData ? false : true;

  return (
    <>
      <div className="container">
        <div className="temp-container">
          <h1>{data.name}</h1>
          <div className="inner-container">
            <h2>Current temp: {Math.floor(data.main.temp)} °C</h2>
            <p>{data.weather[0].main}</p>
            <img src={iconURL} alt="" />
            <p>Humidity: {data.main.humidity} %</p>
            <p>Wind speed: {data.wind.speed} m/sec</p>
          </div>
        </div>

        {containData && (
          <div className="temp-container">
            <h1>{previousData.name}</h1>
            <div className="inner-container">
              <h2>Current temp: {Math.floor(previousData.main.temp)} °C</h2>
              <p>{previousData.weather[0].main}</p>
              <img src={prevIconURL} alt="" />
              <p>Humidity: {previousData.main.humidity} %</p>
              <p>Wind speed: {previousData.wind.speed} m/sec</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CurrentWeather;
