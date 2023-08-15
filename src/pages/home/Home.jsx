import React from "react";
import MainPage from "../../components/main/MainPage";
import Information from "../../components/information/Information";
import About from "../../components/about/About";
import Starter from "../../components/starter/Starter";
import Products from "../../components/products/Products";
import Purchase from "../../components/purchase/Purchase";
import Delivery from "../../components/delivery/Delivery";
import Collabs from "../../components/collaborations/Collabs";
import Clients from "../../components/Clientss/Clients";

const Home = () => {
  return (
    <div className="home">
      <MainPage />
      <Information />
      <About />
      <Starter />
      <Products />
      <Purchase />
      <Delivery />
      <Collabs />
      <Clients />
    </div>
  );
};

export default Home;
