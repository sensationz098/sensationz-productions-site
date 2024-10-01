import React from "react";
import "./Section1.css";

export default function Section1(props) {
  const { p1, p2, img1, img2 } = props;
  return (
    <>
      <div className="section1">
        <div className="section1-in">
          <div className="matterial matterial1">
            <img src="" alt="" />
            <p>{p1}</p>
          </div>
        </div>
      </div>
    </>
  );
}
