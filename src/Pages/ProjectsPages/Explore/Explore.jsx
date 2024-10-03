import React from "react";
import "./Explore.css";
import { Link } from "react-router-dom";
import Nav from "../../../Components/ProjectComponents/ProjectsNav/Nav";
import Hero from "../../../Components/ProjectComponents/Hero/Hero";

import banner from "../../../assets/project-banners/explore.png";

import Section1 from "../../../Components/ProjectComponents/Section1/Section1";
import img1 from "../../../assets/projects-img/img1.jpeg";
import img2 from "../../../assets/projects-img/img2.jpeg";

import Img1 from "../../../assets/posters/movies/movie1.jpg";
import Img2 from "../../../assets/posters/ShortFilms/5.png";
import Img3 from "../../../assets/posters/ShortFilms/12.jpg";
import Img4 from "../../../assets/posters/ShortFilms/7.png";
import Img5 from "../../../assets/posters/ShortFilms/8.jpg";
import Img6 from "../../../assets/posters/ShortFilms/9.jpg";

export default function Explore() {
  return (
    <>
      <Nav />
      <Hero bannerImage={banner} />
      <Section1
        heading1={"Movies &  Short Films"}
        heading2={"Movies &  Short Films"}
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
    </>
  );
}
