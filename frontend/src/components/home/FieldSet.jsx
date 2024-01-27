import React, { useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import "./FieldSet.css";

const FieldSet = ({ fieldDetail }) => {
  const [activeContent, setActiveContent] = useState(fieldDetail[0]);

  const handleOnClick = (item) => {
    setActiveContent(item);
    // Handle additional click logic here
  };

  return (
    <div className="field-set">
      <div className="field-category">
        {fieldDetail.length > 0 &&
          fieldDetail.map((item) => (
            <div
              key={item.header}
              className={`field-header ${
                activeContent === item ? "field-header-active" : ""
              }`}
              onClick={() => handleOnClick(item)}
              data-tooltip-content={item.header}
              data-tooltip-id="my-tooltip"
            >
              <img src={process.env.REACT_APP_BASE_URL + item.icon} alt={item.header + "-icon"} />
              <Tooltip
                id="my-tooltip"
                className={
                  activeContent === item ? "tooltip-hidden" : "tooltip-left"
                }
                style={{ fontSize: "12px", padding: "4px" }}
              />
            </div>
          ))}
      </div>
      <div className="field-content">
        <h3>{activeContent.header}</h3>
        <div className="field-content-para">
          <img
            src={activeContent.imgPath}
            alt=""
          />
          <p>{activeContent.para}</p>
        </div>
      </div>
    </div>
  );
};

export default FieldSet;
