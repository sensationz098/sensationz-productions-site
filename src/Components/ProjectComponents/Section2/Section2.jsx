import React from "react";
import "./Section2.css";
import { Link } from "react-router-dom";
import { PiMouseLeftClickFill } from "react-icons/pi";

export default function Section2(props) {
  const {
    heading1,
    heading2,
    p1,
    p2,
    img1,
    img2,
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
  } = props;
  return (
    <>
      <div className="section2">
        <div className="section2-in">
          <h1>{heading1}</h1>
          <p className="click-view">(Hover & Click to view )</p>
          <div className="videos">
            <Link
              to="https://www.youtube.com/watch?v=XLeTk10NXss&t=346s"
              target="_blank"
            >
              <img src={Img1} alt="" />
            </Link>
            <Link
              to="https://www.youtube.com/watch?v=u-A8YslhDV4&t=1s"
              target="_blank"
            >
              <img src={Img4} alt="" />
            </Link>
            <Link
              to="https://www.youtube.com/watch?v=kzO6VlzTLWU&t=6s"
              target="_blank"
            >
              <img src={Img6} alt="" />
            </Link>
            <Link
              to="https://www.youtube.com/watch?v=YG4eGPvXadk&t=1s"
              target="_blank"
            >
              <img src={Img2} alt="" />
            </Link>
            <Link
              to="https://www.youtube.com/watch?v=zDGm_hu6nkY"
              target="_blank"
            >
              <img src={Img3} alt="" />
            </Link>
            <Link
              to="https://www.youtube.com/watch?v=IliQhEe89Qc"
              target="_blank"
            >
              <img src={Img5} alt="" />
            </Link>
          </div>
          <div className="btn-bar">
            <button className="btn dark-btn">View More</button>
          </div>
        </div>
      </div>
    </>
  );
}
