import React from "react";
import PortfolioTimeline from "./PortfolioTimeline";
const Portfolio: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 items-center">
      <div className="text-2xl lg:text-3xl font-bold text-center">
        Selected Projects
      </div>

      <PortfolioTimeline />
    </div>
  );
};

export default Portfolio;
