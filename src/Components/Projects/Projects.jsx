import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsStyle.css";

// import Digital from "../../assets/services-img/digital.jpg";
// import Faces from "../../assets/services-img/faces.jpg";
// import PerformingArts from "../../assets/services-img/performingarts.jpg";
// import Productions from "../../assets/services-img/productions.jpg";

import movies from "../../assets/projects-img/movies.jpg";
import webSeries from "../../assets/projects-img/webSeries.jpg";
import documentary from "../../assets/projects-img/documentary.jpg";
import addFilms from "../../assets/projects-img/addFilms.jpg";
import talkShow from "../../assets/projects-img/talkShow.jpg";
import youtube from "../../assets/projects-img/youtube.jpg";
import more from "../../assets/projects-img/more.jpg";

import icon_projects from "../../assets/projects-img/icon-projects.png";

// projetpages
import AddFilms from "../../Pages/ProjectsPages/AddFilms/AddFilms";
import Docs from "../../Pages/ProjectsPages/Docs/Docs";
import Explore from "../../Pages/ProjectsPages/Explore/Explore";
import Movies from "../../Pages/ProjectsPages/Movies/Movies";
import TalkShow from "../../Pages/ProjectsPages/TalkShow/TalkShow";
import WebSeries from "../../Pages/ProjectsPages/WebSeries/WebSeries";
import Youtube from "../../Pages/ProjectsPages/Youtube/Youtube";

function Project(props) {
  const { img, to, caption } = props;
  return (
    <>
      <div className="service">
        <img src={img} alt="" />
        <Link to={to} target="blank_">
          <div className="caption">
            <img src={icon_projects} alt="" className="icon_projects" />
            <h3>{caption}</h3>
          </div>
        </Link>
      </div>
    </>
  );
}

export default function Projects() {
  return (
    <>
      <div className="services stiff-block">
        <Project
          img={movies}
          to={"/movies&shortfilms"}
          caption={"Movies/Short Films"}
        />
        <Project img={webSeries} to={"/WebSeries"} caption={"Web Series"} />
        <Project img={documentary} to={"/Docs"} caption={"Documentaries"} />
        <Project img={addFilms} to={"/AddFilms"} caption={"Add Films"} />
      </div>
      <div className="services stiff-block">
        <Project img={talkShow} to={"/TalkShow"} caption={"Talk Show"} />
        <Project img={youtube} to={"/Youtube"} caption={"youtube Videos"} />
        <Project img={more} to={"/Explore"} caption={"Explore More"} />
        <Project img={more} to={"/Explore"} caption={"Explore More"} />
      </div>
    </>
  );
}
