import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Latest.css";
import ScrollList from "../../shared/components/ui/ScrollList";

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

const ImpNTA = () => {
  return (
    <div className="ImpNTA">
      <ul className="main-tap-link">
        <h2>Suggested Content:</h2>
        {MAIN_TAP_LINKS.map((item) => {
          return (
            <Link to={item.link}>
              <li className="main-tap-link-li">{item.header}</li>
            </Link>
          );
        })}
      </ul>
      <div className="latest-nta">
        <h2>NTA @Latest</h2>
        <ul className="latest-nta-ul">
          <ScrollList
            data={NTA_LATEST}
            visibleItemsCount={6}
            scrollInterval={2000}
          />
        </ul>
      </div>
    </div>
  );
};

export default ImpNTA;
