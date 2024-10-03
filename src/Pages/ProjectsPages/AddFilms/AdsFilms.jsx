import React from "react";
import "./AdsFilms.css";
import { Link } from "react-router-dom";

import Nav from "../../../Components/ProjectComponents/ProjectsNav/Nav";
import Hero from "../../../Components/ProjectComponents/Hero/Hero";

import banner from "../../../assets/project-banners/adsFilms.png";

import Section1 from "../../../Components/ProjectComponents/Section1/Section1";
import img1 from "../../../assets/projects-img/ads1.jpeg";
import img2 from "../../../assets/projects-img/ads2.jpeg";

import Img1 from "../../../assets/posters/ads/Makoons.png";
import Img2 from "../../../assets/posters/ads/Marlin.png";
import Img3 from "../../../assets/posters/ads/MTV.png";
import Img4 from "../../../assets/posters/ads/NDTV.png";

export default function Movies() {
  return (
    <>
      <Nav />
      <Hero bannerImage={banner} />
      <Section1
        heading1={"Movies &  Short Films"}
        heading2={"Movies &  Short Films"}
        img1={img1}
        img2={img2}
        p1={`Sensationz Productions is a dynamic creative agency specializing in high-impact advertisement films. With a keen eye for storytelling and innovative visuals, they craft compelling narratives that captivate audiences and elevate brands. Their talented team combines artistic vision with strategic marketing insights, ensuring each project resonates deeply and drives engagement. Whether for digital campaigns or traditional media, Sensationz Productions is dedicated to delivering standout content that makes a lasting impression.`}
        p2={`Sensationz Productions is renowned for creating captivating advertisement films that leave a lasting impact. Their standout projects include the charming Makoons Playschool ad, which beautifully captures the essence of childhood, and the sleek Marlin Cosmetics ads, showcasing elegance and beauty. They also produce engaging content for platforms like MTV Beats and NDTV, where their own ads highlight their creative prowess and commitment to quality. With a focus on storytelling and visual appeal, Sensationz Productions continues to set the standard in the advertising industry.`}
      />

      <div className="section2-ads">
        <div className="section2-in stiff-block">
          <h1>{"Some of Our Best Ads Films"}</h1>
          <p className="click-view-new">(Hover & Click to view )</p>

          <div className="videos">
            <div className="videos-layer1">
              <Link
                to={"https://www.youtube.com/watch?v=LBcOh1yIGGs"}
                target="_blank"
              >
                <img src={Img1} alt="" className="stiff-block" />
              </Link>
              <Link
                to={"https://www.youtube.com/watch?v=XV_-qNSHy8c&t=71s"}
                target="_blank"
              >
                <img src={Img2} alt="" className="stiff-block" />
              </Link>
            </div>

            <div className="videos-layer2">
              <Link
                to={"https://www.youtube.com/watch?v=nIENqVSHvIw&t=1s"}
                target="_blank"
              >
                <img src={Img3} alt="" className="stiff-block" />
              </Link>
              <Link
                to={"https://www.youtube.com/watch?v=Lnrc1vuLN-c"}
                target="_blank"
              >
                <img src={Img4} alt="" className="stiff-block" />
              </Link>
            </div>
          </div>

          <div className="btn-bar">
            <Link
              to="https://www.youtube.com/@SensationzMediaArtsPvtLtd/featured"
              target="_blank"
            >
              <button className="btn dark-btn stiff-blocks">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
