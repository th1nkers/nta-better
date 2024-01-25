import React, { useContext } from "react";
import { ScrollContext } from "../shared/context/scroll-to-context";
import SlideSection from "../components/home/Slide";
import Latest from "../components/home/Latest";
import About from "../components/home/About";
import NTAExam from "../components/home/NTAExam";
import FieldSet from "../components/home/FieldSet";
import Gallery from "../components/home/Gallery";
import "./Home.css";

const Home = () => {
  const { scrollRef } = useContext(ScrollContext);

  return (
    <div className="home">
      <SlideSection />
      <div ref={scrollRef} className="home-manage">
        <About />
        <Latest />
      </div>
      <NTAExam />
      <FieldSet />
      <Gallery />
    </div>
  );
};

export default Home;
