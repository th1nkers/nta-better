import React from "react";
import ImageLayout from "../../shared/components/ui/ImageLayout";
import "./Gallery.css";

const Gallery = ({ ntaGallery }) => {
  return (
    <>
      <div className="nta-gallery-section">
        <div id="nta-header">NTA @Gallery</div>
        <div className="nta-gallery">
          {ntaGallery.length > 0 && <ImageLayout galleryData={ntaGallery} />}
        </div>
      </div>
    </>
  );
};

export default Gallery;
