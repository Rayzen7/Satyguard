import React from 'react'
import About from '../components/Information/About'
import Footer from '../components/Footer.jsx'
import Issue from '../components/Information/Issue.jsx'
import Charts from '../components/Information/Chart.jsx'
import { NavbarUser } from './auth/NavbarUser.jsx'

const Information = () => {
  return (
    <div>
        <div className='relative z-10'>
            <NavbarUser/>
        </div>
        <About/>
        <Issue/>
        <Charts/>
        <Footer/>
    </div>
  )
}

export default Information