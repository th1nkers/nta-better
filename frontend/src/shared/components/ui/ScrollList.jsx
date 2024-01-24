import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdChromeReaderMode } from "react-icons/md";

const ScrollList = ({ data, visibleItemsCount, scrollInterval }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let scrollIntervalId;

    if (!isHovered) {
      scrollIntervalId = setInterval(() => {
        setStartIndex(
          (prevIndex) => (prevIndex + 1) % (data.length - visibleItemsCount + 1)
        );
      }, scrollInterval);
    }

    return () => clearInterval(scrollIntervalId);
  }, [data, visibleItemsCount, scrollInterval, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const visibleItems = data.slice(startIndex, startIndex + visibleItemsCount);

  return (
    <ul
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="latest-nta-ul"
    >
      {visibleItems.map((item, index) => (
        <Link key={index} to={item.link}>
          <li className="latest-nta-li">
            <MdChromeReaderMode />
            <div>{item.header}</div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ScrollList;
