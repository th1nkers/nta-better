import React from "react";
import ImageSlider from "../../shared/components/ui/ImageSlider";
import "./NTAExam.css";

const NTAExam = ({ntaExamData}) => {
  return (
    <div className="nta-exam">
      <div id="nta_exam_header" className="text-4xl">National Testing Agency</div>
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
