import React from "react";
import mahatmaGandhi from "../../../assets/shared/nav/150-year-of-mahatma.png";
import nta from "../../../assets/shared/nav/nta-logo.png";
import azadi from "../../../assets/shared/nav/amrit-mahotsav.png";
import Navlinks from "./Navlinks";
import "./MainNavigation.css";
import { NAVLINKS_DATA } from "../../../Data";

const MainNavigation = () => {
  return (
    <div className="main-navigation">
      <div className="main-nav-logo">
        <img src={mahatmaGandhi} alt="150 years of Mahatma Gandhi ji" />
        <img src={nta} alt="National Testing Agency" />
      </div>
      <div className="left-main-nav">
        <nav className="navlinks">
          <Navlinks navData={NAVLINKS_DATA}/>
        </nav>
        <div className="main-nav-logo">
          <img src={azadi} alt="azadi-ka-amrit-mahotsav-logo" />
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
