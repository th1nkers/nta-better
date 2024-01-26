import React from "react";
import LoadingSvg from "../../../assets/shared/LoadingIcon.svg";

const Loading = ({ error }) => {
  return (
    <div className="flex h-screen">
      <div className="m-auto flex items-center justify-center">
        {error ? (
          <h4 id="loading-error">{error}</h4>
        ) : (
          <img src={LoadingSvg} alt="loading..." className="h-24" />
        )}
      </div>
    </div>
  );
};

export default Loading;
