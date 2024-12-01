import React from "react";
import Navbar from "../../components/navbar";
import HeroSection from "../../components/hero";
import Features from "../../components/features";
import AboutSection from "../../components/about";
import FaqSection from "../../components/faq";
import Footer from "../../components/footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <AboutSection />
      <FaqSection />
      <Footer />
    </>
  );
}

export default Home;
