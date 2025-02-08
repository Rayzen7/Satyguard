import React from 'react'
import Hero from '../components/Home/Hero.jsx';
import About from '../components/Home/About.jsx';
import Features from '../components/Home/Features.jsx';
import Footer from '../components/Footer.jsx';
import { NavbarUser } from './auth/NavbarUser.jsx';
import Profile from '../components/Home/Profile.jsx';

const Home = () => {
  return (
    <div>
        <div className='relative z-30'>
          <NavbarUser/>
        </div>
        <Hero/>
        <About/>
        <Features/>
        <Profile/>
        <Footer/>
    </div>
  )
}

export default Home