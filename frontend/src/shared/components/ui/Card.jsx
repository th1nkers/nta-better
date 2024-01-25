import React from "react";
import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="box">
      <div className="box-label ">{props.header}</div>
      <div className="box-para">
        <p>
          {props.para}
        </p>
      </div>
      <div className="studio-button">
        <div className="studio-button-icon">
         <CgDetailsMore/>
        </div>
        <Link to={props.readMeLink} className="studio-button-label">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
