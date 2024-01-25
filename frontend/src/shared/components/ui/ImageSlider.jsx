import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import amritMahotsav from "../../../assets/shared/nav/amrit-mahotsav.png";
import "./ImageSlider.css";
import Marquee from "react-fast-marquee";

const ImageSlider = ({
  slidesData,
  SIDEWAY,
  SIDEWAY_FOOTER,
  SUBFooterData,
  NTAExamData,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slidesData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = NTAExamData && currentIndex === slidesData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleMouseEnter = () => {
    clearInterval(timer);
    setTimer(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  const handleMouseLeave = () => {
    clearInterval(timer);
    const newTimer = setInterval(() => {
      goToNext();
    }, 3000);

    setTimer(newTimer);
  };

  if (SIDEWAY_FOOTER) {
    return (
      <Marquee autoFill={true}>
        {SUBFooterData.map((item, index) => {
          return (
            <div className="sub_footer_img">
              <img src={item.imgPath} alt="sub-footer-icon" />
            </div>
          );
        })}
      </Marquee>
    );
  }

  if (SIDEWAY) {
    return (
      <>
        <Marquee autoFill={true} speed={30} pauseOnHover={true}>
          <div className="nta-exam-slider">
            {NTAExamData.map((item) => {
              return (
                <Link to={item.link} key={item.id} className="nta-exam-content">
                  <h3>{item.sortHeader}</h3>
                  <img src={item.imagePath} alt={item.sortHeader} />
                  <h5>{item.fieldHeader}</h5>
                  <p>{item.header}</p>
                </Link>
              );
            })}
          </div>
        </Marquee>
      </>
    );
  }

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="image-slider"
      >
        <div className="dot-array">
          {slidesData.map((slide, slideIndex) => (
            <div
              className={
                slideIndex === currentIndex ? "dotStyle-active" : "dotStyle"
              }
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <GoDotFill />
            </div>
          ))}
        </div>
        <img
          src={slidesData[currentIndex].imagePath}
          alt="amrit-mahotsav-highlight"
        />
      </div>
      <div className="image-slider-content">
        <Link to={slidesData[currentIndex].link}>
          <img
            src={slidesData[currentIndex].contentImagePath || amritMahotsav}
            alt="amrit-mahotsav-content"
          />
        </Link>
      </div>
    </>
  );
};

export default ImageSlider;
