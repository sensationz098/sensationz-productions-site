import { React, useState, useEffect } from "react";

import "./Nav.css";
import { Link } from "react-router-dom";
import MenuIcon from "../../../assets/imgAssets/menu-icon.png";
import logoMain from "../../../assets/imgAssets/logo-main.png";

export default function ServicesNav() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <>
      <div className={`nav container`}>
        <div className="NavLogoCover">
          <Link to="/">
            <img src={logoMain} className="logo-main" alt="" />
          </Link>
        </div>
        <img src={MenuIcon} alt="" className="menu-icon" onClick={toggleMenu} />
        <div className="top-links">
          <ul
            className={`top-links-ul ${mobileMenu ? "" : "hide-mobile-menu"}`}
          >
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/projects/movies-shortfilms"}>
              <li>Movies/ShortFilms</li>
            </Link>
            <Link to={"/projects/webseries"}>
              <li>Web Series</li>
            </Link>
            <Link to={"/projects/documentaries"}>
              <li>Documentaries</li>
            </Link>
            <Link to={"/projects/addfilms"}>
              <li>Add Films</li>
            </Link>
            <Link to={"/projects/talkshow"}>
              <li>Talk Show</li>
            </Link>
            <Link to={"/projects/youtube"}>
              <li>Youtube</li>
            </Link>
            <Link to={"/projects/musicvideos"}>
              <li>Music Videos</li>
            </Link>
            {/* <Link to={"/projects/Explore"}>
              <li>Explore</li>
            </Link> */}
          </ul>
        </div>
      </div>
    </>
  );
}
