import React from "react";
import "./MusicVideos.css";
import { Link } from "react-router-dom";
import Nav from "../../../Components/ProjectComponents/ProjectsNav/Nav";
import Hero from "../../../Components/ProjectComponents/Hero/Hero";

import banner from "../../../assets/project-banners/musicVideos.png";

import Section1 from "../../../Components/ProjectComponents/Section1/Section1";
import img1 from "../../../assets/projects-img/music1.jpeg";
import img2 from "../../../assets/projects-img/music2.jpeg";

import Img1 from "../../../assets/posters/Music/music1.jpg";
import Img2 from "../../../assets/posters/Music/music2.jpg";
import Img3 from "../../../assets/posters/Music/music3.jpg";
import Img4 from "../../../assets/posters/Music/music4.jpg";

export default function Youtube() {
  return (
    <>
      <Nav />
      <Hero bannerImage={banner} />
      <Section1
        heading1={"Music Videos"}
        heading2={"Music Videos"}
        img1={img1}
        img2={img2}
        p1={`Sensationz Productions is known for its captivating storytelling
              and innovative visuals, creating a diverse range of movies and
              short films that resonate with audiences. Their projects often
              explore deep themes, blending drama and emotion with stunning
              cinematography. Whether it's a thought-provoking short or a
              feature film that challenges conventions, Sensationz Productions
              consistently delivers compelling narratives that leave a lasting
              impression. Their commitment to quality and creativity makes them
              a standout in the indie film scene.`}
        p2={`Sensationz Productions has made a mark with its engaging films and
              impactful short stories. Their feature film, "Love and Rajneeti,"
              starring Ravi Kishan, intricately weaves romance and political
              intrigue, captivating audiences with its dynamic narrative. Among
              their notable short films, "Avaidh," featuring Hiten Tejwani,
              delves into complex human emotions, while "Deserved: Story of a
              Cop," starring Manoj Bakshi, offers a gripping look at justice and
              morality. Additionally, "Ab Yahi Mera Ghar Hai," featuring
              Banwarhlal Jhol, explores themes of belonging and identity. Each
              project reflects Sensationz Productions' commitment to
              storytelling that resonates on multiple levels.`}
      />
      <div className="section2-musicVideo">
        <div className="section2-in stiff-block">
          <h1>{"Some of Our Best Music Videos"}</h1>
          <p className="click-view-new">(Hover & Click to view )</p>

          <div className="videos">
            <div className="videos-layer1">
              <Link
                to={"https://www.youtube.com/watch?v=WcHY6n-xnmE&t=8s"}
                target="_blank"
              >
                <img src={Img1} alt="" className="stiff-block" />
              </Link>
              <Link
                to={"https://www.youtube.com/watch?v=WUkZ5P46mrY&t=2s"}
                target="_blank"
              >
                <img src={Img2} alt="" className="stiff-block" />
              </Link>
            </div>
            <div className="videos-layer2">
              <Link
                to={"https://www.youtube.com/watch?v=DZo01JJ7Ha4"}
                target="_blank"
              >
                <img src={Img3} alt="" className="stiff-block" />
              </Link>
              <Link
                to={"https://www.youtube.com/watch?v=hYqVodIo3hI"}
                target="_blank"
              >
                <img src={Img4} alt="" className="stiff-block" />
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
