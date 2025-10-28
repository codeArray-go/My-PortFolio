"use client";

import React, { useState, useEffect } from "react";

const StatusLine = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollHeight(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-1 sm:left-4 top-0 flex flex-col items-center z-50">
      {/* Circle at the start */}
      <div className="w-4 h-4 bg-blue-500 rounded-full mb-0.5"></div>

      {/* Scroll line */}
      <div
        className="w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-700 rounded-full transition-all duration-200"
        style={{ height: `${scrollHeight}vh` }}
      ></div>
    </div>
  );
};

export default StatusLine;
