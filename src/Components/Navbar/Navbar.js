import React, {useState} from 'react'
import { Link, animateScroll as scroll, } from 'react-scroll'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
export const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)
  return (
    <div className='w-screen h-[80px] z-10  fixed drop-shadow-lg'>
    <div className='px-2 flex justify-between items-center w-full h-full'>
      <div className='flex items-center'>
        <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>JSON C.</h1>
        <ul className='hidden md:flex'>
        <li><Link to="/" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="/projects" smooth={true} offset={-200} duration={500}>Projects</Link></li>
        </ul>
      </div>
      
      <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        
      </div>
    </div>

    <ul className={!nav ? 'hidden' : 'absolute bg-black-200 w-full px-8'}>
        <li className=''><Link onClick={handleClose} to="/" smooth={true} duration={500}>Home</Link></li>
        <li className=''><Link onClick={handleClose} to="/projects" smooth={true} offset={-200} duration={500}>Projects</Link></li>
    </ul>
  </div>
  )
}
export default Navbar