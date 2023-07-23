import React from "react";
import card_image from "../images/card.jpg";
import "./card.css";
import GreenButton from "./GreenButton";
import Rating from "./Rating";
function Card() {
  return (
    <div className="card">
      <img src={card_image} className="card_image" alt="card image" />

      <div className="card_info">
        <h3>C/C++/Python/Java</h3>
        <p className="price">Price: 899</p>
        <Rating rating={3} />
      </div>
      <div className="card_footer">
        <GreenButton link="#" text="View More" />
      </div>
    </div>
  );
}

export default Card;
