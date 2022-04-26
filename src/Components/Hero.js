import React from "react";
import Group from "../Assets/Group.svg";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero__img" src={Group} alt="Group" />
      <div className="hero__content">
        <h1 className="hero__head">Online Experience</h1>
        <p className="hero__text">
          Join unique interactive activities led by one-of-akind hosts--all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
