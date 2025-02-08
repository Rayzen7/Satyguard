import React from 'react'
import Contact from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer.jsx'
import { NavbarUser } from './auth/NavbarUser.jsx'

const Contacts = () => {
  return (
    <div>
      <div className='relative z-10'>
        <NavbarUser/>
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Contacts