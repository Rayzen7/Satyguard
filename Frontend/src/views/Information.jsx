import React from 'react'
import About from '../components/Information/About'
import Footer from '../components/Footer.jsx'
import Issue from '../components/Information/Issue.jsx'
import Charts from '../components/Information/Chart.jsx'
import { NavbarUser } from './auth/NavbarUser.jsx'
import Article from '../components/Information/Article.jsx'

const Information = () => {
  return (
    <div>
        <div className='relative z-10'>
            <NavbarUser/>
        </div>
        <About/>
        <Issue/>
        <Charts/>
        <Article/>
        <Footer/>
    </div>
  )
}

export default Information