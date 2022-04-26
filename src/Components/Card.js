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
          <span className="card__rating"></span>
          <span className="card__reviewCount"></span>
          <span className="card__location"></span>
        </div>
        <div className="card__text"></div>
        <div className="card__price">
          <strong>From $136</strong> / person
        </div>
      </div>
    </div>
  );
}
