import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Latest.css";
import ScrollList from "../../shared/components/ui/ScrollList";
import { MdChromeReaderMode } from "react-icons/md";
import Marquee from "react-fast-marquee";

const MAIN_TAP_LINKS = [
  {
    header:
      "Content Based Lectures: For Jee Main and NEET-UG By IIT Professors / Subject Experts",
    link: "https://nta.ac.in/LecturesContent",
  },
];

const NTA_LATEST = [
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header:
      "Release of Admit Cards for the Candidates of JEE (Main) – 2024 Session 1 (January 2024) scheduled to appear on 24 January 2024 (Paper 2) ",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header:
      " Release of Admit Cards for the Candidates of JEE (Main) – 2024 Session 1 (January 2024) scheduled to appear on 24 January 2024 (Paper 2) ",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
  {
    header: "Final Result of Assistant grade LDCE - 2018",
    link: "https://nta.ac.in/Download/Notice/Notice_20240121191355.pdf",
  },
];

const Latest = ({ntaLatest , mainTabLinks}) => {

  return (
    <div className="ImpNTA">
      <ul className="main-tap-link">
        <div className="text-xl text-gray-900">Suggested Content:</div>
        {mainTabLinks.length>0 && mainTabLinks.map((item) => {
          return (
            <Link key={item.link} to={item.link}>
              <li className="main-tap-link-li text-sky-950">{item.header}</li>
            </Link>
          );
        })}
      </ul>
      <div className="latest-nta">
        <div className="text-2xl  text-gray-900">NTA @Latest</div>
        {/* <Marquee autoFill={true} direction="up" pauseOnHover={true}> */}
          <ul className="latest-nta-ul">
            {/* {NTA_LATEST.map((item, index) => {
              return (
                <Link key={index} to={item.link}>
                  <li className="latest-nta-li">
                    <MdChromeReaderMode />
                    <div>{item.header}</div>
                  </li>
                </Link>
              );
            })} */}
            <ScrollList
            data={ntaLatest}
            visibleItemsCount={6}
            scrollInterval={2000}
          />
          </ul>
        {/* </Marquee> */}
      </div>
    </div>
  );
};

export default Latest;
