import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Latest.css";
import ScrollList from "../../shared/components/ui/ScrollList";

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
