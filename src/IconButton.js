import React from "react";

const IconButton = (props) => {
  return (
    <button
      className="btn btn-dark rounded-circle"
      style={{ "marginRight": "10px", width: "42px", height: "42px" }}
    >
      <i className={`fa ${props.icon}`}></i>
    </button>
  );
};

export default IconButton;
