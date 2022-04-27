import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Data from "./Data";
export default function App() {
  const displayCards = Data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card_container">{displayCards}</div>
    </>
  );
}
