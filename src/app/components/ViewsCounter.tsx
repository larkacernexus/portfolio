"use client";

import dynamic from "next/dynamic";

const SiteViews = dynamic(() => import("react-siteviews"), { ssr: false });

const ViewsCounter = () => {
  return (
    // Relative container to position the fake number on top
    <span className="relative inline-block">
      {/* 
        This renders the real count.
        We use absolute positioning and opacity to hide it visually,
        but keep it in the DOM so the library still increments the count.
      */}
      <span className="absolute inset-0 opacity-0 pointer-events-none">
        <SiteViews
          projectName="janndhelle-portfolio"
          refresh="10"
          suppressLogs
        />
      </span>

      {/* 
        This is your fake starting number.
        It will stay at 10.1K visually, while the hidden counter
        underneath is actually incrementing.
      */}
      <span className="relative z-10">10.1K</span>
    </span>
  );
};

export default ViewsCounter;