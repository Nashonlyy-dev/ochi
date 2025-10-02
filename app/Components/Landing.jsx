"use client"
import { motion } from "motion/react"
import React from 'react'

const Landing = () => {
  
  return (
    <div data-scroll-section data-scroll-speed='-.2' className='w-full h-screen bg-zinc-900 pt-2'>
      <div className='text mt-40 px-20'>
        <div className='masker'>
          <h1
            className='text-8xl font-extrabold uppercase leading-[4.5vw] tracking-tighter'
            style={{ fontFamily: 'FoundersGrotesk-Semibold (1) , monospace' }}
          >
            We Create
          </h1>
        </div>
        <div className='flex overflow-hidden'>
        <motion.div initial={{ width: 0 }}  animate={{ width: '9vw' }} transition={{ease: [0.65, 0, 0.35, 1]}} className="img w-[9vw] h-[5vw] mt-[20px] mr-4 rounded-2xl  ">
         
        </motion.div>
        <div className='masker'>
          <h1
            className='text-8xl font-extrabold uppercase leading-none tracking-tighter'
            style={{ fontFamily: 'app/assets/FoundersGrotesk-Semibold (1) , monospace' }}
          >
            eye-opening
          </h1>
        </div>

        </div>
        <div className='masker'>
          <h1
            className='text-8xl font-extrabold uppercase leading-[4.5vw] tracking-tighter'
            style={{ fontFamily: 'app/assets/FoundersGrotesk-Semibold (1) , monospace' }}
          >
            presentations
          </h1>
        </div>
      </div>

      <div className='border-t-[1px] border-zinc-700 mt-20'></div>

      <div className='flex items-center justify-between px-5 '> 
        <h5 className=''>Presentation and storytelling agency</h5>
        <h5 className=''>
For innovation teams and global brands</h5>
      {/* Flex row with button */}
      <div className='flex items-center justify-end px-20 mt-8'>
        <button
          className='flex items-center gap-2 px-3 py-3 border-[1px] border-zinc-700 rounded-full text-lg uppercase text-zinc-300 font-medium transition-colors duration-200 hover:bg-black hover:text-white'
        >
          For start the project
          <span className='flex items-center justify-center w-8 h-8 rounded-full border border-zinc-700 bg-transparent hover:bg-white hover:scale-150 transition-colors duration-200'>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className='hover:text-black'
              style={{ transform: 'rotate(-45deg)' }}
            >
 <path d="M5 9h8M11 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

            </svg>
             
            
          </span>
        </button>
      </div>

      </div>

    </div>
  )
}

export default Landing