import React from "react";
import "./Section2.css";
import { Link } from "react-router-dom";

export default function Section2(props) {
  const {
    heading1,
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    to1,
    to2,
    to3,
    to4,
    to5,
    to6,
  } = props;
  return (
    <>
      <div className="section2">
        <div className="section2-in stiff-block">
          <h1>{heading1}</h1>
          <p className="click-view-new">(Hover & Click to view )</p>

          <div className="videos">
            <div className="videos-layer1">
              <Link to={to1} target="_blank">
                <img src={Img1} alt="" className="stiff-block" />
              </Link>
              <Link to={to2} target="_blank">
                <img src={Img2} alt="" className="stiff-block" />
              </Link>
              <Link to={to3} target="_blank">
                <img src={Img3} alt="" className="stiff-block" />
              </Link>
            </div>

            <div className="videos-layer2">
              <Link to={to4} target="_blank">
                <img src={Img4} alt="" className="stiff-block" />
              </Link>
              <Link to={to5} target="_blank">
                <img src={Img5} alt="" className="stiff-block" />
              </Link>
              <Link to={to6} target="_blank">
                <img src={Img6} alt="" className="stiff-block" />
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
