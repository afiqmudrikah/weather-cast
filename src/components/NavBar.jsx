import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserInput from "./UserInput";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const NavBar = (props) => {
  const [alignment, setAlignment] = useState("current");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div className="header">
      <h1>WeatherCast</h1>
      <div className="nav-item">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="navigation buttons"
        >
          <ToggleButton
            value="current"
            aria-label="current"
            sx={{
              "&.Mui-selected": {
                backgroundColor: "grey",
              },
            }}
          >
            <Link to="/">Current</Link>
          </ToggleButton>
          <UserInput
            userInputHandler={props.userInputHandler}
            userEnterInput={props.userEnterInput}
            location={props.location}
          />
          <ToggleButton
            value="forecast"
            aria-label="forecast"
            sx={{
              "&.Mui-selected": {
                backgroundColor: "grey",
              },
            }}
          >
            <Link to="/forecast">Forecast </Link>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default NavBar;
