import React from "react";
import Athlete from "../Assets/Athlete.svg";
// import Bike from "../Assets/Bike.svg";
import Star from "../Assets/Star.svg";
// import Wedding from "../Assets/Wedding.svg";
export default function Card() {
  return (
    <div className="card">
      <img className="card__img" src={Athlete} alt="dynamic" />
      <div className="card__content">
        <div className="card__stats">
          <img className="card__star" src={Star} alt="star" />
          <span className="card__rating">5.0</span>
          <span className="card__reviewCount">(6).</span>
          <span className="card__location">USA</span>
        </div>
        <div className="card__text">Life lessons with Katie Xaleres</div>
        <div className="card__price">
          <strong>From $136</strong> / person
        </div>
      </div>
    </div>
  );
}
