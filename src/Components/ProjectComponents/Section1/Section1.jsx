import React from "react";
import "./Section1.css";

export default function Section1(props) {
  const { heading1, heading2, p1, p2, img1, img2 } = props;
  return (
    <>
      <div className="section1">
        <div className="section1-in">
          <div className="matterial matterial1">
            <img src={img1} alt="" className="stiff-block" />
            <div className="box1 stiff-block">
              <h1>About {heading1}</h1>
              <p>{p1}</p>
            </div>
          </div>

          <div className="matterial matterial2">
            <img src={img2} alt="" className="stiff-block" />
            <div className="box1 stiff-block">
              <h1>Our {heading2}</h1>
              <p>{p2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
