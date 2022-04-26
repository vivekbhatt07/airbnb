import React from "react";
import Logo from "../Assets/Logo.svg";
export default function Navbar() {
  return (
    <nav className="nav">
      <img className="nav__logo" src={Logo} alt="logo" />
    </nav>
  );
}
