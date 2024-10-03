import React from "react";
import "./TalkShow.css";
import { Link } from "react-router-dom";
import Nav from "../../../Components/ProjectComponents/ProjectsNav/Nav";
import Hero from "../../../Components/ProjectComponents/Hero/Hero";

import banner from "../../../assets/project-banners/talkShow.png";

import Section1 from "../../../Components/ProjectComponents/Section1/Section1";
import img1 from "../../../assets/projects-img/talk1.jpeg";
import img2 from "../../../assets/projects-img/talk2.jpeg";

import Img1 from "../../../assets/posters/talk/talk1.jpg";
import Img2 from "../../../assets/posters/talk/talk2.jpg";
import Img3 from "../../../assets/posters/talk/talk3.jpg";
import Img4 from "../../../assets/posters/talk/talk4.jpg";

export default function TalkShow() {
  return (
    <>
      <Nav />
      <Hero bannerImage={banner} />
      <Section1
        heading1={"Interviews & Talk Shows"}
        heading2={"Interviews & Talk Shows"}
        img1={img1}
        img2={img2}
        p1={`Sensations Productions is a dynamic media company specializing in producing high-quality interviews and talk shows. With a focus on engaging content, they create thought-provoking conversations with experts, influencers, and notable figures across various industries. Their productions are known for their professional execution, insightful discussions, and ability to captivate audiences, making them a trusted name in talk show and interview formats.`}
        p2={`Sensations Productions is renowned for producing engaging interviews and talk shows that spotlight influential personalities and industry leaders. Their productions include "Interview with Fashion Designer Vandana Vinod," "Interview with Banwari Lal Jhol," and "Chit Chat With Hiten Tejwani." These shows delve into the lives, careers, and insights of the guests, offering viewers unique perspectives and inspiring conversations. With a focus on high production quality and compelling dialogue, Sensations Productions creates content that resonates with a broad audience.`}
      />
      <div className="section2-talkshow">
        <div className="section2-in stiff-block">
          <h1>{"Interviews & Talk Shows"}</h1>
          <p className="click-view-new">(Hover & Click to view )</p>

          <div className="videos">
            <div className="videos-layer1">
              <Link
                to={"https://www.youtube.com/watch?v=AYVcpq8HsOo"}
                target="_blank"
              >
                <img src={Img1} alt="" className="stiff-block" />
              </Link>
              <Link
                to={
                  "https://www.youtube.com/watch?v=1YU7CJ8eGJ8&list=PLkZUBLpxN32oamFwxTwDN22hcitJODKhR&index=4&t=2s"
                }
                target="_blank"
              >
                <img src={Img2} alt="" className="stiff-block" />
              </Link>
            </div>

            <div className="videos-layer2">
              <Link
                to={
                  "https://www.youtube.com/watch?v=sq1Zy4hlSlU&list=PLkZUBLpxN32oamFwxTwDN22hcitJODKhR&index=10&t=143s"
                }
                target="_blank"
              >
                <img src={Img3} alt="" className="stiff-block" />
              </Link>
              <Link
                to={
                  "https://www.youtube.com/watch?v=1EtzFKSb6SU&list=PLkZUBLpxN32oamFwxTwDN22hcitJODKhR&index=8&t=92s"
                }
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
