import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Contact from "../components/Contact";
import CTA from "../components/CTA";

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <HowItWorks />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
