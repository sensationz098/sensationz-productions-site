import React from "react";
import "./WebSeries.css";
import { Link } from "react-router-dom";
import Nav from "../../../Components/ProjectComponents/ProjectsNav/Nav";
import Hero from "../../../Components/ProjectComponents/Hero/Hero";

import banner from "../../../assets/project-banners/webSeries.png";
import HonemoonComponent from "../../../Components/ProjectComponents/Episode/honemoonComponent";

import Section1 from "../../../Components/ProjectComponents/Section1/Section1";
import img1 from "../../../assets/projects-img/web1.jpeg";
import img2 from "../../../assets/projects-img/web2.jpeg";

import Img1 from "../../../assets/posters/WebSeries/web1.jpg";
import Img2 from "../../../assets/posters/WebSeries/web2.jpg";

export default function WebSeries() {
  return (
    <>
      <Nav />
      <Hero bannerImage={banner} />

      <div className="section2-webseries">
        <div className="section2-in stiff-block">
          {/* <h1>{"Our Latest Collections"}</h1>
          <p className="click-view-new">(Hover & Click to view )</p> */}

          <div className="videos">
            <div className="videos-layer1">
              <div className="webseries-title">
                <h1>Pre Wedding Honeymoon (Episode 4)</h1>
                <p>(Hover & Click to view )</p>
              </div>

              <iframe
                width="950"
                height="435"
                src="https://www.youtube.com/embed/PN7VZqhnm2U?si=6HplIF8RSJ0aqLQD"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              {/* <iframe src="" frameborder="0"></iframe>
              <Link
                to={"https://www.imdb.com/title/tt32135791/"}
                target="_blank"
              >
                <img src={Img1} alt="" className="stiff-block" />
              </Link> */}
            </div>
          </div>

          {/* <div className="btn-bar"> */}

          <div className="previous-container">
            <h3>Previous Episodes</h3>
            <div className="series-list">
              <HonemoonComponent
                title="Pre Wedding Honeymoon | EP-1 "
                link="https://youtu.be/THo-4pYuWvI?si=bQUQXspRV9OXAbv4"
                iframeSRC="https://www.youtube.com/embed/THo-4pYuWvI?si=bQUQXspRV9OXAbv4"
              />

              <HonemoonComponent
                title="Pre Wedding Honeymoon | EP-2 "
                link="https://www.youtube.com/embed/M4GVFVWFuhE?si=enOS4e9pNHQRE18s"
                iframeSRC="https://www.youtube.com/embed/M4GVFVWFuhE?si=enOS4e9pNHQRE18s"
              />

              <HonemoonComponent
                title="Pre Wedding Honeymoon | EP-3 "
                link="https://www.youtube.com/embed/d7iO8jbMpqk?si=mzM6RN9myv-QazdJ"
                iframeSRC="https://www.youtube.com/embed/d7iO8jbMpqk?si=mzM6RN9myv-QazdJ"
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      <Section1
        heading1={"Web Series"}
        heading2={"Web Series"}
        img1={img1}
        img2={img2}
        p1={`Sensationz Productions is a creative media company specializing in producing engaging web series. Known for its innovative storytelling and high-quality content, the company creates shows that captivate diverse audiences across genres, from drama and comedy to thrillers and documentaries. Sensationz Productions focuses on delivering fresh perspectives and relatable narratives, leveraging digital platforms to connect with viewers worldwide. With a strong emphasis on creative collaboration and cutting-edge production techniques, it continues to push the boundaries of web series entertainment.`}
        p2={`Sensationz Productions is a dynamic content creation company known for producing popular web series like *Pre-Wedding Honeymoon* on MX Player and *Love Lust Loyalty (LLL)*. With a focus on modern relationships, emotions, and relatable experiences, Sensationz Productions creates compelling narratives that resonate with a wide audience. Their web series often explore themes of love, desire, and trust, offering viewers an engaging mix of drama, romance, and realism. By leveraging digital platforms like MX Player, the company reaches diverse viewers and continues to establish itself as a key player in the web series space.`}
      />

      <div className="section2-webseries">
        <div className="section2-in stiff-block">
          <h1>{"Some of Our Best Web Series"}</h1>
          {/* <p className="click-view-new">(Hover & Click to view )</p> */}

          <div className="videos">
            <div className="videos-layer1">
              <Link
                to={"https://www.imdb.com/title/tt32135791/"}
                target="_blank"
              >
                <img src={Img1} alt="" className="stiff-block" />
              </Link>
              <Link
                to={
                  "https://www.youtube.com/playlist?list=PLkZUBLpxN32oiqB4CkGOXLslekI3HkYbc"
                }
                target="_blank"
              >
                <img src={Img2} alt="" className="stiff-block" />
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
