import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img className="card__img" src="../Assets/Athlete.svg" alt="dynamic" />
      <div className="card__content">
        <div className="card__stats">
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
