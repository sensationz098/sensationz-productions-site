import React from "react";
import "./Hero.css";
export default function Hero(props) {
  const { color, title, image } = props;
  return (
    <>
      <div className="hero-main" style={{ backgroundColor: "" }}>
        {/* <img src="" alt="" /> */}
        <h1 className="title-hero">{title}</h1>
      </div>
    </>
  );
}
