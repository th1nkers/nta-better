import React from "react";
import ImageSlider from "../../shared/components/ui/ImageSlider";
import "./Slide.css";

const SlideSection = ({ slideData }) => {
  return (
    <div className="slide-section">
      {slideData.length > 0 && <ImageSlider slidesData={slideData} />}
    </div>
  );
};

export default SlideSection;
