import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <input
        value={props.location}
        className="input"
        type="text"
        placeholder="Enter location"
        onChange={props.userInputHandler}
        onKeyDown={props.userEnterInput}
      />
    </div>
  );
};

export default UserInput;
