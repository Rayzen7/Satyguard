import React, { useState } from 'react'
import logo from '/image/logo/logo.png';
import list from '/image/list.png';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';

const Navbar = () => {
    const [invisible, setInvisible] = useState(true);
    const toggleList = () => {
        setInvisible(!invisible);
    }
    const ulClass = 'lg:items-center items-start font-poppins flex lg:space-y-0 lg:space-x-20 text-[18px] lg:w-full lg:pl-0 lg:h-0 pl-10 lg:pt-0 lg:relative absolute lg:flex-row flex-col space-y-16 top-0 right-0 w-[200px] h-[100vh] pt-[130px] lg:bg-none bg-white cursor-pointer lg:justify-end justify-start';
    const visibilityClass = invisible ? 'animate-moveRight' : 'animate-moveLeft';
  return (
    <div className='flex justify-between items-center bg-white w-full h-[12vh] lg:h-[16vh] lg:px-12 px-6 fixed'>
        <a href="#">
          <img src={logo} alt="" className='lg:w-[80px] w-[60px] h-auto'/>
        </a>
        <ul className={`${ulClass} ${visibilityClass}`}>
            <Link to="/"><li className='hover:scale-90 transition-all'>Home</li></Link>
            <Link to="/Information"><li className='hover:scale-90 transition-all'>Information</li></Link>
            <Link to='/Contacts'><li className='hover:scale-90 transition-all'>Contact</li></Link>
            <Link to='/Downloads'><li><button className='font-poppins2 border-2 rounded-2xl lg:px-8 lg:py-2 px-3 py-2 hover:scale-90 transition-all'>Download</button></li></Link>
        </ul>
        <img src={list} alt="" className='lg:w-[20px] h-auto w-[16px] relative z-20 cursor-pointer icon' onClick={toggleList}/>
    </div>
  )
}

export default Navbar;
