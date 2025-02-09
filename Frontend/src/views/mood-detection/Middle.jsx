/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import NavbarBack from './NavbarBack'
import axios from 'axios'
import { useEffect, useState } from 'react'
import logo from '/image/mood/middle/logo.png'
import icon1 from '/image/mood/middle/icon-1.svg'
import icon2 from '/image/mood/middle/icon-2.svg'
import icon3 from '/image/mood/middle/icon-3.svg'

const Middle = () => {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        const fetchResponse = async() => {
            try {
                const response = await axios.get('http://localhost:7001/result');
                setMessage(response.data.mood.probability);
            } catch (error) {
                console.error(error);
            }
        }

        fetchResponse();
    }, []);
  return (
    <div>
        <NavbarBack/>
        <div className="w-full h-[100vh] flex flex-col justify-center items-center lg:pt-12 pt-32 lg:mb-0 mb-20" data-aos="fade-up" data-aos-duration="800">
            <div className="bg-[#e6e6e6] p-8 w-[320px] lg:w-[900px] h-auto lg:h-[500px] rounded-lg">
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <h1 className='text-purple font-poppins text-[20px] lg:text-[24px]'>Current Mood</h1>
                        <p className='font-poppins1 text-[17px] lg:text-[20px] text-purple'>{message}%</p>
                    </div>
                    <div className="w-full h-[10px] lg:h-[16px] bg-white rounded-full">
                        <div className="bg-[#FFF673] h-[10px] lg:h-[16px] rounded-full transition-all animate-moveIn w-0 duration-150" style={{width: `${message}%`}}></div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-8">
                    <img src={logo} alt="" className='w-[80px] lg:w-[120px] h-auto' />
                    <h1 className='font-poppins text-[14px] lg:text-[20px] pt-3 text-center'>You're feeling okay. Maybe take a short break and relax.</h1>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-7">
                        <div className="bg-white py-4 px-8 rounded-xl flex flex-col justify-center items-center gap-2">
                            <img src={icon1} alt="" className='lg:w-[18px] w-[10px] h-auto' />
                            <p className='text-center font-poppins1 text-[10px] lg:text-[14px]'>go for a nature walk</p>
                        </div>
                        <div className="bg-white py-4 px-8 rounded-xl flex flex-col justify-center items-center gap-2">
                            <img src={icon2} alt="" className='lg:w-[25px] w-[15px] h-auto' />
                            <p className='text-center font-poppins1 text-[10px] lg:text-[14px]'>do something creative</p>
                        </div>
                        <div className="bg-white py-4 px-8 rounded-xl flex flex-col justify-center items-center gap-2">
                            <img src={icon3} alt="" className='lg:w-[25px] w-[15px] h-auto' />
                            <p className='text-center font-poppins1 text-[10px] lg:text-[14px]'>share your happiness</p>
                        </div>
                    </div>
                    <p className='text-center font-poppins text-[16px] lg:text-[20px] mt-6'>Every day is a new opportunity<span className='text-purple'> to grow and heal.</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Middle