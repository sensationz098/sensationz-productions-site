import React from "react";
import "./Hero.css";
import banner from "../../../assets/projects-img/projects-banner.png";
export default function Hero(props) {
  const { color, title, image } = props;
  return (
    <>
      <div className="hero-main" style={{ backgroundColor: "" }}>
        <img src={banner} alt="" />
      </div>
    </>
  );
}
