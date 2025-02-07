import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/Information/About'
import Footer from '../components/Footer.jsx'
import Issue from '../components/Information/Issue.jsx'
import Charts from '../components/Information/Chart.jsx'

const Information = () => {
  return (
    <div>
        <div className='relative z-10'>
            <Navbar/>
        </div>
        <About/>
        <Issue/>
        <Charts/>
        <Footer/>
    </div>
  )
}

export default Information