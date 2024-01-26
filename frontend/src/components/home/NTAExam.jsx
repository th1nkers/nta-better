import React from "react";
import ImageSlider from "../../shared/components/ui/ImageSlider";
import "./NTAExam.css";

const NTA_EXAM_DATA = [
    {
        id:1,
        sortHeader: "JEE (MAIN)",
        imagePath: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
        fieldHeader: "Engineering",
        header: "Joint Entrance Examination (MAIN)",
        link:"www.google.com",
    },
    {
        id:2,
        sortHeader: "NDA (MAIN)",
        imagePath: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
        fieldHeader: "Engineering",
        header: "Joint Entrance Examination (MAIN)",
        link:"www.google.com",
    },
    {
        id:3,
        sortHeader: "NEEEET (MAIN)",
        imagePath: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
        fieldHeader: "Engineering",
        header: "Joint Entrance Examination (MAIN)",
        link:"www.google.com",
    },
    {
        id:4,
        sortHeader: "JEE (MAIN)",
        imagePath: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
        fieldHeader: "Engineering",
        header: "Joint Entrance Examination (MAIN)",
        link:"www.google.com",
    },
    {
        id:5,
        sortHeader: "JEE (Advanced)",
        imagePath: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
        fieldHeader: "Engineering",
        header: "Joint Entrance Examination (MAIN)",
        link:"www.google.com",
    },
    {
        id:6,
        sortHeader: "NEET (UG)",
        imagePath: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
        fieldHeader: "Engineering",
        header: "Joint Entrance Examination (MAIN)",
        link:"www.google.com",
    },
    {
        id:7,
        sortHeader: "DUET",
        imagePath: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
        fieldHeader: "Engineering",
        header: "Joint Entrance Examination (MAIN)",
        link:"www.google.com",
    },
]

const NTAExam = ({ntaExamData}) => {
  return (
    <div className="nta-exam">
      <div className="text-4xl">National Testing Agency</div>
      <p>
        National Testing Agency (NTA) is a registered society under the
        Societies Registration Act, 1860. The NTA will conduct all exams in
        following domains:{" "}
      </p>
      <div className="nta-slide">
      {ntaExamData.length>0 && <ImageSlider SIDEWAY NTAExamData={ntaExamData}/>}
      </div>
    </div>
  );
};

export default NTAExam;
