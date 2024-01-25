import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import ImageLayout from "../../shared/components/ui/ImageLayout";
import "./Gallery.css";

const NTA_GALLERY = [
  { imgPath: "https://nta.ac.in/img/Gallery/Gallery19.jpeg" },
  { imgPath: "https://nta.ac.in/img/Gallery/Gallery18.jpeg" },
  { imgPath: "https://nta.ac.in/img/Gallery/Gallery17.jpeg" },
  { imgPath: "https://nta.ac.in/img/Gallery/Gallery16.jpeg" },
  { imgPath: "https://nta.ac.in/img/Gallery/Gallery15.jpeg" },
  { imgPath: "https://nta.ac.in/img/Gallery/Gallery14.jpeg" },
];

const Gallery = () => {
  return (
    <>
      <div className="nta-gallery-section">
        <div id="nta-header">NTA @Gallery</div>
        <div className="nta-gallery">
          {/* <SimpleImageSlider
            width={896}
            height={504}
            images={NTA_GALLERY}
            showBullets={true}
            showNavs={true}
            autoPlayDelay={true}
          /> */}
          <ImageLayout galleryData={NTA_GALLERY}/>
        </div>
      </div>
    </>
  );
};

export default Gallery;
