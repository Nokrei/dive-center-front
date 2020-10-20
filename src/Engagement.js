import React from "react";

const Engagement = (props) => {
  return (
    <div className="container-fluid bg-dark" style={{padding: "0.5rem"}}>
      <div
        className="container"
        style={{ display: "flex", "justifyContent": "space-between" }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Engagement;
