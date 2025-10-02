"use client"

import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/featured'
import Cards from './Components/Cards'
import Cta from './Components/Cta'
import Loader from './Components/Loader'

import LocomotiveScroll from 'locomotive-scroll';

const page = () => {
  
const locomotiveScroll = new LocomotiveScroll();

  const [ready, setReady] = useState(false);
  useEffect(() => {
    let loco = null;
    let mounted = true;

    const initLoco = async () => {
      if (typeof window === 'undefined') return;
      const Locomotive = (await import('locomotive-scroll')).default;
      const container = document.querySelector('[data-scroll-container]') || document.body;
      try {
        loco = new Locomotive({ el: container, smooth: true });
        // give locomotive a tick to stabilize
        setTimeout(() => {
          if (mounted) setReady(true);
        }, 300);
      } catch (e) {
        // ignore
        setReady(true);
      }
    };

    initLoco();

    return () => {
      mounted = false;
      if (loco && typeof loco.destroy === 'function') loco.destroy();
    };
  }, []);

  return (
    <div data-scroll-container className='w-full h-screen bg-zinc-900 '>
      <NavBar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Cta />
      {!ready && <Loader />}
    </div>
  )
}

export default page