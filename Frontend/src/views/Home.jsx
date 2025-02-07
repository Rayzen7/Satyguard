import React from 'react'
import Hero from '../components/Home/Hero.jsx';
import About from '../components/Home/About.jsx';
import Navbar from '../components/Navbar.jsx';
import Features from '../components/Home/Features.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div>
        <div className='relative z-30'>
          <Navbar/>
        </div>
        <Hero/>
        <About/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default Home