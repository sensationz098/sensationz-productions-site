import React from "react";
import "./Hero.css";
export default function Hero(props) {
  const { bannerImage } = props;
  return (
    <>
      <div className="hero-main" style={{ backgroundColor: "" }}>
        <img src={bannerImage} alt="" />
      </div>
    </>
  );
}
