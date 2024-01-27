import React from "react";
import "./ImageLayout.css";

const ImageLayout = ({ galleryData }) => {
  return (
    <section>
      {galleryData.map((item, index) => {
        return (
          <div key={index} className="card">
            <div className="card__img">
              <img src={item.imgPath} alt="nta-gallery" />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ImageLayout;
