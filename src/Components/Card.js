import React from "react";
import Star from "../Assets/Star.svg";
export default function Card(props) {
  console.log(props);
  return (
      <div className="card">
        <img
          className="card__img"
          src={require(`../Assets/Athlete.svg`).default}
          alt="dynamic"
        />
        <div className="card__content">
          <div className="card__stats">
            <img className="card__star" src={Star} alt="star" />
            <span className="card__rating">{props.item.stats.rating}</span>
            <span className="card__reviewCount">
              ({props.item.stats.reviewCount}).
            </span>
            <span className="card__location">{props.item.location}</span>
          </div>
          <div className="card__text">{props.item.title}</div>
          <div className="card__price">
            <strong>From ${props.item.price}</strong> / person
          </div>
        </div>
      </div>
  );
}
