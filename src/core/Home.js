import React from "react";
import "../scss/main.scss";
import Base from "./Base";
import Card from "./Card";

const Home = () => {
  return (
    <Base title="Homepage">
      <div className="row text-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Base>
  );
};

export default Home;
