import React from "react";
import ImageSlider from "../../shared/components/ui/ImageSlider";
import "./NTAExam.css";

const NTA_EXAM_DATA = [
    {
        sortHeader: "JEE (MAIN)",
        imagePath: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
        fieldHeader: "Engineering",
        header: "Joint Entrance Examination (MAIN)"
    },
    {
        sortHeader: "NDA (MAIN)",
        imagePath: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
        fieldHeader: "Engineering",
        header: "Joint Entrance Examination (MAIN)"
    },
    {
        sortHeader: "NEEEET (MAIN)",
        imagePath: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
        fieldHeader: "Engineering",
        header: "Joint Entrance Examination (MAIN)"
    },
    {
        sortHeader: "JEE (MAIN)",
        imagePath: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
        fieldHeader: "Engineering",
        header: "Joint Entrance Examination (MAIN)"
    },
    {
        sortHeader: "JEE (Advanced)",
        imagePath: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
        fieldHeader: "Engineering",
        header: "Joint Entrance Examination (MAIN)"
    },
    {
        sortHeader: "NEET (UG)",
        imagePath: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
        fieldHeader: "Engineering",
        header: "Joint Entrance Examination (MAIN)"
    },
    {
        sortHeader: "DUET",
        imagePath: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
        fieldHeader: "Engineering",
        header: "Joint Entrance Examination (MAIN)"
    },
]

const NTAExam = () => {
  return (
    <div className="nta-exam">
      <h1>National Testing Agency</h1>
      <p>
        National Testing Agency (NTA) is a registered society under the
        Societies Registration Act, 1860. The NTA will conduct all exams in
        following domains:{" "}
      </p>
      <div className="nta-slide">
      <ImageSlider NTAExam NTAExamData={NTA_EXAM_DATA}/>
      </div>
    </div>
  );
};

export default NTAExam;
