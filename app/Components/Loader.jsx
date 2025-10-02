"use client";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [hide, setHide] = useState(false);

  // optional: auto hide after some time or when loading done
  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 3000); // hide after 3s for demo
    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        {/* Circle + pulse effect */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>
          <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
        {/* Your name */}
        <div className="mt-4 text-lg text-white font-bold tracking-wider">
          Nash
        </div>
      </div>
    </div>
  );
};

export default Loader;
