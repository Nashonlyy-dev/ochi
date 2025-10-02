"use client"

import React, { useEffect, useRef } from "react";

const SmallEyes = ({ className = "inline-block align-middle" }) => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const raf = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!raf.current) {
        raf.current = requestAnimationFrame(() => {
          raf.current = null;
          updateEye(leftRef.current);
          updateEye(rightRef.current);
        });
      }
    };

    const updateEye = (eyeEl) => {
      if (!eyeEl) return;
      const rect = eyeEl.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = mouse.current.x - cx;
      const dy = mouse.current.y - cy;
      const angle = Math.atan2(dy, dx);
      const deg = (angle * 180) / Math.PI;

      const line = eyeEl.querySelector('.line');
      if (line) line.style.transform = `translate(-50%,-50%) rotate(${deg}deg)`;

      const pupil = eyeEl.querySelector('.pupil');
      if (pupil) {
        const maxMove = Math.min(rect.width, rect.height) * 0.16;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const move = Math.min(maxMove, dist * 0.06);
        const px = Math.cos(angle) * move;
        const py = Math.sin(angle) * move;
        pupil.style.transform = `translate(${px}px, ${py}px)`;
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', (ev) => {
      if (ev.touches && ev.touches[0]) {
        onMove({ clientX: ev.touches[0].clientX, clientY: ev.touches[0].clientY });
      }
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  // small eye markup sized to fit inline with heading
  return (
    <span className={className} aria-hidden>
      <span ref={leftRef} className="relative inline-block w-50 h-50 mr-2">
        <span className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-md relative">
          <span className="pupil w-40 h-40 rounded-full bg-black block transition-transform duration-100"></span>
          <span className="line absolute top-1/2 left-1/2 w-6 h-1 pointer-events-none" style={{ transform: 'translate(-50%,-50%)' }}>
            <span className="w-10 h-10 rounded-full bg-white absolute"></span>
          </span>
        </span>
      </span>

      <span ref={rightRef} className="relative inline-block w-50 h-50">
        <span className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-md relative">
          <span className="pupil w-40 h-40 rounded-full bg-black block transition-transform duration-100"></span>
          <span className="line absolute top-1/2 left-1/2 w-6 h-1 pointer-events-none" style={{ transform: 'translate(-50%,-50%)' }}>
            <span className="w-10 h-10 rounded-full bg-white absolute"></span>
          </span>
        </span>
      </span>
    </span>
  );
};

const Cta = () => {
  return (
    <div data-scroll-section data-scroll data-scroll-speed='-.1' className='w-full h-screen bg-[#CDEA68] flex flex-col justify-center items-center text-center relative'>
      <h1 className='text-6xl md:text-8xl text-black font-bold uppercase leading-tight'>
        ready  <br /> to start <br /> the project
      </h1>
      <SmallEyes className="inline-block align-middle mx-2 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2" />
      <button className="mt-8 px-6 py-3 bg-black text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">Get in Touch</button>
    </div>

  
  );
};

export default Cta;