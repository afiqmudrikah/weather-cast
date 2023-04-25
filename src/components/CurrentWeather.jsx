import React from "react";

const CurrentWeather = (props) => {
  const data = props.data;
  return (
    <>
      <div className="temp-container">
        <h1>{data.name}</h1>
        <div className="inner-container">
          <h2>{data.main.temp}</h2>
          <p>{data.main["temp_min"]}</p>
          <p>{data.main["temp_max"]}</p>
          <p>{data.main.humidity}</p>
          <p>{data.wind.speed}</p>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
