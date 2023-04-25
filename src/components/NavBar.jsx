import React from "react";
import { Link } from "react-router-dom";
import UserInput from "./UserInput";

const NavBar = (props) => {
  return (
    <div className="header">
      <h1>WeatherCast {props.location}</h1>
      <ul>
        <li>
          <Link to="/">Current</Link>
        </li>
        <li>
          <UserInput
            userInputHandler={props.userInputHandler}
            userEnterInput={props.userEnterInput}
            location={props.location}
          />
        </li>

        <li>
          <Link to="/forecast">Forecast (5 days)</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
