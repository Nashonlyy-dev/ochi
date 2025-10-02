import React from "react";

const Marquee = () => {
  return (
    <div
      data-scroll-section
      data-scroll-speed="-.2"
      className="marquee relative"
      aria-label="Marquee"
    >
      {/* top and bottom lines using Tailwind */}
      <div className="absolute left-0 right-0 top-4 h-px bg-white/80 pointer-events-none" />
      <div className="absolute left-0 right-0 bottom-8 h-px bg-white/80 pointer-events-none" />

      <style>{`
            .marquee {
                overflow: hidden;
                position: relative;
                width: 100%;
                height: 50vh;
                display: flex;
                border-radius: 0.76rem;
                gap: 2rem;
                align-items: center;
                justify-content: center;
                background-color: #004d43; 
            }

            .marquee__inner {
                display: flex;
                flex-shrink: 0;
                white-space: nowrap;
                animation: marquee 60s linear infinite;
                font-size: 20vw;
                font-weight: bold;
                text-transform: uppercase;
                font-family: 'FoundersGrotesk-Semibold (1)', sans-serif;
                gap: 4rem; /* spacing between repeats */
                color: white;
            }

            .marquee__inner > span {
                display: inline-block;
            }

            @keyframes marquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `}</style>

      <div className="marquee__inner">
        <span>we are ochi</span>
        <span>we are ochi</span>
        <span>we are ochi</span>
        <span>we are ochi</span>
        <span>we are ochi</span>
        <span>we are ochi</span>
        <span>we are ochi</span>
        <span>we are ochi</span>
      </div>
    </div>
  );
};

export default Marquee;
