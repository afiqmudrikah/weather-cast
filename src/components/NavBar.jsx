import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header">
      <h1>WeatherCast</h1>
      <ul>
        <li>
          <Link to="/">Current</Link>
        </li>
        <li>
          <input type="text" placeholder="Enter location" />
        </li>
        <li>
          <Link to="/secondpage">Forecast (5 days)</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
