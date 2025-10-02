import React from 'react'

const NavBar = () => {
  return (
    <div data-scroll-section className='nav w-full fixed z-[999] bg-zinc-800 text-white flex items-center justify-between py-4 px-10'>
        <h1 className='text-2xl font-bold '>Ochi</h1>
        <div className='flex space-x-4 ml-20'>
           {['Home', 'About', 'Services', 'Portfolio'].map((item) => (
            
            <h6 key={item}  style={{ fontFamily: 'NeueMontreal-Regular, serif' }} className='cursor-pointer hover:text-gray-400'>{item}</h6>
           ))}
        </div>

        <h6 className='cursor-pointer hover:text-gray-400 mr-20'>Contact</h6>

    </div>
  )
}

export default NavBar