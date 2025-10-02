"use client"

import React, { useEffect, useRef } from "react";

const Eyes = () => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          updateEye(leftEyeRef.current);
          updateEye(rightEyeRef.current);
        });
      }
    };

    const updateEye = (eyeEl) => {
      if (!eyeEl) return;

      const rect = eyeEl.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = mouseRef.current.x - cx;
      const dy = mouseRef.current.y - cy;
      const angle = Math.atan2(dy, dx); // radians
      const deg = (angle * 180) / Math.PI;

      // rotate the line element inside the eye
      const line = eyeEl.querySelector(".line");
      if (line) {
        // keep translate(-50%,-50%) to center the line, then rotate
        line.style.transform = `translate(-50%,-50%) rotate(${deg}deg)`;
      }

      // move the pupil (black circle) constrained inside the eye
      const pupil = eyeEl.querySelector(".pupil");
      if (pupil) {
        const maxMove = Math.min(rect.width, rect.height) * 0.12; // max offset in px
        const dist = Math.sqrt(dx * dx + dy * dy);
        // scale movement so pupil doesn't jump to edge: use a factor
        const move = Math.min(maxMove, dist * 0.06);
        const px = Math.cos(angle) * move;
        const py = Math.sin(angle) * move;
        pupil.style.transform = `translate(${px}px, ${py}px)`;
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", (ev) => {
      if (ev.touches && ev.touches[0]) {
        onMove({ clientX: ev.touches[0].clientX, clientY: ev.touches[0].clientY });
      }
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="w-full h-screen mt-20">
      <div  data-scroll-section data-scroll data-scroll-speed="-.3" className="w-full h-full relative">
        <img
          src="https://i.ibb.co/1YQK4WVK/Adobe-Express-file.png"
          alt="Eyes"
          className="w-full h-full object-cover"
        />

        {/* eyes wrapper centered in the image */}
  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-8 pointer-events-none">
          {/* left eye */}
          <div className="relative" ref={leftEyeRef}>
            {/* rotatable: rotate this element to move both the eye and the line together (we rotate only the line) */}
            <div className="w-50 h-50 rounded-full bg-white flex items-center justify-center shadow-lg relative">
              {/* pupil (black) - this will move slightly inside the white eye */}
              <div className="pupil w-30 h-30 rounded-full bg-black flex items-center justify-center shadow-lg relative transition-transform duration-100"></div>

              {/* line inside eye: positioned absolutely and rotated via JS */}
                      <div className="line absolute top-1/2 left-1/2 w-30 h-10 pointer-events-none flex items-center justify-center" style={{ transform: "translate(-50%,-50%)" }}>
                      <div className="w-5 h-5 rounded-full bg-white absolute"></div>
                      </div>
                    </div>

                    {/* small glint (non-rotating) positioned outside rotatable so it won't rotate */}
            <div className="glint absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full pointer-events-none"></div>
          </div>

          {/* right eye */}
          <div className="relative" ref={rightEyeRef}>
            <div className="w-50 h-50 rounded-full bg-white flex items-center justify-center shadow-lg relative">
              <div className="pupil w-30 h-30 rounded-full bg-black flex items-center justify-center shadow-lg relative transition-transform duration-100"></div>
              <div className="line absolute top-1/2 left-1/2 w-30 h-10 pointer-events-none flex items-center justify-center" style={{ transform: "translate(-50%,-50%)" }}>
                <div className="w-5 h-5 rounded-full bg-white absolute"></div>
              </div>
            </div>
            <div className="glint absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
