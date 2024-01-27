import React, { useContext, useEffect, useState } from "react";
import { ScrollContext } from "../shared/context/scroll-to-context";
import SlideSection from "../components/home/Slide";
import Latest from "../components/home/Latest";
import About from "../components/home/About";
import NTAExam from "../components/home/NTAExam";
import FieldSet from "../components/home/FieldSet";
import Gallery from "../components/home/Gallery";
import { useHttpClient } from "../shared/hooks/use-http";
import Loading from "../shared/components/ui/Loading";
import "./Home.css";

const Home = () => {
  const { scrollRef } = useContext(ScrollContext);
  const { sendRequest, isLoading, error } = useHttpClient();

  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/"
        );
        setFetchData(response);
      } catch (err) {}
    };

    fetchHomeData();
  }, [sendRequest]);

  if (isLoading || !fetchData || fetchData.length <= 0) {
    return <Loading />;
  }

  return (
    <div className="home">
      <SlideSection slideData={fetchData?.slideData || []} />
      <div ref={scrollRef} className="home-manage">
        <About tabLinks={fetchData?.tabLinks || []} />
        <Latest
          ntaLatest={fetchData?.ntaLatest || []}
          mainTabLinks={fetchData?.mainTabLinks || []}
        />
      </div>
      <NTAExam ntaExamData={fetchData?.ntaExamData || []} />
      <FieldSet fieldDetail={fetchData?.fieldDetail || []} />
      <Gallery ntaGallery={fetchData?.ntaGallery || []} />
    </div>
  );
};

export default Home;
