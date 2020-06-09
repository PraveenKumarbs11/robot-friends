import React from "react";
import "./cardStyle.css";
const Card = ({ name, email, id }) => {
  return (
    <div className="Card bg-light-green dib br3 pa2 ma2 bw2 shadow-5 grow">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
