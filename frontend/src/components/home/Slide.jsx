import React from "react";
import ImageSlider from "../../shared/components/ui/ImageSlider";
import cuet from "../../assets/home/slide/cuet.png";
import nta from "../../assets/home/slide/nta.png";
import covid from "../../assets/home/slide/covid.png";
import aarogyaSetu from "../../assets/home/slide/aarogya-setu.png";
import "./Slide.css";

const SLIDE_DATA = [
  {
    imagePath: "https://nta.ac.in/img/EVENTS/KYF/Picture1.jpg",
    link: "https://amritmahotsav.nic.in",
  },
  {
    imagePath: "https://nta.ac.in/img/EVENTS/KYF/Picture3.jpg",
    link: "https://amritmahotsav.nic.in",
  },
  {
    imagePath: "https://nta.ac.in/img/EVENTS/KYF/Picture4.jpg",
    link: "https://amritmahotsav.nic.in",
  },
  {
    imagePath: "https://nta.ac.in/img/Banner/cuet-banner.jpeg",
    link: "https://cuet.samarth.ac.in/",
    contentImagePath: cuet,
  },
  {
    imagePath: "https://nta.ac.in/img/abhyas/NTA_banner.png",
    link: "https://nta.ac.in/Abhyas",
    contentImagePath: nta,
  },
  {
    imagePath: "https://nta.ac.in/img/Corna_Virus.jpg",
    link: "https://www.mygov.in/covid-19/?cbps=1",
    contentImagePath: covid,
  },
  {
    imagePath: "https://nta.ac.in/img/covid19A.jpg",
    link: "https://www.mygov.in/covid-19/?cbps=1",
    contentImagePath: covid,
  },
  {
    imagePath: "https://nta.ac.in/img/covid19B.jpg",
    link: "https://www.mygov.in/covid-19/?cbps=1",
    contentImagePath: covid,
  },
  {
    imagePath: "https://nta.ac.in/img/covid_arogya.jpg",
    link: "https://www.mygov.in/covid-19/?cbps=1",
    contentImagePath: aarogyaSetu,
  },
];

const SlideSection = ({ slideData }) => {
  return (
    <div className="slide-section">
      {slideData.length > 0 && <ImageSlider slidesData={slideData} />}
    </div>
  );
};

export default SlideSection;
