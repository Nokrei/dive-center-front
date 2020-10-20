// 1. Import React
import React from "react";
import { Link } from "react-router-dom";
// 2. Declare the component as a function
const Card = (props) => {
  const cardStyle = {
    width: "20em",
    height: "40em"
  };
  let courseLink = props.title.replace(/\s/g,'')
  return (
    <div className="card-deck" style={cardStyle}>
      <div className="card">
        <img src={props.cardImage} className="card-img-top" alt="..." />
        <div className="card-body ">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          
        </div>
        <Link to={courseLink}className='btn btn-primary'>
            {props.btnLabel}
          </Link>
      </div>
      
    </div>
  );
};



// 3. Export the component
export default Card;
