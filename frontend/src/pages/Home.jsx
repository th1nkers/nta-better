import React, { useContext } from "react";
import { ScrollContext } from "../shared/context/scroll-to-context";
import SlideSection from "../components/home/Slide";
import Latest from "../components/home/Latest";
import About from "../components/home/About";
import NTAExam from "../components/home/NTAExam";
import FieldSet from "../components/home/FieldSet";
import Gallery from "../components/home/Gallery";
import "./Home.css";
import { useHttpClient } from "../shared/hooks/use-http";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../shared/components/ui/Loading";

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
        console.log(response[2]);
        setFetchData(response);
      } catch (err) {}
    };

    fetchHomeData();
  }, [sendRequest]);

  if (isLoading || !fetchData || fetchData.length <= 0) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className="home">
      <SlideSection slideData={fetchData[0]?.slideData || []} />
      <div ref={scrollRef} className="home-manage">
        <About tabLinks={fetchData[1]?.tabLinks || []} />
        <Latest
          ntaLatest={fetchData[2]?.ntaLatest || []}
          mainTabLinks={fetchData[3]?.mainTabLinks || []}
        />
      </div>
      <NTAExam ntaExamData={fetchData[4]?.ntaExamData || []} />
      <FieldSet fieldDetail={fetchData[5]?.fieldDetail || []} />
      <Gallery ntaGallery={fetchData[6]?.ntaGallery || []} />
    </div>
  );
};

export default Home;
