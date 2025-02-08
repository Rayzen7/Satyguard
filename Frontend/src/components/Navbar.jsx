import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import logo from '/image/logo/logo.png';
import list from '/image/list.png';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;
    useEffect(() => {
      const handleSize = () => {
        const isMobile = window.matchMedia('(max-width: 1024px)').matches;
        setInvisible(!isMobile);
      }

      window.addEventListener('resize', handleSize);
      return () => {
        window.removeEventListener('resize', handleSize);
      }
    },[]);

    const [invisible, setInvisible] = useState(!isMobile);
    const toggleList = () => {
        setInvisible(!invisible);
    }
    const ulClass = 'lg:items-center items-start font-poppins flex lg:gap-16 lg:mt-0 text-[18px] lg:w-full lg:pl-0 lg:h-0 pl-10 lg:pt-0 lg:relative absolute lg:flex-row flex-col gap-10 top-0 right-0 w-[200px] h-[100vh] lg:bg-none bg-white cursor-pointer lg:justify-end justify-center';
    const visibilityClass = invisible ? 'animate-moveRight' : 'animate-moveLeft';

  return (
    <div className='flex justify-between items-center bg-white w-full h-[12vh] lg:h-[16vh] lg:px-12 px-6 fixed'>
        <a href="#">
          <img src={logo} alt="" className='lg:w-[65px] w-[45px] h-auto'/>
        </a>
        <ul className={`${ulClass} ${visibilityClass}`}>
            <Link to="/"><li className={`hover:scale-95 lg:text-[20px] hover:text-purple transition-all ${location.pathname === '/'  ? 'text-purple' : ''}`}>Home</li></Link>
            <Link to="/Information"><li className={`hover:scale-95 lg:text-[20px] hover:text-purple transition-all ${location.pathname === '/Information'  ? 'text-purple' : ''}`}>Information</li></Link>
            <Link to='/Contacts'><li className={`hover:scale-95 lg:text-[20px] hover:text-purple transition-all ${location.pathname === '/Contacts'  ? 'text-purple' : ''}`}>Contact</li></Link>
            <Link to='/Satybot'><li className={`hover:scale-95 lg:text-[20px] hover:text-purple transition-all ${location.pathname === '/Satybot'  ? 'text-purple' : ''}`}>Satybot</li></Link>
            <Link to='/Login'><li className={`hover:scale-95 lg:text-[20px] hover:text-purple transition-all ${location.pathname === '/Login'  ? 'text-purple' : ''}`}>Login</li></Link>
            <Link to='/Downloads'><li><button className='font-poppins2 border-2 rounded-2xl lg:px-8 lg:py-2 px-3 py-2 hover:scale-90 transition-all'>Download</button></li></Link>
        </ul>
        <img src={list} alt="" className='lg:w-[20px] h-auto w-[16px] relative z-20 cursor-pointer icon' onClick={toggleList}/>
    </div>
  )
}

export default Navbar;
