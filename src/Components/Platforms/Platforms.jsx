import React from "react";
import "./Platforms.css";

import { Link } from "react-router-dom";

import img1 from "../../assets/platforms/mxplayer.png";
import img2 from "../../assets/platforms/hungama.png";
import img3 from "../../assets/platforms/youtube.png";

export default function Platforms() {
  return (
    <>
      <div className="platforms">
        <Link to={"https://www.mxplayer.in/"} target="_blank">
          <img src={img1} alt="" className="stiff-block" />
        </Link>
        <Link to={"https://www.hungama.com/"} target="_blank">
          <img src={img2} alt="" className="stiff-block" />
        </Link>
        <Link
          to={"https://www.youtube.com/@SensationzMediaArtsPvtLtd"}
          target="_blank"
        >
          <img src={img3} alt="" className="stiff-block" />
        </Link>
      </div>
    </>
  );
}
