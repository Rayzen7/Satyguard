import React from 'react'
import { datafeatures } from '../../assets/Data.js'

const Features = () => {
  return (
    <div className='mt-20 pb-32'>
        <div className='lg:pl-[150px] pl-[40px] lg:space-y-4 space-y-2'>
            <div className='flex items-center space-x-2' data-aos="fade-right" data-aos-duration="800">
                <div className='w-[35px] h-[35px] bg-primary rounded-full'></div>
                <p className='font-poppins lg:text-[17px] text-[15px]'>Benefits Obtained</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                <h1 className='font-poppins lg:text-[28px] text-[24px]'>Features Provided</h1>
                <div className='w-[160px] h-[15px] bg-pink rounded-2xl lg:-mt-[19px] -mt-[16px]'></div>
            </div>
        </div>
        <div className='mt-10'>
            <div className='flex lg:flex-row flex-col justify-center items-center flex-wrap gap-14' data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                { datafeatures.map((item) => (
                    <div key={item.id} className='bg-white border-[4px] border-purple lg:w-[500px] w-[280px] lg:h-[240px] h-[380px] rounded-[18px] flex lg:flex-row flex-col items-center justify-around p-4 cursor-pointer hover group hover:-translate-y-3 transition-all duration-300 hover:drop-shadow-xl'>
                        <img src={item.img} alt="" className='bg-white rounded-[9px] group-hover:-translate-y-4 transition-all duration-300 w-[120px] lg:w-[130px] h-auto'/>
                        <div className='lg:text-right text-center font-poppins flex flex-col justify-center lg:items-end items-center'>
                            <h1 className='text-[24px] lg:w-[250px] w-auto lg:pb-0 pb-2 relative z-10'>{item.head}</h1>
                            <div className={`bg-pink outline-none border-none w-[${item.hr}px] h-[10px] rounded-lg -translate-y-6 lg:-translate-y-4`}></div>
                            <p className='lg:w-[250px] w-auto text-[14px] lg:px-0 px-3 lg:mt-0 -mt-3'>{item.text}</p>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    </div>
  )
}

export default Features