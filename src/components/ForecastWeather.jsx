import React from "react";
import styles from "./ForecastWeather.module.css";

const ForecastWeather = (props) => {
  const forecastData = props.forecastData;
  return (
    <>
      <div className={styles.container}>
        <div>
          {forecastData.list.map((item, idx) => {
            if (idx % 8 === 0) {
              return <p>{item.main.temp}</p>;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default ForecastWeather;
