import React from "react";
import "./AboutStyle.css";
import aboutImg from "../../assets/imgAssets/about.jpeg";
import playIcon from "../../assets/imgAssets/play-icon-balck.png";

export default function About({ setPlayState }) {
  return (
    <>
      <div className="about">
        <div className="about-left stiff-block">
          <img src={aboutImg} className="about-img" alt="" />
          <img
            src={playIcon}
            className="play-icon"
            alt=""
            onClick={() => {
              setPlayState(true);
            }}
          />
        </div>
        <div className="about-right stiff-block">
          <h2>"Sensationz Productions"</h2>
          <p>
            Established in the year March 2007 by Harsh Anand(Director) and
            supported by Sucheta Anand(Film producer), multifaceted Production
            house creating and identifying experience in the world of media.
            Sensationz Productions got to work , picking strong scripts,
            experimenting with new media, becoming a canvas that is not
            restricted by language or medium. From ad film's to digital media,to
            backing regional cinema,and venturing into short films and web
            series, Sensationz Productions has made some rather brave,
            unconventional choices. All the digital media films of Sensationz
            productions are released on YouTube channel ' Sensationz Media and
            Arts Pvt. Ltd. having more than 76k subscriber and more than 22.2M
            view on Youtube.
          </p>
        </div>
      </div>
    </>
  );
}
