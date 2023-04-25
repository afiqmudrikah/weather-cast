import React from "react";
import { Link } from "react-router-dom";
import UserInput from "./UserInput";

const NavBar = (props) => {
  return (
    <div className="header">
      <h1>WeatherCast</h1>
      <ul>
        <li>
          <Link to="/">Current</Link>
        </li>
        <li>
          <UserInput userInputHandler={props.userInputHandler} />
        </li>

        <li>
          <Link to="/forecast">Forecast (5 days)</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
