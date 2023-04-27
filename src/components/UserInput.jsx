import React from "react";
import TextField from "@mui/material/TextField";

const UserInput = (props) => {
  return (
    <div>
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
