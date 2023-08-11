import React from "react";
import MainPage from "../../components/main/MainPage";
import Information from "../../components/information/Information";
import About from "../../components/about/About";

const Home = () => {
  return (
    <div className="home">
      <MainPage />
      <Information />
      <About />
    </div>
  );
};

export default Home;
