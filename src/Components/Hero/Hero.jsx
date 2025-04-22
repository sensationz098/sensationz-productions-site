import React from "react";
import "./HeroStyle.css";
import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="hero container">
        <div className="hero-text hero-block">
          <h1>Finding Creativity</h1>
          <h3>with</h3>
          <h1 className="last-line">
            <span className="last-line-color">sensationz</span> Productions
          </h1>
          <p>
            Creating Entertaining, Inspiring and Extraordinary Stories <br />
            From Sensationz For India.
          </p>
          <Link
            to="/projects/webseries"
            smooth={true}
            offset={-210}
            durastion={500}
          >
            <button className="btn home-btn">Watch Now</button>
          </Link>
          {/* <div className="pictures">
            <img src={clapper} alt="" className="hero-img img-l" />
            <img src={reel} alt="" className="hero-img img-r" />
          </div> */}
        </div>
      </div>
    </>
  );
}
