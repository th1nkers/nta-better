import React from "react";
import { Link } from "react-router-dom";
import "./DropdownMenu.css";
import Backdrop from "./Backdrop";

const DropdownMenu = ({ navItemData, onClose }) => {

  

  if (navItemData.dropdown === undefined) return;

  return (
    <>
    <Backdrop onClick={onClose}/>
      <div className="dropdown-menu-section">
        {navItemData.dropdown.map((item) => {
          if (item.sub) {
            return (
              <div className="sub1">
                <h4>{item.header}</h4>
                <ul className="sub1-ul">
                  {item.sub.map((subItem) => (
                    <li key={subItem.link} className="sub1-li">
                      <Link to={subItem.link}>{subItem.header}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }

          return (
            <Link key={item.link} to={item.link}>
              {item.header}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default DropdownMenu;
