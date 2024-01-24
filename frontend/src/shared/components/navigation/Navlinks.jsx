import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiDropdownList } from "react-icons/ri";
import appStore from "../../../assets/shared/nav/app-store.png";
import playStore from "../../../assets/shared/nav/play-store.png";
import youtube from "../../../assets/shared/nav/youtube.png";
import x from "../../../assets/shared/nav/x.png";
import DropdownMenu from "../ui/DropdownMenu";
import "./Navlinks.css";

const Navlinks = ({ navData }) => {
  const [dropdownVisibility, setDropdownVisibility] = useState({});
  const navlinksUlRef = useRef(null);

  const handleDropdownToggle = (item) => {
    setDropdownVisibility((prevState) => {
      const newState = {
        ...Object.fromEntries(
          Object.keys(prevState).map((key) => [key, false])
        ),
        [item]: !prevState[item],
      };
      return newState;
    });
  };

  const handleDropdownClose = () => {
    setDropdownVisibility({});
  };

  return (
    <>
      <div className="upper-navlink">
        <Link
          to="https://twitter.com/dg_nta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={x} alt="nta-x-account" />
        </Link>
        <Link
          to="https://www.youtube.com/c/NationalTestingAgency"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtube} alt="nta-youtube-channel" />
        </Link>
        <Link
          to="https://play.google.com/store/apps/dev?id=7746914636480815659"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={playStore} alt="nta-android-app" />
        </Link>
        <Link
          to="https://apps.apple.com/in/developer/national-testing-agency/id1520417658"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={appStore} alt="nta-ios-app" />
        </Link>
        <h4>Skip to main content</h4>
      </div>
      <ul className="navlinks-ul">
        {navData.map((navItem) => (
          <li key={navItem.id} className="navlinks-li">
            {navItem.link ? (
              <NavLink
                to={navItem.link}
                className={({ isActive }) =>
                  isActive ? "navlink-active" : "nav-link"
                }
              >
                {navItem.header}
              </NavLink>
            ) : (
              <>
                <div
                  className="navlink-dropdown"
                  onClick={() => {
                    handleDropdownToggle(navItem.id);
                  }}
                >
                  {navItem.header}
                  <div
                    className={
                      dropdownVisibility[navItem.id]
                        ? "navlink-dropdown-active"
                        : "navlink-dropdown"
                    }
                  >
                    <RiDropdownList />
                  </div>
                </div>

                {dropdownVisibility[navItem.id] && (
                  <DropdownMenu
                    navItemData={navItem}
                    onClose={handleDropdownClose}
                  />
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navlinks;
