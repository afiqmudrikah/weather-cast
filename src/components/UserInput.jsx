import React from "react";
import TextField from "@mui/material/TextField";

const UserInput = (props) => {
  return (
    <div>
      {/* <input
        value={props.location}
        className="input"
        type="text"
        placeholder="Enter location"
        onChange={props.userInputHandler}
        onKeyDown={props.userEnterInput}
      /> */}

      <TextField
        label="Enter location"
        value={props.location}
        onChange={props.userInputHandler}
        onKeyDown={props.userEnterInput}
        sx={{
          "& label.Mui-focused": {
            color: "black",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
      />
    </div>
  );
};

export default UserInput;
