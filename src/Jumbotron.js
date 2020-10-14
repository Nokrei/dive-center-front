import React from "react";


const Jumbotron = (props) => {
  return (

<div className="jumbotron">   
  
      <h1 className="display-3">{props.title}</h1>
      <h1 className="display-2 trip">{props.trip}</h1>
    
      

      <p className="lead">{props.text}</p>
      
      <p>{props.para}</p>      
    </div>
  );
};
export default Jumbotron;
