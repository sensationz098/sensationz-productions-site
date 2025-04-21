import React from "react";
import "./honemoonComponent.css";
const HonemoonComponent = ({ title, iframeSRC, link }) => {
  return (
    <div className="honemoonComp">
      <iframe
        width="240"
        height="135"
        src={iframeSRC}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h4>{title}</h4>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="btn dark-btn stiff-blocks">See More</button>
      </a>
    </div>
  );
};
export default HonemoonComponent;
