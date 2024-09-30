import React from "react";
import "./DirectorsStyle.css";
import Card from "../Card/Card";
import harsh from "../../assets/imgAssets/harsh-anand-left.jpg";
import sucheta from "../../assets/imgAssets/sucheta-anand.jpeg";

export default function Directors() {
  return (
    <>
      <div className="directors stiff-block">
        <div className="title-color-box">
          <h1>Meet The Creators</h1>
          <p>
            Who, with their creative minds have created this pool of
            entertainment!
          </p>
        </div>
        <div className="director-img">
          <div className="main-img stiff-block">
            <img src={harsh} alt="" className="harsh" />
            <div className="shade">
              <p>
                Mr. Harsh Anand <br />
                (Movie Director)
              </p>
            </div>
          </div>
          <div className="main-img stiff-block">
            <img src={sucheta} alt="" className="sucheta" />
            <div className="shade">
              <p>
                Ms. Sucheta Anand <br />
                (Movie Producer)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
