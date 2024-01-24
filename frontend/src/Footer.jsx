import React from "react";
import "./Footer.css";
import { MdOutlineComputer } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa6";
import { MdOutlineAppRegistration } from "react-icons/md";
import education from "./assets/shared/footer/ministry-of-education.jpg";
import ImageSlider from "./shared/components/ui/ImageSlider";

const FOOTER_DATA = [
  {
    quickLink: [
      {
        icon: <MdOutlineComputer />,
        header: "Mock Test",
        link: "https://nta.ac.in/Quiz",
      },
      {
        icon: <GoPeople />,
        header: "Recruitment",
        link: "https://nta.ac.in/Download/RTI/Notification.pdf",
      },
      {
        icon: <AiOutlineFacebook />,
        header: "Facebook",
        link: "https://www.facebook.com/nationaltestingagency",
      },
      {
        icon: <FaXTwitter />,
        header: "X (Twitter)",
        link: "https://twitter.com/NTA_exams",
      },
      {
        icon: <TbBrandYoutube />,
        header: "Youtube",
        link: "https://www.youtube.com/c/NationalTestingAgency",
      },
      {
        icon: <IoLogoGooglePlaystore />,
        header: "Play Store",
        link: "https://play.google.com/store/apps/dev?id=7746914636480815659",
      },
      {
        icon: <FaAppStore />,
        header: "App Store",
        link: "https://apps.apple.com/in/developer/national-testing-agency/id1520417658",
      },
      {
        icon: <FaQuestion />,
        header: "FAQs",
        link: "https://nta.ac.in/FAQ",
      },
      {
        icon: <MdOutlineAppRegistration />,
        header: "NTA Registration and MoA",
        link: "https://nta.ac.in/Download/NTARegistrationandMOA.pdf",
      },
    ],
  },
];

const FOOTER_IMG_DATA = [
  { subFooter: "https://nta.ac.in/img/footerlog-1.png" },
  { subFooter: "https://nta.ac.in/img/footerlog-4.png" },
  { subFooter: "https://nta.ac.in/img/footerlog-5.png" },
  { subFooter: "https://nta.ac.in/img/footerlog-6.png" },
  { subFooter: "https://nta.ac.in/img/moe1.png" },
  { subFooter: "https://nta.ac.in/img/rti_logo.png" },
  { subFooter: "https://nta.ac.in/img/datagov_logo.png" },
];

const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* <img src={education} alt="ministry of education" /> */}
        <div className="quick-links">
          <h3>Contact</h3>
          <div className="footer-contact">
            <p>
              First Floor, NSIC-MDBP Building, Okhla Industrial Estate, New
              Delhi, Delhi 110020
            </p>
            <h5>011-69227700</h5>
            <h5>genadmin@nta.ac.in</h5>
            <h4>suryaXth1nkers</h4>
          </div>
        </div>
        <div className="quick-links">
          <h3> Quick Links</h3>
          <ul className="footer-quick-link">
            {FOOTER_DATA.map((item) =>
              item.quickLink.map((subItem, index) => (
                <li key={index}>
                  <a href={subItem.link}>
                    {subItem.icon}
                    {subItem.header}
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
