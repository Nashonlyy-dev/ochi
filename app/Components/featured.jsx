"use client"

import { motion } from "motion/react"
import React from 'react'
import { useRef, useEffect } from "react"
import { gsap } from "gsap"

const featured = () => {
    
    const labelContainers = useRef([])

    useEffect(() => {
      // initialize label spans to be translated down and invisible
      labelContainers.current.forEach((container) => {
        if (container) {
          gsap.set(container.querySelectorAll("span"), { y: 20, opacity: 0 })
        }
      })
    }, [])

    const handleEnter = (index) => {
      const container = labelContainers.current[index]
      if (!container) return
      gsap.to(container.querySelectorAll("span"), {
        x: 0,
        opacity: 1,
        stagger: 0.06,
        duration: 0.4,
        ease: "power2.out",
      })
    }

    const handleLeave = (index) => {
      const container = labelContainers.current[index]
      if (!container) return
      gsap.to(container.querySelectorAll("span"), {
        x: 20,
        opacity: 0,
        stagger: 0.04,
        duration: 0.28,
        ease: "power2.in",
      })
    }

    return (
      <div data-scroll-section className="w-full h-screen mt-10 p-12">
        <h1 className="text-white text-5xl font-[350] mt-10">Featured Project</h1>

        <hr className="mt-10 w-full" />

        <div className="cards w-full flex gap-10 mt-9">
          <div
            className="cardcontainer w-full h-[75vh] relative "
            ref={(el) => (labelContainers.current[0] = el)}
          >
            <div className="w-full h-full rounded-3xl bg-amber-950 relative overflow-hidden">
              <h1 className="text-8xl text-[#cdea68] absolute right-10 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {"VISEy".split("").map((item, index) => (
                  <motion.span key={index}>{item}</motion.span>
                ))}
              </h1>

              <img
                className="w-full h-full object-cover rounded-3xl"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
                alt=""
                onMouseEnter={() => handleEnter(0)}
                onMouseLeave={() => handleLeave(0)}
              />
            </div>

            <div className="lables flex gap-2 mt-2">
              <span className="text-white text-sm  border-2 border-white rounded-4xl p-2 hover:bg-white hover:text-black">
                Salience Website
              </span>
              <span className="text-gray-400 text-sm border-2 border-white rounded-4xl p-2 hover:bg-white hover:text-black">
                UI/UX Design
              </span>
            </div>
          </div>

          <div
            className="cardcontainer w-full h-[75vh] relative"
            ref={(el) => (labelContainers.current[1] = el)}
          >
            <div className="w-full h-full rounded-3xl bg-amber-950 relative overflow-hidden">
              <h1 className="text-8xl text-[#cdea68] absolute -right-30 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {"FLUXDUKE".split("").map((item, index) => (
                  <motion.span key={index} className="">
                    {item}
                  </motion.span>
                ))}
              </h1>

              <img
                className="w-full h-full object-cover rounded-3xl"
                src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"
                alt=""
                onMouseEnter={() => handleEnter(1)}
                onMouseLeave={() => handleLeave(1)}
              />
            </div>

            <div className="lables flex gap-2 mt-2">
              <span className="text-white text-sm  border-2 border-white rounded-4xl p-2 hover:bg-white hover:text-black">
                Website
              </span>
              <span className="text-gray-400 text-sm border-2 border-white rounded-4xl p-2 hover:bg-white hover:text-black">
                UI/UX Design
              </span>
              <span className="text-gray-400 text-sm border-2 border-white rounded-4xl p-2 hover:bg-white hover:text-black">
                Nash Only
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  
}

export default featured