import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="">
      <div className='bg-black w-full h-auto lg:py-0 py-16 lg:h-[50vh] rounded-t-3xl flex flex-col justify-center items-center'>
        <div className="flex lg:flex-row flex-col justify-center lg:justify-around w-full items-center lg:items-start">
          <div className="text-white lg:text-start text-center">
            <h1 className='font-poppins2 text-[36px] lg:text-[42px]'>Satyguard</h1>
            <p className='lg:text-[20px] text-[16px] font-poppins2 py-2 lg:pt-6'>One Touch, One Protection.</p>
          </div>
          <div className="text-white lg:flex-row lg:mt-0 mt-14 flex-col flex gap-24">
            <div className="flex flex-col font-poppins2 gap-6">
              <h1 className='text-[24px] font-poppins'>About</h1>
              <div className="flex flex-col gap-3 cursor-pointer">
                <Link>
                  <p className='text-[18px] text-[#d1d0d0]'>About Us</p>
                </Link>
                <Link>
                  <p className='text-[18px] text-[#d1d0d0]'>Contact</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col font-poppins2 gap-6">
              <h1 className='text-[24px] font-poppins'>Contact</h1>
              <div className="flex flex-col gap-3 cursor-pointer">
                <Link>
                  <p className='text-[18px] text-[#d1d0d0]'>Facebook</p>
                </Link>
                <Link>
                  <p className='text-[18px] text-[#d1d0d0]'>Linkedin</p>
                </Link>
                <Link>
                  <p className='text-[18px] text-[#d1d0d0]'>Instagram</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-white font-poppins2 pb-6 bg-black text-center z-[99px]'>©2025 - Ctrl+Alt+Win</p>
    </div>
  )
}

export default Footer