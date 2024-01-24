import React, { useState } from "react";
import engineering from "../../assets/home/field/engineering.png";
import medical from "../../assets/home/field/doctor.png";
import pharmacy from "../../assets/home/field/pharmacy.png";
import management from "../../assets/home/field/management.png";
import teacher from "../../assets/home/field/teacher.png";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import "./FieldSet.css";

const FIELD_DETAIL = [
  {
    icon: engineering,
    header: "Engineering Exam",
    para: `Joint Entrance Examination (JEE) MAIN will be conducted by the NTA
        from 2019 onwards. This Examination was being conducted by the
        Central Board of Secondary Education (CBSE) till 2018. JEE Main is
        applicable for admission to NITs, IIITs and CFTIs participating
        though Central Seat Allocation Board subject to the condition that
        the candidate should have secured at least 75% marks in the 12th
        class examination, or be in the top 20 percentile in the 12th class
        examination conducted by the respective Boards. For SC/ST candidates
        the qualifying marks would be 65% in the 12th class examination.
        Subject combinations required in the qualifying examination for
        admission to B.E./B.Tech. & B. Arch./B. Planning Courses in NITs,
        IIITs, and other CFTIs is as under:`,
  },
  {
    icon: medical,
    header: "Medical Exam",
    para: `Joint Entrance Examination (JEE) MAIN will be conducted by the NTA
        from 2019 onwards. This Examination was being conducted by the
        Central Board of Secondary Education (CBSE) till 2018. JEE Main is
        applicable for admission to NITs, IIITs and CFTIs participating
        though Central Seat Allocation Board subject to the condition that
        the candidate should have secured at least 75% marks in the 12th
        class examination, or be in the top 20 percentile in the 12th class
        examination conducted by the respective Boards. For SC/ST candidates
        the qualifying marks would be 65% in the 12th class examination.
        Subject combinations required in the qualifying examination for
        admission to B.E./B.Tech. & B. Arch./B. Planning Courses in NITs,
        IIITs, and other CFTIs is as under:`,
  },
  {
    icon: management,
    header: "Management Exam",
    para: `Joint Entrance Examination (JEE) MAIN will be conducted by the NTA
        from 2019 onwards. This Examination was being conducted by the
        Central Board of Secondary Education (CBSE) till 2018. JEE Main is
        applicable for admission to NITs, IIITs and CFTIs participating
        though Central Seat Allocation Board subject to the condition that
        the candidate should have secured at least 75% marks in the 12th
        class examination, or be in the top 20 percentile in the 12th class
        examination conducted by the respective Boards. For SC/ST candidates
        the qualifying marks would be 65% in the 12th class examination.
        Subject combinations required in the qualifying examination for
        admission to B.E./B.Tech. & B. Arch./B. Planning Courses in NITs,
        IIITs, and other CFTIs is as under:`,
  },
  {
    icon: pharmacy,
    header: "Pharmacy Exam",
    para: `Joint Entrance Examination (JEE) MAIN will be conducted by the NTA
        from 2019 onwards. This Examination was being conducted by the
        Central Board of Secondary Education (CBSE) till 2018. JEE Main is
        applicable for admission to NITs, IIITs and CFTIs participating
        though Central Seat Allocation Board subject to the condition that
        the candidate should have secured at least 75% marks in the 12th
        class examination, or be in the top 20 percentile in the 12th class
        examination conducted by the respective Boards. For SC/ST candidates
        the qualifying marks would be 65% in the 12th class examination.
        Subject combinations required in the qualifying examination for
        admission to B.E./B.Tech. & B. Arch./B. Planning Courses in NITs,
        IIITs, and other CFTIs is as under:`,
  },
  {
    icon: teacher,
    header: "Teaching and Fellowship Exam",
    para: `Joint Entrance Examination (JEE) MAIN will be conducted by the NTA
        from 2019 onwards. This Examination was being conducted by the
        Central Board of Secondary Education (CBSE) till 2018. JEE Main is
        applicable for admission to NITs, IIITs and CFTIs participating
        though Central Seat Allocation Board subject to the condition that
        the candidate should have secured at least 75% marks in the 12th
        class examination, or be in the top 20 percentile in the 12th class
        examination conducted by the respective Boards. For SC/ST candidates
        the qualifying marks would be 65% in the 12th class examination.
        Subject combinations required in the qualifying examination for
        admission to B.E./B.Tech. & B. Arch./B. Planning Courses in NITs,
        IIITs, and other CFTIs is as under:`,
  },
];

const FieldSet = () => {
  const [activeContent, setActiveContent] = useState(FIELD_DETAIL[0]);

  const handleOnClick = (item) => {
    setActiveContent(item);
    // Handle additional click logic here
  };

  return (
    <div className="field-set">
      <div className="field-category">
        {FIELD_DETAIL.map((item) => (
          <div
            key={item.header}
            className={`field-header ${
              activeContent === item ? "field-header-active" : ""
            }`}
            onClick={() => handleOnClick(item)}
            data-tooltip-content={item.header}
            data-tooltip-id="my-tooltip"
          >
            <img src={item.icon} alt={item.header + "-icon"} />
            <Tooltip
              id="my-tooltip"
              className={activeContent === item ? "tooltip-hidden" : "tooltip-left"}
              style={{ fontSize: "12px", padding: "4px" }}
            />
          </div>
        ))}
      </div>
      <div className="field-content">
        <h3>{activeContent.header}</h3>
        <div className="field-content-para">
          <p>{activeContent.para}</p>
          <img
            src="https://cxotoday.com/wp-content/uploads/2022/09/iStock-1173740460.jpg"
            alt=""
          />
          <p>{activeContent.para}</p>
        </div>
      </div>
    </div>
  );
};

export default FieldSet;
