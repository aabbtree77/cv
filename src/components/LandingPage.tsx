import React from "react";
import Header from "./Header";
import DX from "./DX";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-neutral">
      <div className="min-h-screen gap-4 lg:gap-24 lg:w-3/5 mx-auto flex flex-col items-center text-base-content">
        <Header />
        <DX />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
