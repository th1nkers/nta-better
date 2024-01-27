import React from "react";
import { Link } from "react-router-dom";
import Card from "../../shared/components/ui/Card";
import "./About.css";

const ABOUT_NTA = {
  header: "About",
  para: "National Testing Agency (NTA) has been established as a premier, specialist, autonomous and self-sustained testing organization to conduct entrance examinations for admission/fellowship in higher educational institutions. To assess competence of candidates for admissions and recruitment has always been a challenge in terms of matching with research based international standards, efficiency, transparency and error free delivery.",
};


const About = ({ tabLinks }) => {
  return (
    <div className="about-latest">
      <ul className="tap-links">
        {tabLinks.length > 0 &&
          tabLinks.map((item) => {
            return (
              <Link key={item.link} to={item.link}>
                <button className="button-17">{item.header}</button>
              </Link>
            );
          })}
      </ul>
      <div className="about-card">
        <Card
          header={ABOUT_NTA.header}
          readMeLink="https://nta.ac.in/about"
          para={ABOUT_NTA.para}
        />
      </div>
    </div>
  );
};

export default About;
