import React from "react";
import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";
import Video from "./Video";
import Services from "./Services";
import HotDeals from "./HotDeals";

const Home = () => {


  return (
    <>
    <HeroSection />
    <FeaturedProducts/>
    <Services/>
    <HotDeals/>
    <Video/>
    </>
  );
};

export default Home;
