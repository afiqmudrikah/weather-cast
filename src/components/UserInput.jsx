import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Enter location"
        onKeyDown={props.userInputHandler}
      />
    </div>
  );
};

export default UserInput;
