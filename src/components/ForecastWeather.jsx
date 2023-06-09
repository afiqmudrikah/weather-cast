import React from "react";
import styles from "./ForecastWeather.module.css";

const ForecastWeather = (props) => {
  const forecastData = props.forecastData;

  return (
    <>
      <div className={styles["outer-container"]}>
        <h1>{forecastData.city.name} (5-Day forecast)</h1>
        <div className={styles.container}>
          {/* Mapping data */}
          {forecastData.list.map((item, idx) => {
            const date = new Date(item["dt_txt"]);
            const dayOfWeek = new Intl.DateTimeFormat("en-US", {
              weekday: "long",
            }).format(date);
            // Store weather icon URL
            const iconID = item.weather[0].icon;
            const iconURL = `https://openweathermap.org/img/wn/${iconID}@2x.png`;

            if (idx % 8 === 0) {
              return (
                <div className={styles["daily-card"]}>
                  <h2>{dayOfWeek}</h2>
                  <h2>{Math.round(item.main.temp)}°C</h2>
                  <p>{item.weather[0].main}</p>
                  <img src={iconURL} alt="weather icon" />
                  <p>Humidity: {item.main.humidity}%</p>
                  <p>Wind speed: {item.wind.speed} m/sec</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default ForecastWeather;
