import React from 'react'
import Download from '../components/Downloads/Download'
import Footer from '../components/Footer'
import { NavbarUser } from './auth/NavbarUser'

const Downloads = () => {
  return (
    <div>
        <div className='relative z-10'>
            <NavbarUser/>
        </div>
        <Download/>
        <Footer/>
    </div>
  )
}

export default Downloads