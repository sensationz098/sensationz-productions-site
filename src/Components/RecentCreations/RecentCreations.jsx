import * as React from "react";
import "./RecentCreations.css";
import { Link } from "react-router-dom";

import img1 from "../../assets/posters/ShortFilms/7.png";
import img2 from "../../assets/posters/ShortFilms/9.jpg";
import img3 from "../../assets/posters/movies/movie1.jpg";
import img4 from "../../assets/posters/ShortFilms/2.jpg";
import img5 from "../../assets/posters/Music/music1.jpg";
import img6 from "../../assets/posters/Music/music2.jpg";
import img7 from "../../assets/posters/WebSeries/web1.jpg";
import img8 from "../../assets/posters/WebSeries/web2.jpg";

export default function RecentCreations() {
  return (
    <>
      <div className="RecentCreations">
        <div className="creation1 stiff-block">
          <Link
            className="stiff-block"
            to={"https://www.youtube.com/watch?v=XLeTk10NXss"}
            target="_blank"
          >
            <img src={img3} alt="" className="creation-img" />
          </Link>
        </div>
        <div className="creation2 stiff-block">
          <Link
            className="stiff-block"
            to={"https://www.imdb.com/title/tt32135791/"}
            target="_blank"
          >
            <img src={img7} alt="" className="creation-img" />
          </Link>
          <Link
            className="stiff-block"
            to={
              "https://www.youtube.com/playlist?list=PLkZUBLpxN32oiqB4CkGOXLslekI3HkYbc"
            }
            target="_blank"
          >
            <img src={img8} alt="" className="creation-img" />
          </Link>
        </div>
        <div className="creation3 stiff-block">
          <Link
            className="stiff-block"
            to={"https://www.youtube.com/watch?v=u-A8YslhDV4&t=6s"}
            target="_blank"
          >
            <img src={img1} alt="" className="creation-img" />
          </Link>
        </div>

        <div className="creation4 stiff-block">
          <Link
            className="stiff-block"
            to={"https://www.youtube.com/watch?v=6S-VReq85Y8"}
            target="_blank"
          >
            <img src={img4} alt="" className="creation-img" />
          </Link>
          <Link
            className="stiff-block"
            to={"https://www.youtube.com/watch?v=kzO6VlzTLWU"}
            target="_blank"
          >
            <img src={img2} alt="" className="creation-img" />
          </Link>
        </div>
        <div className="creation5 stiff-block">
          <Link
            className="stiff-block"
            to={"https://www.youtube.com/watch?v=WcHY6n-xnmE&t=2s"}
            target="_blank"
          >
            <img src={img5} alt="" className="creation-img" />
          </Link>
          <Link
            className="stiff-block"
            to={"https://www.youtube.com/watch?v=WUkZ5P46mrY&t=2s"}
            target="_blank"
          >
            <img src={img6} alt="" className="creation-img" />
          </Link>
        </div>

        <button className="btn dark-btn stiff-block">
          <Link
            className="stiff-block"
            to={"https://www.youtube.com/@SensationzMediaArtsPvtLtd/videos"}
            target="_blank"
          >
            View More
          </Link>
        </button>
      </div>
    </>
  );
}
