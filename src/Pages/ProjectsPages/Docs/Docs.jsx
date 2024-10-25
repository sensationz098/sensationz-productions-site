import React from "react";
import "./Docs.css";
import { Link } from "react-router-dom";
import Nav from "../../../Components/ProjectComponents/ProjectsNav/Nav";
import Hero from "../../../Components/ProjectComponents/Hero/Hero";

import banner from "../../../assets/project-banners/docs.png";

import Section1 from "../../../Components/ProjectComponents/Section1/Section1";
import img1 from "../../../assets/projects-img/img1.jpeg";
import img2 from "../../../assets/projects-img/docs.jpeg";

import Img1 from "../../../assets/posters/docs/docs-1.png";
import Img2 from "../../../assets/posters/docs/docs-2.png";
import Img3 from "../../../assets/posters/docs/docs-3.png";
import Img4 from "../../../assets/posters/docs/docs-4.png";

export default function Docs() {
  return (
    <>
      <Nav />
      <Hero bannerImage={banner} />
      <Section1
        heading1={"Documentaries"}
        heading2={"Documentaries"}
        img1={img1}
        img2={img2}
        p1={`Sensationz Productions is a documentary production company dedicated to creating compelling and immersive storytelling. Their work often delves deep into real-life events, social issues, and human experiences, capturing raw emotions and unique perspectives. Through high-quality cinematography and thoughtful narrative structures, Sensationz Productions aims to provoke thought, inspire change, and connect audiences to diverse stories from around the world. Their documentaries blend artistry with authenticity, ensuring that each project resonates on both an intellectual and emotional level.`}
        p2={`Sensationz Productions collaborates with the NGO Chinmay Organization for Rural Development (CORD) to produce impactful documentaries that highlight the organization’s efforts in rural development. Through films like **CORD's Disability Movie** and **CORD's Balvihar**, Sensationz Productions captures the essence of CORD’s initiatives, focusing on empowering individuals with disabilities and promoting educational programs for children. The documentaries are crafted to raise awareness, inspire action, and showcase the transformative work being done in rural communities.`}
      />

      <div className="section2-docs">
        <div className="section2-in stiff-block">
          <h1>{"Some of Our Best Documentaries"}</h1>
          <p className="click-view-new">(Hover & Click to view )</p>

          <div className="videos">
            <div className="videos-layer1">
              <Link
                to={"https://www.youtube.com/watch?v=aocrxOzwrvY&t=5s"}
                target="_blank"
              >
                <img src={Img1} alt="" className="stiff-block" />
              </Link>
              <Link
                to={"https://www.youtube.com/watch?v=3dJ3kc2kVk8"}
                target="_blank"
              >
                <img src={Img2} alt="" className="stiff-block" />
              </Link>
            </div>
            <div className="videos-layer2">
              <Link
                to={"https://www.youtube.com/watch?v=Mn9q771aegg"}
                target="_blank"
              >
                <img src={Img3} alt="" className="stiff-block" />
              </Link>
              <Link
                to={"https://www.youtube.com/watch?v=ZV-reSzPJ6o&t=5s"}
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
