import React from "react";
import { CgDetailsMore } from "react-icons/cg";
import "./Card.css";

const Card = (props) => {
  return (
    <div class="box">
      <div class="box-label">{props.header}</div>
      <div class="box-para">
        <p>
          {props.para}
        </p>
      </div>
      <div class="studio-button">
        <div class="studio-button-icon">
         <CgDetailsMore/>
        </div>
        <div class="studio-button-label">Read More</div>
      </div>
    </div>
  );
};

export default Card;
