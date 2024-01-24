import React from "react";
import { Link } from "react-router-dom";
import Card from "../../shared/components/ui/Card";
import "./About.css";

const ABOUT_NTA = {
  header: "About",
  para: "National Testing Agency (NTA) has been established as a premier, specialist, autonomous and self-sustained testing organization to conduct entrance examinations for admission/fellowship in higher educational institutions. To assess competence of candidates for admissions and recruitment has always been a challenge in terms of matching with research based international standards, efficiency, transparency and error free delivery."
}

const TAP_LINKS = [
  {
    header: "Active Examinations",
    link: "",
  },
  {
    header: "E-Certificate",
    link: "https://ecertificate.nta.ac.in",
  },
  {
    header: "Mock Test",
    link: "https://nta.ac.in/Quiz",
  },
  {
    header: "Abhyas",
    link: "https://nta.ac.in/Abhyas",
  },
];


const About = () => {
  return (
    <div className="about-latest">
       <ul className="tap-links">
        {TAP_LINKS.map((item) => {
          return (
            <Link to={item.link}>
              <button class="button-17">{item.header}</button>
            </Link>
          );
        })}
      </ul>
        <Card 
        header={ABOUT_NTA.header}
        para={ABOUT_NTA.para}
        />
    </div>
  );
};

export default About;
