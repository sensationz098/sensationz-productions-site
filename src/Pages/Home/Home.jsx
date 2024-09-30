import React, { useState, useEffect } from "react";
import "./HomeStyle.css";

import Navbar from "../../Components/Navbar/Navbar";
import Title from "../../Components/Title/Title";
import Contact from "../../Components/Contact/Contact";
import Hero from "../../Components/Hero/Hero";
// import Services from "../../Components/Services/Services";
import Projects from "../../Components/Projects/Projects";
import About from "../../Components/About/About";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import Directors from "../../Components/Directors/Directors";

import BeatLoader from "react-spinners/BeatLoader";
import RecentCreations from "../../Components/RecentCreations/RecentCreations";

import { PiMouseLeftClickFill } from "react-icons/pi";

export default function Home() {
  const [playState, setPlayState] = useState(false);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-cover">
          <BeatLoader
            color={"rgb(0,0,0)"}
            loading={loading}
            size={20}
            aria-label="Loading bouncer"
            data-testid="loader"
            className="loader"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <div className="container">
            <Title
              title={"our Projects"}
              subtitle={"Know About Our Projects"}
            />
            <p className="click-view">
              (Hover & Click to view
              <PiMouseLeftClickFill />)
            </p>
            {/* <Services /> */}
            <Projects />
          </div>

          <div className="container">
            <Title title={"about Us"} subtitle={"know more about us"} />
            <About setPlayState={setPlayState} />
          </div>

          <div className="container">
            {/* <Title title={"Directors"} subtitle={"who found Sensationz?"} /> */}
            <Directors />
          </div>

          <div className="container">
            <Title title={"Creations"} subtitle={"Our Recent Creations"} />
            <p className="click-view">
              (Hover & Click to view
              <PiMouseLeftClickFill />)
            </p>
            <RecentCreations />
          </div>

          <div className="container">
            <Title title={"contact us"} subtitle={"get in touch"} />
            <Contact />
          </div>
          <VideoPlayer playState={playState} setPlayState={setPlayState} />
        </>
      )}
    </>
  );
}
