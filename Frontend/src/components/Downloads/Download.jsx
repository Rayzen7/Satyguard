import React from 'react'
import handphone from '/image/information/handphone1.png'
import kutip from '/image/information/kutip.png'
import './Download.css';

const Download = () => {
  return (
    <div className='lg:pt-[8%] pt-[30%] pb-32'>
        <div className='flex lg:flex-row flex-col justify-around items-center lg:px-[20px] px-[10px]'>
            <div className='flex flex-col gap-12'>
                <div className='lg:w-[450px] space-y-2 -mt-1' data-aos="fade-right" data-aos-duration="800">
                    <h1 className='font-poppins lg:text-[45px] text-[25px] lg:w-[600px] lg:text-start text-center'>SatyGuard : One touch, <br /> 
                    One protection </h1>
                    <p className='font-poppins1 lg:w-[450px] lg:text-[17px] text-[14px] lg:px-0 px-[20px] lg:text-start text-center'>Advanced security protection applications that bring cutting-edge technology to the forefront of security management. Access a wide range of tools and resources designed to enhance overall security and protection.</p>
                </div>
                <div className='bg-gray1 flex flex-col items-center justify-center mt-6 rounded-xl lg:scale-100 lg:w-full w-[330px] mx-auto lg:mx-0' data-aos="fade-up" data-aos-duration="800">
                    <img src={kutip} alt="" className='w-[50px] h-auto my-3 lg:mr-[350px] mr-[280px]'/>
                    <p className='font-poppins w-[350px] lg:text-left text-center lg:px-0 px-[16px]'>Be part of the movement to protect children and women with SatyGuard, their safety is our priority.</p>
                    <img src={kutip} alt="" className='w-[50px] h-auto my-3 lg:ml-[350px] ml-[280px]'/>
                    <button className='bg-black font-poppins2 text-white w-full h-[60px] rounded-xl hover:scale-90 hover:opacity-80 transition-all'>Learn more about SatyGuard</button>
                </div>
            </div>
            <div className='handphone flex-col items-end justify-center mt-[20px]' data-aos="fade-down-left" data-aos-duration="800">
                <img src={handphone} alt="" className='h-auto w-[450px] animate-move'/>
                <div className='bg-primary w-[530px] h-[260px] relative -z-10 rounded-xl -mt-[210px]'></div>
            </div>
        </div>
    </div>
  )
}

export default Download
