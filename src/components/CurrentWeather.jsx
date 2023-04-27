import React from "react";
import styles from "./CurrentWeather.module.css";

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
      <div className={styles.container}>
        <div className={styles["temp-container"]}>
          <h1>{data.name}</h1>
          <div className={styles["inner-container"]}>
            <h2>Temperature: {Math.round(data.main.temp)}°C</h2>
            <h3>{data.weather[0].main}</h3>
            <img src={iconURL} alt="weather icon" />
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind speed: {data.wind.speed} m/sec</p>
          </div>
        </div>

        {containData && (
          <div className={styles["temp-container"]}>
            <h1>{previousData.name}</h1>
            <div className={styles["inner-container"]}>
              <h2>Temperature: {Math.floor(previousData.main.temp)} °C</h2>
              <h3>{previousData.weather[0].main}</h3>
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
