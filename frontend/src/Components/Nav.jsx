import React from 'react'
import HamburgerMenu from './HamburgerMenu'

const Nav = () => {
  return (
    <header className='py-6 px-6  z-10 absolute w-full bg-white shadow-md'>
      <nav className='flex justify-between w-full m-2 items-center'>
        <ul className='flex-1 flex justify-center items-center
        gap-16 max-lg:hidden'>
            <li>
                <a href='#home' className='font-montserrat leading-normal text-lg text-slate-400 hover:text-orange-300 '>
                    Home
                </a>
            </li>
            <li>
                <a href='#home' className='font-montserrat leading-normal text-lg text-slate-400 hover:text-orange-300 '>
                    Home
                </a>
            </li>
            <li>
                <a href='#home' className='font-montserrat leading-normal text-lg text-slate-400 hover:text-orange-300 '>
                    Home
                </a>
            </li>
            <li>
                <a href='#home' className='font-montserrat leading-normal text-lg text-slate-400 hover:text-orange-300 '>
                    Home
                </a>
            </li>
        </ul>
        < HamburgerMenu />
      </nav>
    </header>
  )
}

export default Nav
