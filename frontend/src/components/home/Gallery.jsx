import React, { useState } from "react";
import "./Gallery.css";
import SimpleImageSlider from "react-simple-image-slider";

const NTA_GALLERY = [
  { url: "https://nta.ac.in/img/Gallery/Gallery19.jpeg" },
  { url: "https://nta.ac.in/img/Gallery/Gallery18.jpeg" },
  { url: "https://nta.ac.in/img/Gallery/Gallery17.jpeg" },
  { url: "https://nta.ac.in/img/Gallery/Gallery16.jpeg" },
  { url: "https://nta.ac.in/img/Gallery/Gallery15.jpeg" },
  { url: "https://nta.ac.in/img/Gallery/Gallery14.jpeg" },
];

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [imgContent, setImgContent] = useState();

  const modalImageHandler = (index) => {
    setImgContent(NTA_GALLERY[index]);
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="nta-gallery-section">
        <div id="nta-header">NTA @Gallery</div>
        <div className="nta-gallery">
          <figure>
            <div class="outerBevel">
              <div class="flatSurface">
                <div class="innerBevel">
                  {/* <img src="http://www.johnsdev.com/civil-war/images/map_trans_edge.png" alt="Map of the U.S. during the Civil War" title="The U.S. during the Civil War" width="382" height="326" class="map"> */}
                  <SimpleImageSlider
                    width={896}
                    height={504}
                    images={NTA_GALLERY}
                    showBullets={true}
                    showNavs={true}
                    autoPlayDelay={true}
                  />
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Gallery;
