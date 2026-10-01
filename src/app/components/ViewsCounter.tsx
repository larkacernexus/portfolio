"use client";
import dynamic from "next/dynamic";

const SiteViews = dynamic(() => import("react-siteviews"), { ssr: false });

const ViewsCounter = () => {
  return (
    <SiteViews
      projectName="janndhelle-portfolio" // Unique name for your site
      refresh="10" // Auto-refresh every 10 seconds [citation:1][citation:5]
      suppressLogs // Hide console logs [citation:1]
      style={{ color: "var(--text-primary)" }}
    />
  );
};

export default ViewsCounter;