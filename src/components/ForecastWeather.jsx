import React, { useState } from "react";

const ForecastWeather = (props) => {
  const [forecastData, setForecastData] = useState("");

  return (
    <>
      <div className="container">
        {/* <div>ForecastWeather</div> */}
        {/* <div>{props.location}</div> */}
      </div>
    </>
  );
};

export default ForecastWeather;
